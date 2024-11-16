import React from "react";
import {Meta, StoryFn } from '@storybook/react';
import { Progress } from './progress';
const meta = {
  title: "Progress组件",
  component: Progress,
} satisfies Meta<typeof Progress>
export default meta


export const DefaultType: StoryFn<typeof Progress> = () => (
  <Progress percent={25} strokeHeight={15}/>
)
DefaultType.storyName = "默认进度条模式的Progress"

export const ManualType: StoryFn<typeof Progress> = () => (
  <Progress percent={5} strokeHeight={15} touch/>
)