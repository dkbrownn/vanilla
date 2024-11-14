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
    <Button btnType="default" size="lg">111</Button>
    <Button btnType="danger" disabled>111</Button>
    <Button btnType="primary">111</Button>
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