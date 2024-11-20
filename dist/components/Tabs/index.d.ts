import { FC } from "react";
import { TabsProps } from "./tab";
import { TabItemProps } from "./tabItem";
export type ITabsComponent = FC<TabsProps> & {
    Item: FC<TabItemProps>;
};
declare const TransTabs: ITabsComponent;
export default TransTabs;
