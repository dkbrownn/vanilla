import { StoryObj, Meta, StoryFn } from "@storybook/react/*";
import { Alert } from "./alert";
const meta = {
  title: "Alert组件",
  component: Alert,
} satisfies Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof Alert>;
export const AllStyles: StoryFn<typeof Alert> = () => (
  <>
    <Alert title="default" alType="default"></Alert>
    <Alert title="success" alType="success"></Alert>
    <Alert title="warning" alType="warning"
    desc="this is warning infomation"></Alert>
    <Alert title="danger" alType="danger"></Alert>
    <Alert title="default" alType="default" close={false}></Alert>
  </>
);
AllStyles.storyName = "全部样式的Alert"
export const CanClose: Story = {
  args: {
    alType: "success",
    close: true,
    title: "which alert can be closed"
  },
};
CanClose.storyName = "可以关闭的Alert"
export const NotClose: Story = {
  args: {
    alType: "success",
    close: false,
    title: "which alert can not be closed",
  },
};
NotClose.storyName = "不可以关闭的Alert"
