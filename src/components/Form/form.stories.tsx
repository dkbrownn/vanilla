import { Meta, StoryFn } from "@storybook/react/*";
import { CustomRule } from "./useStore";
import { Form } from "./form";
import { FormItem } from "./formItem";
import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { useRef } from "react";
import { IFormRef } from "./form";
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
const confirmRules: CustomRule[] = [
  {type: "string", required: true, min: 3, max: 8},
  ({ getFieldValue}) => ({
    asyncValidator(rule,value) {
      console.log("the value", getFieldValue("password"))
      return new Promise((resolve, reject) => {
        if (value !== getFieldValue("password")) {
          console.log(value, getFieldValue("password"))
          reject("The two passwords that you entered do not match")
        }
          setTimeout(() => {
            resolve()
          },500)
      })
    }
  })
]
export const DefaultType: StoryFn<typeof Form> = () => {
  const ref = useRef<IFormRef>(null)

  const resetAll = () => {
    console.log(ref.current?.getFieldValue("user"))
    console.log(ref.current?.reset())
  }
  return (
  <Form initialValues={{user: "vanilla", agreement: false}} ref={ref}>
    <FormItem label="user" name="user" rules={[{type: "email", required: true}]}>
      <Input/>
    </FormItem>
    <FormItem label="password" name="password" rules={[{type: "string", required: true, min: 3, max: 8}]}>
      <Input type="password"/>
    </FormItem>
    <FormItem label="重复密码" name="confirmPassword" rules={confirmRules}>
      <Input type="password"/>
    </FormItem>
    {/* <FormItem name="no-label">
      <Input placeholder="no-label"/>
    </FormItem> */}
    {/* <div className="agreement-section" style={{
      display: "flex", justifyContent: "center",
    }}>
      <FormItem name="checkbox">
        <input type="checkbox" />
      </FormItem>
      <span className="agree-text">注册即代表同意<a href="#">用户协议</a></span>
    </div> */}
     <FormItem name="agreement" valuePropName="checked" getValueFromEvent={(e) => e.target.checked} rules={[{ type: 'enum', enum: [true], message: '请同意协议'}]}>
        <input type="checkbox" />
      </FormItem>
    <div className="vanilla-form-submit-area">
      <Button type="submit" btnType="primary">登陆</Button>
      <Button type="button" btnType="primary" onClick={resetAll}>重置</Button>
    </div>
  </Form>
)}

export const FuncType: StoryFn<typeof Form> = () => (
  <Form initialValues={{user: "vanilla", checkbox: true}}>
    {
      ({ isVaild, isSubmiting}) => (
        <>
          <FormItem label="user" name="user" rules={[{type: "email", required: true}]}>
            <Input/>
          </FormItem>
          <FormItem label="password" name="password" rules={[{type: "string", required: true, min: 3, max: 8}]}>
            <Input type="password"/>
          </FormItem>
          <FormItem label="重复密码" name="confirmPassword" rules={confirmRules}>
            <Input type="password"/>
          </FormItem>
          <div className="vanilla-form-submit-area">
            <Button type="submit" btnType="primary">登陆
              {
              isSubmiting ? <span>验证中</span> : isVaild ?<span>通过</span> : <span>失败</span>
              } 
            </Button>
          </div>
        </>
      )
    }
  </Form>
)