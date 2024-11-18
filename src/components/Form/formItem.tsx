import classNames from "classnames";
import React, { ReactNode, useContext, useEffect } from "react";
import { formContext } from "./form";
import { CustomRule } from "./useStore"
export interface FormItemProps {
  /** 字段名 */
  name: string;
  /** label 标签的文本 */
  label?: string;
  children?: ReactNode;
  /** 子节点的值的属性，如 checkbox 的是 'checked' */
  valuePropName?: string;
  /** 设置收集字段值变更的时机 */
  trigger?: string;
  /** 校验规则 */
  rules?: CustomRule[];
  /** 设置如何将 event 的值转换成字段值 */
  getValueFromEvent?: (event: any) => any;
  /** 设置字段校验的时机 */
  validateTrigger?: string;
}

export const FormItem = ({
  name,
  label,
  children,
  rules,
  valuePropName = "value",
  validateTrigger= "onBlur",
  trigger = "onChange",
  getValueFromEvent = (e) => e.target.value
}: FormItemProps) => {
  const rowClasses = classNames("vanilla-row", {
    "vanilla-row-no-label": !label
  })
  const { dispatch, fields, initialValues, validateField } = useContext(formContext)

  useEffect(() => {
    const value = initialValues && initialValues[name]
    dispatch({type: "addField", name, value: {label, name, value: value, rules: rules || [], errors: [], isVaild: true}})
  }, [])
  // 获取store对应值
  const fieldState = fields[name]
  const value = (fieldState && fieldState.value) || ""
  const error = (fieldState && fieldState.errors)
  const hasError = error && error.length > 0
  const isRequired = rules?.some(rule => {
    if (typeof rule !== "function") {
      return rule.required;
    }
  } )
  const labelClasses = classNames({
    "vanilla-form-item-required": isRequired,
  })
  const itemClasses = classNames("vanilla-form-item-control", {
    "vanilla-form-item-has-error": hasError,
  })
  const onValueUpdate = (e: any) => {
    const value = getValueFromEvent(e)
    console.log("new value", value)
    dispatch({type: "updateValue", name, value})
  }
  const onValueValidate = async () => {
    await validateField(name)
  }
  // 创建列表，包含value和onChange
  const controlProps: Record<string, any> = {}
  controlProps[valuePropName] = value
  controlProps[trigger] = onValueUpdate
  if (rules) {
    controlProps[validateTrigger] = onValueValidate
  }
  const childrenList = React.Children.toArray(children)
  // TODO 判断children类型，是否正确
  if (childrenList.length === 0) {
    console.error(" NO child element found in formItem, please provide one")
  } 
  if (childrenList.length > 1) {
    console.warn("Only support one child element in formItem")
  }
  if (!React.isValidElement(childrenList[0])) {
    console.error(" Child component is not a vaild React Element")
  }
  const child = childrenList[0] as React.ReactElement

  const returnChildNode = React.cloneElement(child, {
    ...child.props,
    ...controlProps
  })
  return (
    <div className={rowClasses}>
      {label && (
        <div className="vanilla-form-item-label">
          <label className={labelClasses} title={label}>
            {label}
          </label>
        </div>
      )}
      <div className="vanilla-form-item">
        <div className={itemClasses}>{returnChildNode}</div>
        {
          hasError && <div className="vanilla-form-item-explain">{error[0].message}</div>
        }
      </div>
    </div>
  );
}