import { useState, useReducer } from "react";
import Schema, { RuleItem, ValidateError} from "async-validator";
import { mapValues, each } from "lodash-es";
export type CustomRuleFunc = ({ getFieldValue }: any) => RuleItem
export type CustomRule = CustomRuleFunc | RuleItem
export interface FieldDetail {
  name: string;
  value: string;
  rules: CustomRule[];
  isVaild: boolean;
  errors: ValidateError[];
}

export interface fieldState {
  [key: string]: FieldDetail;
}

export interface FormState {
  isVaild: boolean;
  isSubmiting: boolean;
  errors: Record<string, ValidateError[]>
}

export interface ValidateErrorType extends Error {
  errors: ValidateError[],
  fields: Record<string, ValidateError[]>
}

export interface FieldAtion {
  type: "addField" | "updateValue" | "updateValidateResult",
  name: string,
  value: any,
}
const filedReducer = (state: fieldState, action: FieldAtion): fieldState => {
  switch (action.type) {
    case "addField": 
      return {
        ...state,
        [action.name]: {...action.value}
      }
    case "updateValue": 
      return {
        ...state,
        [action.name]: {...state[action.name], value: action.value}
      }
    case "updateValidateResult": 
    const {isVaild, errors} = action.value
      return {
        ...state,
        [action.name]: {...state[action.name], isVaild, errors}
      }
    default: 
      return state;
  }
}
export const useStore = (initialValues?: Record<string, any>) => {
  // from state
  const [form, setForm] = useState<FormState>({isVaild: true, isSubmiting: false, errors: {}})
  const [fields, dispatch] = useReducer(filedReducer, {})
  const getFieldValue = (key: string) => {
    return fields[key] && fields[key].value
  }
  const getFieldsValue = () => {
    return mapValues(fields, item => item.value)
  }

  const setFieldValue = (name: string, value: any) => {
    if (fields[name]) {
      dispatch({type: "updateValue", name, value})
    }
  }
  const reset = () => {
    each(fields, (value, name) => {
      if (initialValues?.[name]) {
        dispatch({type: "updateValue", name, value: initialValues[name]})
      } else {
        dispatch({type: "updateValue", name, value: null})
      }
    })
    // if (initialValues) {
    //   each(initialValues, (value, name) => {
    //     console.log(value, name)
    //     if (fields[name]) {
    //       dispatch({type: "updateValue", name, value})
    //     }
    //   })
    // } else {
    //   each(initialValues, ({value, name}) => {
    //     dispatch({type: "updateValue", name, value: null})
    //   })
    // }
  }
  const transformRules = (rules: CustomRule[]) =>{
    return rules.map(rule => {
      if (typeof rule === "function") {
        const calledRule = rule({getFieldValue})
        return calledRule
      } else {
        return rule
      }
    })
  }
  const validateField = async (name: string) => {
    const {value, rules} = fields[name]
    const afterRules = transformRules(rules)
    const descroptor = {
      [name]: afterRules,
    };
    const valueMap = {
      [name]: value,
    }
    const validator = new Schema(descroptor)
    let isVaild = true
    let errors: ValidateError[] = []
    console.log(valueMap, descroptor, validator);
    try {
      await validator.validate(valueMap)
    } catch (e) {
      console.log(e)
      isVaild = false
      const err = e as any
      console.log("e", err.errors)
      console.log("fields", err.fields)
      errors = err.errors
    } finally {
      console.log("errors", isVaild)
      dispatch({type: "updateValidateResult", name, value: {isVaild, errors}})
    }
  }
  // const test = async (
  //   name: string,
  //   errorsArray: Record<string, ValidateError[]>
  // ) => {
  //   const { value, rules } = fields[name];
  //   const afterRules = transformRules(rules);
  //   const descroptor = {
  //     [name]: afterRules,
  //   };
  //   const valueMap = {
  //     [name]: value,
  //   };
  //   const validator = new Schema(descroptor);
  //   // const result = await validator.validate(valueMap).then(res =>
  //   //  { console.log("res", res)
  //   //   return res
  //   //  }).catch(err => {
  //   //     console.log("err1",err.errors)
  //   //     return err.errors
  //   //   });
  //   console.log(descroptor, valueMap);
  //   try {
  //     await validator.validate(valueMap);
  //   } catch (e) {
  //     const err = e as ValidateErrorType;
  //     console.log(err.errors);
  //     errorsArray[name] = err.errors;
  //   }
  // };
  const validateAllField = async () => {
    // let errorsArray: Record<string, ValidateError[]> = {}
    // await each(fields, async ({ name }) => {
    //    test(name, errorsArray );
    // });
    // console.log("errorsArray", errorsArray)
    // each(fields, ({name}) => {
    //   if (errorsArray[name]){ 
    //   const itemErrors = errorsArray[name]
    //   console.log(itemErrors)
    //   dispatch({
    //     type: "updateValidateResult",
    //     name,
    //     value: { isVaild: false, errors: itemErrors },
    //   })
    // };
    // })
    // test("user")
    let isVaild = true
    let errors: Record<string, ValidateError[]> = {}
    // valueMap: { "user": "xxx@g.com"}
    const valueMap = mapValues(fields, item => item.value)
    
    const descroptor = mapValues(fields, item => transformRules(item.rules))
    const validator = new Schema(descroptor)
    console.log(valueMap, descroptor, validator);
    setForm({ ...form, isSubmiting: true });
    // await validator.validate(valueMap).then(res => console.log("res",res)).catch(err => {
    //   const error = err as ValidateErrorType
    //   console.log("errors-catch",error.fields)
    // })
    try {
      await validator.validate(valueMap)
    } catch (e) {
      console.error(e);
      isVaild = false
      const err = e as ValidateErrorType
      errors = err.fields
      each(fields, (value, name) => {
        // error 是否存在对应的key
        if (errors[name]) {
          const itemErrors = errors[name]
          dispatch({type: "updateValidateResult", name, value: {isVaild: false, errors: itemErrors}})
        } else if (value.rules.length > 0 && !errors[name]) {
          dispatch({type: "updateValidateResult", name, value: {isVaild: true, errors: []}})
        }
      })
    } finally {
      setForm({...form, isSubmiting: false, isVaild, errors})
      return {
        isVaild,
        errors,
        values: valueMap,
      }
    }
  }
  return {
    fields,
    dispatch,
    form,
    validateField,
    validateAllField,
    getFieldValue,
    getFieldsValue,
    setFieldValue,
    reset,
  };
}