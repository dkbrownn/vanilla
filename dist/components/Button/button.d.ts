import React from "react";
export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement>;
export type BaseButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export interface ButtonProps extends BaseButtonProps {
    /**
     * 可以扩展的类名
     */
    className?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** Button 的尺寸 */
    size?: ButtonSize;
    /**
     * 按钮类型，共有四种分别为 'primary' | 'default' | 'danger' | 'link'
     **/
    btnType?: ButtonType;
    children?: React.ReactNode;
    /** 当按钮类型为link时，跳转的链接 */
    href?: string;
}
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * ##引用方法
 * ~~~js
 * import { Button } from "vanilla-react-dkbrownn"
 * ~~~
 */
export declare const Button: ({ btnType, disabled, size, children, href, className, ...restProps }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
