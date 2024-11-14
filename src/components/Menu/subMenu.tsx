import React, { useContext, useState } from "react";
import classNames from "classnames";
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';
import { Icon } from "../Icon/icon";
import { Transition } from "../Transition/transition";

interface SubMenuProps {
  index?: string;
  /** 下拉菜单选项的内容 */
  title: string;
  /** 下拉菜单选型的扩展类名 */
  className?: string;
  children?: React.ReactNode;
}
export const SubMenu = ({
  index,
  title,
  className,
  children
}: SubMenuProps) => {
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus
  const isOpend = (index && context.mode === "vertical") ? openedSubMenus?.includes(index) : false
  const [menuOpen, setOpen] = useState(isOpend);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    },300)
  }
  //横向事件
  const hoverEvents =
    context.mode === "horizontal" ? {
     onMouseEnter:  (e: React.MouseEvent) => { handleMouse(e, true)},
     onMouseLeave:  (e: React.MouseEvent) => { handleMouse(e, false)}
    } : {};
  //纵向事件
  const clickEvents = context.mode === "vertical" ? { onClick: handleClick} : {}
  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpen
    })
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {index: `${index}-${i}`});
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem Component"
        );
      }
    })
    return (
      <Transition
        in={menuOpen}
        timeout={300}
        classNames="zoom-in-top"
        appear
        unmountOnExit
      >
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon"/>
      </div>
      {renderChildren()}
    </li>
  );
}
SubMenu.displayName = 'SubMenu'