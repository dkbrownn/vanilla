import { StoryObj, Meta, StoryFn } from "@storybook/react/*";
import { Button, ButtonProps } from "./button";
const meta = {
  title: "Button组件",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ButtonProps>;
export default meta

const Template: StoryFn<ButtonProps> = () => (
  <>
    <Button >Default Button</Button>
    <Button btnType="danger">Danger Button</Button>
    <Button btnType="primary">Primary Button</Button>
    <Button btnType="link" href="https://baidu.com" target="_blank">Link Baidu</Button>
    <Button size="lg">Large Button</Button>
    <Button size="sm">Small Button</Button>
  </>
);
export const AllStyles = Template.bind({})
AllStyles.storyName = "全部样式的Button"
export const TypeButton: StoryObj<typeof Button> = {
  args: {
    size: "lg",

  },
  render: () => (
    <>
      <Button btnType="default">Default Button</Button>
      <Button btnType="primary">Primary Button</Button>
      <Button btnType="danger">Danger Button</Button>
      <Button btnType="link" href="https://baidu.com">Link Baidu</Button>
      
    </>
  )
}
TypeButton.storyName = "不同类型的Button"

export const SizeButton: StoryObj<typeof Button> = {
  render: () => (
    <>
      <Button size="lg">Large Button</Button>
      <Button size="sm">Small Button</Button>
    </>
  )
}
SizeButton.storyName = "不同大小的Button"
export const DisabledButton: StoryObj<typeof Button> = {
  render: () => (
      <Button disabled>Disabled Button</Button>
  )
}
DisabledButton.storyName = "可禁用的Button"