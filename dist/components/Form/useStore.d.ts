/// <reference types="react" />
import { RuleItem, ValidateError } from "async-validator";
export type CustomRuleFunc = ({ getFieldValue }: any) => RuleItem;
export type CustomRule = CustomRuleFunc | RuleItem;
export interface FieldDetail {
    name: string;
    value: string;
    rules: CustomRule[];
    isVaild: boolean;
    errors: ValidateError[];
}
export interface fieldState {
    [key: string]: FieldDetail;
}
export interface FormState {
    isVaild: boolean;
    isSubmiting: boolean;
    errors: Record<string, ValidateError[]>;
}
export interface ValidateErrorType extends Error {
    errors: ValidateError[];
    fields: Record<string, ValidateError[]>;
}
export interface FieldAtion {
    type: "addField" | "updateValue" | "updateValidateResult";
    name: string;
    value: any;
}
export declare const useStore: (initialValues?: Record<string, any>) => {
    fields: fieldState;
    dispatch: import("react").Dispatch<FieldAtion>;
    form: FormState;
    validateField: (name: string) => Promise<void>;
    validateAllField: () => Promise<{
        isVaild: boolean;
        errors: Record<string, ValidateError[]>;
        values: {
            [x: string]: string;
        };
    }>;
    getFieldValue: (key: string) => string;
    getFieldsValue: () => {
        [x: string]: string;
    };
    setFieldValue: (name: string, value: any) => void;
    reset: () => void;
};
