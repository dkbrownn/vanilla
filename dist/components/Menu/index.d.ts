import { FC } from "react";
import { MenuProps } from "./menu";
import { MenuItemProps } from "./menuItem";
import { SubMenuProps } from "./subMenu";
export type IMenuCompoent = FC<MenuProps> & {
    Item: FC<MenuItemProps>;
    SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuCompoent;
export default TransMenu;
