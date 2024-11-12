import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from './menuItem'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  defaultIndex?: string; //默认选择项
  className?: string;
  mode?: MenuMode; //menu方向
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];// 默认展开subMenu
}

interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
export const MenuContext = createContext<IMenuContext>({index: "0"})
export const Menu = ({
  defaultIndex,
  className,
  mode = "horizontal",
  style,
  children,
  onSelect,
  defaultOpenSubMenus = []
}: MenuProps) => {
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames("menu", className, {
    [`menu-${mode}`]: mode,
  });

  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, { index: String(index) }); // 返回一个新的react元素，新元素具有不同的 props 和 children，cloneElement(element, props, ...children)
      } else {
        console.error(
          "Warning: Menu has a child which is not a MenuItem Component"
        );
      }
    });
  };
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};