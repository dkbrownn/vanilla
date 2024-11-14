import React, { FunctionComponentElement, useState } from "react";
import classNames from "classnames";
import { TabItemProps } from "./tabItem";
export type SelectCallback = (selectIndex: number) => void
type tabsTypes = 'line' | 'card'
export interface TabsProps {
  /** 当前激活 tab 面板的 index，默认为0 */
  defaultIndex?: number;
  /** 可以扩展的 className */
  className?: string;
  /** abs的样式，两种可选，默认为 line */
  type?: tabsTypes;
  /** 点击 Tab 触发的回调函数 */
  onSelect?: SelectCallback;
  children?: React.ReactNode;
}
// 使用react提供的Children.map() api实现对子节点的抽丝剥茧，将想要展示的部分抽离出来

/**
 * 选项卡切换组件。
 * 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ### 引用方法
 * 
 * ~~~js
 * import { Tabs } from 'vanilla-react'
 * ~~~
 */
export const Tabs: React.FC<TabsProps> = ({
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