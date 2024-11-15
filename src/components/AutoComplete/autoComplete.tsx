import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Input, InputProps } from "../Input/input";
import { Icon } from "../Icon/icon";
import { useDebounce } from "../../Hooks/useDebounce";
import { useClickOutside } from "../../Hooks/useClickOutside";
interface DataSourceObject {
  value: string
}
// let fn: (x: number) => DataSourceObject[];
// fn = (x: number) => {
//   return [{
//     value: '1',
//     x: x
//   }]
// }
// fn(1)
// interface A {
//   value: string;
// }
// const extra = { value: "test", number: 123 };
// const obj: A = extra; // 不会报错
export type DataSourceProps<T = {}> = T & DataSourceObject
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
  /** 获取数据 */
  fetchSuggestios: (str: string) => DataSourceProps[] | Promise<DataSourceObject[]>;
  /** 点击所选项 */
  onSelect?: (item: DataSourceProps) => void;
  /** 自定义渲染结果 */
  renderOptions?: (item: DataSourceProps) => React.ReactElement;
}
export const AutoComplete = ({
  fetchSuggestios,
  onSelect,
  renderOptions,
  value,
  ...restProps
}: AutoCompleteProps) => {
  const [inputValue, setInputValue] = useState(value as  string)
  const [loading, setLoading] = useState<boolean>(false)
  const [suggestions, setSuggestions] = useState<
    DataSourceProps[]
  >([]);
  const triggerSearch = useRef(true)
  const componentRef = useRef<HTMLDivElement>(null)
  const [hightLight, setHightLight] = useState(-1)
  console.log(suggestions)
  const renderSearchIcon = () => {
    return <div className="suggestions-loading-icon">{loading ? <Icon icon="spinner" spin /> : null}</div>
  };
  const debounceValue = useDebounce(inputValue, 500);

  useClickOutside(componentRef, () => {
    setSuggestions([])
  })
  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      const results = fetchSuggestios(debounceValue);
      if (results instanceof Promise) {
        results.then((data) => {
          setLoading(false);
          setSuggestions(data);
        });
      } else {
        setSuggestions(results)
        setLoading(false)
      }
    } else {
      setSuggestions([])
      setLoading(false)
    }
    triggerSearch.current = false
    setHightLight(-1);
  }, [debounceValue, fetchSuggestios]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    setSuggestions([]);
    triggerSearch.current = true
    if (!value) return 
    setLoading(true)
  }
  const renderTmeplate = (item: DataSourceProps) => {
    return renderOptions ? renderOptions(item) : item.value;
  };
  const handleClick = (value: DataSourceProps) => {
    if (value) {
      setInputValue(value.value);
      setSuggestions([]);
       triggerSearch.current = false;
      if (onSelect) onSelect(value);
    }
  };
  const generateDropdown = () => {
    
    return (
      <ul className="vanilla-suggestion-list" data-tetsid="test-list">
        {suggestions?.map((item, index) => {
          const hightLightClasses = classNames("suggestion-item", {
            "is-active": hightLight === index,
          });
          return <li className={hightLightClasses} key={index} onClick={() => handleClick(item)}>
            {renderTmeplate(item)}
          </li>
        }
        )}
        {
          loading ? renderSearchIcon() : null
        }
      </ul>
    );
  }
  const hilight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) index = suggestions.length - 1
    setHightLight(index)
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // alert(e.key)
    switch (e.key) {
      case "ArrowUp":
       hilight(hightLight - 1);
       break;
      case "ArrowDown":
        hilight(hightLight + 1);
        break;
      case "ArrowLeft":
        break;
      case "ArrowRight":
        break;
      case "Escape":
        setSuggestions([])
        break;
      case "Enter":
        handleClick(suggestions[hightLight])
        break;
      default: 
      break
    }
  }
  return (
    <div className="vanilla-auto-complete" ref={componentRef}>
      <Input value={inputValue} {...restProps} onChange={handleChange}
      onKeyDown={handleKeyDown}
      />
      {generateDropdown()}
    </div>
  );
}