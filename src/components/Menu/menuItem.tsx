import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
export interface MenuItemProps {
  index?: string; //索引值
  /** 选项是否被禁用 */
  disabled?: boolean;
  /** 可扩展类名 */
  className?: string;
  /** 选项的自定义 style */
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const MenuItem = ({
  index,
  disabled,
  className,
  style,
  children
}: MenuItemProps) => {
  const context = useContext(MenuContext)
  const classes = classNames("menu-item", className, {
    'is-disabled': disabled,
    'is-active': index === context.index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) context.onSelect(index)
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
}
MenuItem.displayName = 'MenuItem'