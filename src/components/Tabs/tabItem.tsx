import React from "react";
import classNames from "classnames";
export interface TabItemProps {
  label: string | React.ReactElement; //选项卡内容;
  disabled?: boolean;
  children?: React.ReactNode;
  // TODO 了解什么是ReactNode,ReactElement ......
}
export const TabItem = ({
  label,
  disabled,
  children
}: TabItemProps) => {
  return <div className="tab-panel">
    {children}
  </div>
}