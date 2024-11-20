import React, { ReactNode } from "react";
import { CustomRule } from "./useStore";
export interface FormItemProps {
    /** 字段名 */
    name: string;
    /** label 标签的文本 */
    label?: string;
    children?: ReactNode;
    /** 子节点的值的属性，如 checkbox 的是 'checked' */
    valuePropName?: string;
    /** 设置收集字段值变更的时机 */
    trigger?: string;
    /** 校验规则 */
    rules?: CustomRule[];
    /** 设置如何将 event 的值转换成字段值 */
    getValueFromEvent?: (event: any) => any;
    /** 设置字段校验的时机 */
    validateTrigger?: string;
}
export declare const FormItem: ({ name, label, children, rules, valuePropName, validateTrigger, trigger, getValueFromEvent }: FormItemProps) => React.JSX.Element;
