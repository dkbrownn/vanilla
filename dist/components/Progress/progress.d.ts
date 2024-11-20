import React, { CSSProperties } from "react";
import { ThemeProps } from "../Icon/icon";
export interface ProgressProps {
    /** 是否可以手动改变进度条 */
    touch?: boolean;
    /** 是否显示具体进度 */
    showText?: boolean;
    /** 百分比 */
    percent: number;
    /** */
    strokeHeight?: number;
    /** 可以扩展样式 */
    styles?: CSSProperties;
    /** 主题色 */
    theme?: ThemeProps;
    /** 处理鼠标控制进度 */
    mouseMove?: (e: React.MouseEvent) => void;
}
export declare const Progress: ({ touch, showText, percent, strokeHeight, styles, theme }: ProgressProps) => React.JSX.Element;
