import React, { createContext, FunctionComponentElement, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Input } from "../Input/input";
import { useClickOutside } from "../../Hooks/useClickOutside";
import { OptionProps } from "./option";
import { Transition } from "../Transition/transition";
import { Icon } from "../Icon/icon";

interface DataSourceObject {
  value: string;
}
export type DataSourceProps<T = {}> = T & DataSourceObject;

export interface SelectProps {
  /** 指定默认选中的条目	 可以是是字符串或者字符串数组*/
  defaultValue?: string | string[];
  /** 选择框默认文字*/
  placeholder?: string;
  /** 是否禁用*/
  disabled?: boolean;
  /** 是否支持多选*/
  multiple?: boolean;
  /** select input 的 name 属性	 */
  name?: string;
  /** 选中值发生变化时触发 */
  onChange?: (selectedValue: string, selectedValues: string[]) => void;
  /** 下拉框出现/隐藏时触发 */
  onVisibleChange?: (visible: boolean) => void;
  children?: React.ReactNode;
}
export interface ISelectContext {
  onSelect?: (value: string, isSelected?: boolean) => void;
  selectedValues: string[] | string;
  multiple?: boolean;
}

export const SelectContext = createContext<ISelectContext>({
  selectedValues: [],
})
/**
 * 下拉选择器。
 * 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
 * ### 引用方法
 * 
 * ~~~js
 * import { Select } from 'vanilla-react'
 * // 然后可以使用 <Select> 和 <Select.Option>
 * ~~~
 */
export const Select = ({
  defaultValue,
  placeholder,
  disabled,
  multiple,
  name,
  onChange,
  onVisibleChange,
  children
}: SelectProps) => {
  const containerRef = useRef<HTMLInputElement>(null)
  const input = useRef<HTMLInputElement>(null);
  const [menuOpen, setMenuOpen] = useState(false)
  const [value, setValue] = useState<string>(typeof defaultValue === "string" ? defaultValue : "");
  const [ selectedValues, setSelectedValues ] = useState<string[]>(Array.isArray(defaultValue)? defaultValue :[])
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (disabled) return 
    setMenuOpen(true)
    if(onVisibleChange) onVisibleChange(!menuOpen)
  }
  useClickOutside(containerRef, () => {
    setMenuOpen(false)
    if (onVisibleChange && menuOpen)
      onVisibleChange(false)
  })
  const handleOptionClick = (value: string, isSelected?: boolean) => {
    // 单选模式
    if (!multiple) {
      setMenuOpen(false)
      setValue(value)
      if (onVisibleChange) onVisibleChange(false)
    } else {
      setValue("")
    }
    let updatedValues = [value]
    if (multiple) {
      updatedValues = isSelected ? selectedValues.filter(v => v !== value) : [...selectedValues, value]
      setSelectedValues(updatedValues);
    }
    if (onChange) onChange(value, updatedValues)
  }

  useEffect(() => {
    // focus input
    console.log("111", input.current);
    if (input.current) {
      
      input.current.focus();
      if (multiple && selectedValues.length > 0) {
        
        input.current.placeholder = "";
      } else {
        if (placeholder) input.current.placeholder = placeholder;
      }
    }
  }, [selectedValues, multiple, placeholder]);

  const wrapperClasses = classNames("vanilla-select", {
    "menu-is-open": menuOpen,
    "is-disabled": disabled,
    "is-multiple": multiple,
  })
  
  const passedContext: ISelectContext = {
    onSelect: handleOptionClick,
    selectedValues: multiple ? selectedValues : value,
    multiple
  }

  const generateOptions = () => {
    const NodeList: any = {}
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<OptionProps>
      const value = childElement.props.value
      if (childElement.type.displayName === "Option") {
        if (!NodeList[value]){
          NodeList[value] = value
          return React.cloneElement(childElement, {
            index: `select-${index}`,
          });
        } else {
          console.error("Warning: Options can not have a equal value");
           return React.cloneElement(childElement, {
             index: `select-${index}`,
             "disabled": true
           });
        }
      } else {
        console.error(
          "Warning: Select has a child which is not a Option component"
        );
      }
    })
  }
  return (
    <div className={wrapperClasses} ref={containerRef}>
      <div
        className="show-wrapper"
        style={{
          padding: "1rem",
        }}
      >
        当前值：
        {!multiple ? (
          <span>{value}</span>
        ) : (
          selectedValues.map((value, index) => <span key={index}>{value}</span>)
        )}
      </div>
      <div className="viking-select-input">
        <Input
          ref={input}
          disabled={disabled}
          placeholder={placeholder}
          readOnly
          name={name}
          icon={"angle-down"}
          onClick={handleClick}
        />
      </div>
      <SelectContext.Provider value={passedContext}>
        <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
          <ul className="vanilla-select-dropdown">{generateOptions()}</ul>
        </Transition>
      </SelectContext.Provider>
      {multiple && (
        <div className="vanilla-selected-tags">
          {selectedValues.map((item, index) => {
            return (
              <span className="vanilla-tag" key={`tag-${index}`}>
                {item}
                <Icon
                  icon={"times"}
                  onClick={() => handleOptionClick(item, true)}
                />
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}