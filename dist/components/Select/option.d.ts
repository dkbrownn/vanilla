import React from "react";
export interface OptionProps {
    index?: string;
    /** 默认根据此属性值进行筛选，该值不能相同*/
    value: string;
    /** 选项的标签，若不设置则默认与 value 相同*/
    label?: string;
    /** 是否禁用该选项*/
    disabled?: boolean;
    children?: React.ReactNode;
}
export declare const Option: {
    ({ index, value, label, disabled, children }: OptionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
