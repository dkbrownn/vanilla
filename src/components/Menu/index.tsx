import { FC } from "react";
import { Menu, MenuProps } from "./menu";
import { MenuItem, MenuItemProps } from "./menuItem";
import { SubMenu, SubMenuProps } from "./subMenu";

export type IMenuCompoent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
}

const TransMenu = Menu as IMenuCompoent
TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu