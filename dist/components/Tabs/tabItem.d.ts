import React from "react";
export interface TabItemProps {
    /** 选项卡内容 */
    label: string | React.ReactElement;
    /** Tab选项是否被禁用 */
    disabled?: boolean;
    children?: React.ReactNode;
}
export declare const TabItem: React.FC<TabItemProps>;
