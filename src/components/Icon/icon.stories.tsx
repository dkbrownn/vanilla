import { StoryObj, Meta, StoryFn } from "@storybook/react/*";
import { Icon } from "./icon";
const meta = {
  title: "Component/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof Icon>;
export const AllStyles: StoryFn = () => (
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