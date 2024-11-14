import React from "react";
export interface TabItemProps {
  /** 选项卡内容 */
  label: string | React.ReactElement;
  /** Tab选项是否被禁用 */
  disabled?: boolean;
  children?: React.ReactNode;
  // TODO 了解什么是ReactNode,ReactElement ......
}
export const TabItem: React.FC<TabItemProps> = ({
  label,
  disabled,
  children
}: TabItemProps) => {
  return <div className="tab-panel">
    {children}
  </div>
}