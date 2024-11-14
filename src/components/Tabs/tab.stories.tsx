import React from "react";
import { Meta, StoryObj, StoryFn  } from "@storybook/react/*";
import { Tabs } from "./tab";
import { TabItem } from "./tabItem";
import { Icon } from "../Icon/icon";
const meta = {
  title: "Tabs组件",
  component: Tabs,
  // @ts-ignore
  subcomponents: { TabItem } 
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof Tabs>
const items = ["line", "card", "disabled"]
export const AllTypesTabs: StoryFn<typeof Tabs> = () => (
  <>
    <Tabs type="line" defaultIndex={0}>
      <TabItem label={"tab1"} children="this is tab1"></TabItem>
      <TabItem label={"tab2"} children="this is tab2"></TabItem>
      <TabItem label={"tab3"} children="this is tab3"></TabItem>
    </Tabs>

    <Tabs type="line" defaultIndex={0}>
      <TabItem label={"tab1"} children="this is tab1"></TabItem>
      <TabItem label={"disabled"} disabled></TabItem>
      <TabItem label={"tab3"} children="this is tab3"></TabItem>
    </Tabs> 

    <Tabs type="card" defaultIndex={0}>
      <TabItem label={"card1"} children="this is card1"></TabItem>
      <TabItem label={"card2"} children="this is card2"></TabItem>
      <TabItem label={"card3"} children="this is card3"></TabItem>
    </Tabs>

    <Tabs type="card" defaultIndex={0}>
      <TabItem label={
        <span><Icon icon={"coffee"}></Icon> coffee</span>
        } children="this is iconTab"></TabItem>
      <TabItem label={"card2"} children="this is card2"></TabItem>
      <TabItem label={"card3"} children="this is card3"></TabItem>
    </Tabs> 
  </>
)
AllTypesTabs.storyName = "全部样式的Tabs"
export const CardTabs: StoryObj<typeof Tabs> = {
  args: {
    type: "card",
    defaultIndex: 0
  },
  render: (args) => (
    <Tabs {...args}>
      <TabItem label={"card1"} children="this is card1"></TabItem>
      <TabItem label={"card2"} children="this is card2"></TabItem>
      <TabItem label={"card3"} children="this is card3"></TabItem>
    </Tabs> 
  )
}
CardTabs.storyName = "卡片样式的Tabs"

export const IconTabs: StoryObj<typeof Tabs> = {
  args: {
    type: "card",
    defaultIndex: 0
  },
  render: (args) => (
    <Tabs {...args}>
      <TabItem label={
        <span><Icon icon={"coffee"}></Icon> coffee</span>
        } children="this is iconTab"></TabItem>
      <TabItem label={"card2"} children="this is card2"></TabItem>
      <TabItem label={"card3"} children="this is card3"></TabItem>
    </Tabs> 
  )
}
IconTabs.storyName = "自定义图标的Tabs"