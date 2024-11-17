import { useState, useReducer } from "react";
export interface FieldDetail {
  name: string;
  value: string;
  rules: any[];
  isVaild: boolean;
  errors: any[];
}

export interface fieldState {
  [key: string]: FieldDetail;
}

export interface FormState {
  isVaild: boolean;
}
export interface FieldAtion {
  type: "addField" | "updateValue",
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
    default: 
      return state;
  }
}
export const useStore = () => {
  // from state
  const [form, setForm] = useState<FormState>({isVaild: true})
  const [fields, dispatch] = useReducer(filedReducer, {})
  return {
    fields,
    dispatch,
    form,
  }
}