import { StoryObj, Meta, StoryFn } from "@storybook/react/*";
import { Icon } from "./icon";
const meta = {
  title: "Icon组件",
  component: Icon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof Icon>;
export const ThemeIcon: StoryFn = () => (
  <>
    <Icon icon={"coffee"} theme="danger" />
    <Icon icon={"coffee"} theme="dark" />
    <Icon icon={"coffee"} theme="info" />
    <Icon icon={"coffee"} theme="light" />
    <Icon icon={"coffee"} theme="primary" />
    <Icon icon={"coffee"} theme="secondary" />
    <Icon icon={"coffee"} theme="success" />
    <Icon icon={"coffee"} theme="warning" />
  </>
);
ThemeIcon.storyName = "不同主题的Icon"
export const TypesIcon: StoryFn<typeof Icon> = () => (
  <>
    <Icon icon="check" theme="primary"></Icon>
    <Icon icon="times" theme="info"></Icon>
    <Icon icon="anchor" theme="secondary"></Icon>
    <Icon icon="spinner" theme="success"></Icon>
    <Icon icon="exclamation-circle" theme="dark"></Icon>
  </>
)
TypesIcon.storyName = "不同样式的Icon"
export const SizeIcon: StoryFn<typeof Icon> = () => (
  <>
    <Icon icon="check" theme="primary" size="10x"></Icon>
    <Icon icon="check" theme="primary" size="7x"></Icon>
    <Icon icon="check" theme="primary" size="5x"></Icon>
    <Icon icon="check" theme="primary" size="3x"></Icon>
    <Icon icon="check" theme="primary" size="2xl"></Icon>
    <Icon icon="check" theme="primary" size="1x"></Icon>
  </>
)
SizeIcon.storyName = "不同大小的Icon"
