export type AlertType = 'success' | 'default' | 'danger' | 'warning';
export interface AlertProps {
    /** 自定义标题 */
    className?: string;
    /**
     * 是否可以手动关闭
     * */
    close?: boolean;
    /**
     * 类型 四种可选 针对四种不同的场景
     * */
    alType?: AlertType;
    /** alert标题 */
    title?: string;
    /** 内容描述 */
    desc?: string;
    /** 关闭alert时触发的事件 */
    onClose?: () => void;
}
/**
 *  用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ##引用方法
 * ~~~js
 * import { Alert } from "vanilla-react-dkbrownn"
 * ~~~
 */
export declare const Alert: ({ className, close, alType, title, desc, onClose, }: AlertProps) => import("react/jsx-runtime").JSX.Element;
