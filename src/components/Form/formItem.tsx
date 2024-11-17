import classNames from "classnames";
import React, { ReactNode, useContext, useEffect } from "react";
import { formContext } from "./form";

export interface FormItemProps {
  /** name */
  name: string;
  /** 元素名 */
  label?: string;
  /**  */
  children?: ReactNode;
  valuePropName?: string;
  trigger?: string;
  getValueFromEvent?: (event: any) => any;
}

export const FormItem = ({
  name,
  label,
  children,
  valuePropName = "value",
  trigger = "onChange",
  getValueFromEvent = (e) => e.target.value
}: FormItemProps) => {
  const rowClasses = classNames("vanilla-row", {
    "vanilla-row-no-label": !label
  })
  const { dispatch, fields, initialValues } = useContext(formContext)

  useEffect(() => {
    const value = initialValues && initialValues[name]
    dispatch({type: "addField", name, value: {label, name, value}})
  }, [])
  // 获取store对应值
  const fieldState = fields[name]
  const value = (fieldState && fieldState.value) || ""
  const onValueUpdate = (e: any) => {
    const value = getValueFromEvent(e)
    console.log("new value", value)
    dispatch({type: "updateValue", name, value})
  }
  // 创建列表，包含value和onChange
  const controlProps: Record<string, any> = {}
  controlProps[valuePropName] = value
  controlProps[trigger] = onValueUpdate
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
          <label title={label}>{label}</label>
        </div>
      )}
      <div className="vanilla-form-item">{returnChildNode}</div>
    </div>
  );
}