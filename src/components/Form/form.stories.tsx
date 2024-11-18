import { Meta, StoryFn } from "@storybook/react/*";
import { CustomRule } from "./useStore";
import { Form } from "./form";
import { FormItem } from "./formItem";
import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { useRef } from "react";
import { IFormRef } from "./form";
import { Select } from "../Select/select";
import { Option } from "../Select/option";
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
  return (
  <Form initialValues={{user: "vanilla", agreement: false}}>
    <FormItem label="email" name="email" rules={[{type: "email", required: true}]}>
      <Input/>
    </FormItem>
    <FormItem label="password" name="password" rules={[{type: "string", required: true, min: 3, max: 8}]}>
      <Input type="password"/>
    </FormItem>
    <FormItem label="confirm" name="confirmPassword" rules={confirmRules}>
      <Input type="password"/>
    </FormItem>
    <div className="vanilla-form-submit-area">
      <Button type="submit" btnType="primary">登陆</Button>
    </div>
  </Form>
)}
DefaultType.storyName = "默认的样式的Form"
export const SelectType: StoryFn<typeof Form> = () => {
  return (
  <Form initialValues={{user: "vanilla", agreement: false}}>
    <FormItem label="username" name="username" rules={[{type: "string", required: true}]}>
      <Input/>
    </FormItem>
    <FormItem label="password" name="password" rules={[{type: "string", required: true, min: 3, max: 8}]}>
      <Input type="password"/>
    </FormItem>
    <FormItem label="confirm" name="confirmPassword" rules={confirmRules}>
      <Input type="password"/>
    </FormItem>
     <FormItem label="性别" name="gender"  rules={[{type: 'string',required: true }]}
        getValueFromEvent={(e) => e }
        valuePropName='defaultValue'>
      <Select placeholder="请选择性别">
      <Option value="男" />
      <Option  value="女" />
     </Select>
     </FormItem>
    <div className="vanilla-form-submit-area">
      <Button type="submit" btnType="primary">登陆</Button>
    </div>
  </Form>
)}

SelectType.storyName = "支持多种item的Form"
export const FuncType: StoryFn<typeof Form> = () => {
  const ref = useRef<IFormRef>(null)
  const resetAll = () => {
    console.log(ref.current?.getFieldValue("user"))
    console.log(ref.current?.reset())
  }
  return (
  <Form initialValues={{user: "vanilla", agreement: false}} ref={ref}>
    {
      ({ isVaild, isSubmiting}) => (
        <>
          <FormItem label="user" name="user" rules={[{type: "email", required: true}]}>
            <Input/>
          </FormItem>
          <FormItem label="password" name="password" rules={[{type: "string", required: true, min: 3, max: 8}]}>
            <Input type="password"/>
          </FormItem>
          <FormItem label="confirm" name="confirmPassword" rules={confirmRules}>
            <Input type="password"/>
          </FormItem>
          <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center'}}>
            <FormItem name="agreement" valuePropName="checked" getValueFromEvent={(e) => e.target.checked} rules={[{ type: 'enum', enum: [true], message: '请同意协议'}]}>
              <input type="checkbox" />
            </FormItem>
            <span className="agree-text">注册即代表同意<a href="#">用户协议</a></span>
          </div>
          <div className="vanilla-form-submit-area">
            <Button type="submit" btnType="primary">登陆
              {isSubmiting ? '验证中' : '验证完毕'} {isVaild ? '通过😄' : '没通过😢'}
            </Button>
            <Button type="button" btnType="primary" onClick={resetAll}>重置</Button>
          </div>
        </>
      )
    }
  </Form>
)}
FuncType.storyName = "支持调用表单实例的Form"