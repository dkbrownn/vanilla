import React from "react";
export interface SubMenuProps {
    index?: string;
    /** 下拉菜单选项的内容 */
    title: string;
    /** 下拉菜单选型的扩展类名 */
    className?: string;
    children?: React.ReactNode;
}
export declare const SubMenu: {
    ({ index, title, className, children }: SubMenuProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
