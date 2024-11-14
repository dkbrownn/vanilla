import { StoryObj, Meta, StoryFn } from "@storybook/react/*";
import { Button, ButtonProps } from "./button";
import { action } from '@storybook/addon-actions'
const meta = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<ButtonProps>;
export default meta
type Story = StoryObj<ButtonProps>;

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
export const Default: Story = {
  args: {
    btnType: "default",
    children: "Default Button",
    size: "lg",
    className: "default",
  },
  render: (args) => (
    <Button { ...args } onClick={action('clicked')}></Button>
  )
};
export const Primary: Story = {
  args: {
    btnType: "primary",
    children: "Primary Button",
  },
};
export const Danger: Story = {
  args: {
    btnType: "danger",
    children: "Danger Button",
  },
};
export const Link: Story = {
  args: {
    btnType: "link",
    children: "Link Button",
    disabled: true,
  },
};