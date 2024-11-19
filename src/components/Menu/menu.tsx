import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuItemProps } from './menuItem'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
  /** 默认选择菜单项 */
  defaultIndex?: string;
  /** 可扩展类名 */
  className?: string;
  /** 菜单类型 横向或者纵向 */
  mode?: MenuMode;
  /** 选项的自定义 style */
  style?: React.CSSProperties;
  children?: React.ReactNode;
  /** 点击菜单项触发的回掉函数 */
  onSelect?: SelectCallback;
  /** 设置子菜单的默认打开 只在纵向模式下生效 */
  defaultOpenSubMenus?: string[];
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
  const classes = classNames("vanilla-menu", className, {
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