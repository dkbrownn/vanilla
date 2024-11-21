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
  /** 是否展示当前值 */
  isShow?: boolean;
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
 * import { Select } from 'vanilla-react-dkbrownn'
 * // 然后可以使用 <Select> 和 <Select.Option>
 * ~~~
 */
export const Select = ({
  defaultValue,
  placeholder,
  disabled = false,
  multiple,
  name,
  isShow = false,
  onChange,
  onVisibleChange,
  children
}: SelectProps) => {
  const containerRef = useRef<HTMLInputElement>(null)
  const input = useRef<HTMLInputElement>(null);
  const containerWidth = useRef(0);
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
useEffect(() => {
  if (containerRef.current) {
    containerWidth.current = containerRef.current.getBoundingClientRect().width;
  }
});
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
      {isShow && (
        <div
          className="show-wrapper"
          style={{
            padding: ".5rem",
          }}
        >
          当前值：
          {!multiple ? (
            <span>{value}</span>
          ) : (
            selectedValues.map((value, index) => (
              <span key={index}>{value}</span>
            ))
          )}
        </div>
      )}
      <div className="vanilla-select-input" onClick={handleClick}>
        <Input
          ref={input}
          disabled={disabled}
          placeholder={placeholder}
          readOnly
          value={value}
          name={name}
          icon={"angle-down"}
        />
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
      <SelectContext.Provider value={passedContext}>
        <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
          <ul className="vanilla-select-dropdown">{generateOptions()}</ul>
        </Transition>
      </SelectContext.Provider>
    </div>
  );
}