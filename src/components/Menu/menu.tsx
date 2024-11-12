import React, { createContext, useState } from "react";
import classNames from "classnames";
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number; //默认选择项
  className?: string;
  mode?: MenuMode; //menu方向
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onSelect?: SelectCallback;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContext>({index: 0})
export const Menu = ({
  defaultIndex,
  className,
  mode = 'horizontal',
  style,
  children,
  onSelect
}: MenuProps) => {
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("menu", className, {
    [`menu-${mode}`] : mode
  })

  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>{children}</MenuContext.Provider>
    </ul>
  );
}