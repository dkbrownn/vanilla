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
export declare const AutoComplete: ({ fetchSuggestios, onSelect, renderOptions, value, ...restProps }: AutoCompleteProps) => React.JSX.Element;
export {};
