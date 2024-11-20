import React, { ChangeEvent, ReactElement } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    /** 输入框的尺寸 */
    size?: "lg" | "medium" | "sm";
    /** 输入框支持的icon */
    icon?: IconProp;
    /** 是否禁用输入框 */
    disabled?: boolean;
    /** 输入框前缀 */
    prepend?: string | ReactElement;
    /** 输入框后缀 */
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
/**
 *
 */
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
