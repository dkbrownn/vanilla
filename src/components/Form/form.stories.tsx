import { Meta, StoryFn } from "@storybook/react/*";

import { Form } from "./form";
import { FormItem } from "./formItem";
import { Input } from "../Input/input";
import { Button } from "../Button/button";

const meta = {
  title: "Form组件",
  component: Form,
  // @ts-ignore
  subcomponents: { FormItem},
  decorators: [
    (Story) => {
      return <div style={{width: "550px"}}>
        <Story/>
      </div>
    }
  ]
} satisfies Meta<typeof Form>

export default meta

export const DefaultType: StoryFn<typeof Form> = () => (
  <Form initialValues={{user: "vanilla", checkbox: true}}>
    <FormItem label="user" name="user">
      <Input/>
    </FormItem>
    <FormItem label="password" name="password">
      <Input/>
    </FormItem>
    <FormItem name="no-label">
      <Input placeholder="no-label"/>
    </FormItem>
    {/* <div className="agreement-section" style={{
      display: "flex", justifyContent: "center",
    }}>
      <FormItem name="checkbox">
        <input type="checkbox" />
      </FormItem>
      <span className="agree-text">注册即代表同意<a href="#">用户协议</a></span>
    </div> */}
     <FormItem name="checkbox" valuePropName="checked" getValueFromEvent={(e) => e.target.checked}>
        <input type="checkbox" />
      </FormItem>
    <div className="vanilla-form-submit-area">
      <Button type="button" btnType="primary">登陆</Button>
    </div>
  </Form>
)