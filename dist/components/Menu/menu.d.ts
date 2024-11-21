import React from "react";
type MenuMode = 'horizontal' | 'vertical';
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
/**
 * 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * ### 引用方法
 *
 * ~~~js
 * import { Menu } from 'vanilla-react-dkbrownn'
 * ~~~
 */
export declare const MenuContext: React.Context<IMenuContext>;
export declare const Menu: ({ defaultIndex, className, mode, style, children, onSelect, defaultOpenSubMenus }: MenuProps) => import("react/jsx-runtime").JSX.Element;
export {};
