import React, { ReactNode } from "react";
import { useStore } from "./useStore";
import { ValidateError } from "async-validator";
import { FormState } from "./useStore";
export type RenderProps = (form: FormState) => React.ReactNode;
export interface FormProps {
    /** 表单名称，会作为表单字段 id 前缀使用 */
    name?: string;
    /** 表单默认值，只有初始化以及重置时生效 */
    initialValues?: Record<string, any>;
    children?: ReactNode | RenderProps;
    /** 提交表单且数据验证成功后回调事件 */
    onFinish?: (values: Record<string, any>) => void;
    /** 提交表单且数据验证失败后回调事件 */
    onFinishFailed?: (values: Record<string, any>, errors: ValidateError) => void;
}
export type IFormContext = Pick<ReturnType<typeof useStore>, "dispatch" | "fields" | "validateField"> & Pick<FormProps, "initialValues">;
export type IFormRef = Omit<ReturnType<typeof useStore>, "fields" | "dispatch" | "form">;
export declare const formContext: React.Context<IFormContext>;
export declare const Form: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<IFormRef>>;
