import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./menu";
export interface MenuItemProps {
  index: number; //索引值
  disabled?: boolean;
  className?: string;
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
    if (context.onSelect && !disabled) context.onSelect(index)
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
}