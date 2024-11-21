import React from "react";
import { InputProps } from "../Input/input";
interface DataSourceObject {
    value: string;
}
export type DataSourceProps<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, "onSelect"> {
    /** 获取数据 */
    fetchSuggestios: (str: string) => DataSourceProps[] | Promise<DataSourceObject[]>;
    /** 用户自定义点击所选项 */
    onSelect?: (item: DataSourceProps) => void;
    /** 自定义渲染结果 */
    renderOptions?: (item: DataSourceProps) => React.ReactElement;
}
/**
 *  输入框自动完成功能。当输入值需要自动完成时使用，支持同步和异步两种方式 支持 Input 组件的所有属性 支持键盘事件选择
 * ##引用方法
 * ~~~js
 * import { AutoComplete  } from "vanilla-react-dkbrownn"
 * ~~~
 */
export declare const AutoComplete: ({ fetchSuggestios, onSelect, renderOptions, value, ...restProps }: AutoCompleteProps) => import("react/jsx-runtime").JSX.Element;
export {};
