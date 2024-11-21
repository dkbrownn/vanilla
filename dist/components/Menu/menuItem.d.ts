import React from "react";
export interface MenuItemProps {
    index?: string;
    /** 选项是否被禁用 */
    disabled?: boolean;
    /** 可扩展类名 */
    className?: string;
    /** 选项的自定义 style */
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export declare const MenuItem: {
    ({ index, disabled, className, style, children }: MenuItemProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
