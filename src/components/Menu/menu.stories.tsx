import React from "react";
import { Meta, StoryObj} from "@storybook/react"
import { Menu } from "./menu";
import { MenuItem } from "./menuItem";
import { SubMenu } from "./subMenu";

const meta = {
  title: "Menu组件",
  component: Menu,
  // @ts-ignore
  subcomponents: { MenuItem, SubMenu }
} satisfies Meta<typeof Menu>

export default meta
export const HorizontalMenu: StoryObj<typeof Menu> =  {
  args: {
    mode:"horizontal",
    defaultIndex: "0"
  },
  render: (args) => 
  (
      <Menu {...args}>
      <MenuItem>menu1</MenuItem>
      <MenuItem disabled>menu2</MenuItem>
      <MenuItem>menu3</MenuItem>
      <SubMenu title="dropDown">
        <MenuItem>dropDown1</MenuItem>
        <MenuItem>dropDown2</MenuItem>
        <MenuItem>dropDown3</MenuItem>
      </SubMenu>
    </Menu>
  )
}
HorizontalMenu.storyName = "默认的Menu"
export const VertialMenu: StoryObj<typeof Menu> = {
  args: {
    mode: "vertical",
    defaultIndex: "0",
    defaultOpenSubMenus: ["3"]
  },
  render: (args) => (
    <Menu{...args}>
      <MenuItem>menu1</MenuItem>
      <MenuItem>menu2</MenuItem>
      <MenuItem>menu3</MenuItem>
      <SubMenu title="dropDown">
        <MenuItem>dropDown1</MenuItem>
        <MenuItem>dropDown2</MenuItem>
        <MenuItem>dropDown3</MenuItem>
      </SubMenu>
    </Menu>
  )
}
VertialMenu.storyName = "默认展开的纵向Menu"