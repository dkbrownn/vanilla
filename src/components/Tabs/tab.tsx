import React, { FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { TabItemProps } from "./tabItem";
export type SelectCallback = (selectIndex: number) => void
type tabsTypes = 'line' | 'card'
export interface TabsProps {
  defaultIndex?: number;// 默认显示选项卡
  className?: string;
  type?: tabsTypes;
  onSelect?: SelectCallback;
  children?: React.ReactNode;
}
// 使用react提供的Children.map() api实现对子节点的抽丝剥茧，将想要展示的部分抽离出来
export const Tabs = ({
  defaultIndex = 0,
  className,
  type = 'line',
  children,
  onSelect
}:TabsProps) => {
  const [activeIndex, setIndex] = useState(defaultIndex)
  const navClasses = classNames('tabs-nav', {
    [`tabs-nav-${type}`]: type
  })

  const handleClick = (e: React.MouseEvent, index: number, disabled: boolean | undefined ) => {
    e.preventDefault()
    if (!disabled) {
      setIndex(index)
      if (onSelect) {
        onSelect(index)
      }
    }
  }
  const renderNavLinks = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as FunctionComponentElement<TabItemProps>
      const { label, disabled } = childElement.props
      const navLinkClass = classNames("tabs-nav-item", {
        'disabled': disabled,
        'is-active': activeIndex === index
      })
      return <li
      className={navLinkClass}
      key={`nav-item-${index}`}
      onClick={(e) => handleClick(e, index, disabled )}
      >
        {label}
      </li>
    })
  }
  const renderContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index === activeIndex) {
        return child
      }
    })
  }
  return (
    <div className={`tabs ${className}`}>
      <ul className={navClasses}>{renderNavLinks()}</ul>
      <div className="tabs-content">{renderContent()}</div>
    </div>
  );
}