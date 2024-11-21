import React from "react";
interface DataSourceObject {
    value: string;
}
export type DataSourceProps<T = {}> = T & DataSourceObject;
export interface SelectProps {
    /** 指定默认选中的条目	 可以是是字符串或者字符串数组*/
    defaultValue?: string | string[];
    /** 选择框默认文字*/
    placeholder?: string;
    /** 是否禁用*/
    disabled?: boolean;
    /** 是否支持多选*/
    multiple?: boolean;
    /** select input 的 name 属性	 */
    name?: string;
    /** 是否展示当前值 */
    isShow?: boolean;
    /** 选中值发生变化时触发 */
    onChange?: (selectedValue: string, selectedValues: string[]) => void;
    /** 下拉框出现/隐藏时触发 */
    onVisibleChange?: (visible: boolean) => void;
    children?: React.ReactNode;
}
export interface ISelectContext {
    onSelect?: (value: string, isSelected?: boolean) => void;
    selectedValues: string[] | string;
    multiple?: boolean;
}
export declare const SelectContext: React.Context<ISelectContext>;
/**
 * 下拉选择器。
 * 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
 * ### 引用方法
 *
 * ~~~js
 * import { Select } from 'vanilla-react-dkbrownn'
 * // 然后可以使用 <Select> 和 <Select.Option>
 * ~~~
 */
export declare const Select: ({ defaultValue, placeholder, disabled, multiple, name, isShow, onChange, onVisibleChange, children }: SelectProps) => import("react/jsx-runtime").JSX.Element;
export {};
