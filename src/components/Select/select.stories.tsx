import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Select } from "./select";
import { Option } from "./option";
const meta = {
  title: "Select组件",
  component: Select,
  // @ts-ignore
  subcomponents: { Option }
} satisfies Meta<typeof Select>
export default meta
export const DefaultType: StoryFn<typeof Select> = () => (
  <Select placeholder="请选择一项">
    <Option value="选项1"></Option>
    <Option value="选项2"></Option>
    <Option value="选项3"></Option>
  </Select>
)
DefaultType.storyName = "默认单选的Select"
export const MultipleType: StoryFn<typeof Select> = () => (
  <Select placeholder="请选择" multiple>
    <Option value="选项1"></Option>
    <Option value="选项2"></Option>
    <Option value="选项3"></Option>
  </Select>
)
MultipleType.storyName = "多选的Select"
export const DisabledType: StoryFn<typeof Select> = () => (
  <Select placeholder="该文本框已被禁用" multiple disabled>
    <Option value="选项1"></Option>
    <Option value="选项2"></Option>
    <Option value="选项2"></Option>
  </Select>
)
DisabledType.storyName = "禁用的Select"
