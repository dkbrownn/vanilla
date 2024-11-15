import React from "react";
import {Meta, StoryFn } from '@storybook/react';
import { Input } from './input';
const meta = {
  title: "Input组件",
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: '350px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>
export default meta
type Fn = StoryFn<typeof Input>
export const AllTypesInput: Fn = () => (
  <>
    <Input placeholder="this is a default input"/>
    <Input icon={"search"} placeholder="this is a icon input"/>
    <Input prepend={"https://"} placeholder="Baidu.com"/>
    <Input append={".com"} placeholder="Baidu"/>
    <Input disabled/>
    <Input size="lg" placeholder="this is a large input"/>
    <Input size="medium" placeholder="this is a medium input"/>
    <Input size="sm" placeholder="this is a small input"/>
  </>
)
AllTypesInput.storyName = "全部样式的Input"
export const IconInput: Fn = () => (
  <>
    <Input icon="coffee" />
    <Input icon="search"/>
    <Input icon="anchor" />
  </>
)
IconInput.storyName = "含有Icon的Input"

export const AffixTheNameInput: Fn = () => (
  <>
    <Input prepend={"https://"}/>
    <Input append={".com"}/>
    <Input prepend={"https://"} append={".com"} />
  </>
)
AffixTheNameInput.storyName = "带有前后缀的Input"
export const SizeInput: Fn = () => (
  <>
    <Input size="lg" />
    <Input size="medium" />
    <Input size="sm" />
  </>
)
SizeInput.storyName = "不同尺寸的Input"
export const DisabledInput: Fn = () => (
  <>
    <Input disabled/>
  </>
)
DisabledInput.storyName = "禁用的Input"

