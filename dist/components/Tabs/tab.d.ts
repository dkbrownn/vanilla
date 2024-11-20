import React from "react";
export type SelectCallback = (selectIndex: number) => void;
type tabsTypes = 'line' | 'card';
export interface TabsProps {
    /** 当前激活 tab 面板的 index，默认为0 */
    defaultIndex?: number;
    /** 可以扩展的 className */
    className?: string;
    /** abs的样式，两种可选，默认为 line */
    type?: tabsTypes;
    /** 点击 Tab 触发的回调函数 */
    onSelect?: SelectCallback;
    children?: React.ReactNode;
}
/**
 * 选项卡切换组件。
 * 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ### 引用方法
 *
 * ~~~js
 * import { Tabs } from 'vanilla-react'
 * ~~~
 */
export declare const Tabs: React.FC<TabsProps>;
export {};
