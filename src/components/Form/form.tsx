import React, { ReactNode, createContext, forwardRef, useImperativeHandle } from "react";
import { useStore } from "./useStore";
import { ValidateError } from "async-validator";
import { FormState } from "./useStore";
export type RenderProps = (form: FormState) => React.ReactNode;
export interface FormProps {
  /**  */
  name?: string;
  initialValues?: Record<string, any>;
  children?: ReactNode | RenderProps;
  onFinsh?: (values: Record<string, any>) => void;
  onFinshFailed?: (values: Record<string, any>, errors: ValidateError) => void;
}
export type IFormContext = Pick<
  ReturnType<typeof useStore>,
  "dispatch" | "fields" | "validateField"
> &
  Pick<FormProps, "initialValues">;

export type IFormRef = Omit<ReturnType<typeof useStore>, "fields" |"dispatch" | "form">
export const formContext = createContext<IFormContext>({} as IFormContext);
export const Form = forwardRef<IFormRef, FormProps>(
  (
    {
      name = "vanilla-form",
      children,
      initialValues,
      onFinsh,
      onFinshFailed,
    }: FormProps,
    ref
  ) => {
    const {
      form,
      dispatch,
      fields,
      ...restProps
    } = useStore(initialValues);
    const { validateField, validateAllField } = restProps;
    useImperativeHandle(ref, () =>{
      return {
        ...restProps
      }
    })
    const passContext = {
      dispatch,
      fields,
      initialValues,
      validateField,
    };

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const { isVaild, errors, values } = await validateAllField();
      if (isVaild && onFinsh) {
        onFinsh(values);
      } else if (!isVaild && onFinshFailed) {
        onFinshFailed(values, errors);
      }
    };
    let childrenNode: ReactNode;
    if (typeof children === "function") {
      childrenNode = children(form as any);
    } else {
      childrenNode = children;
    }
    return (
      <>
        <form
          name={name}
          className="vanilla-form"
          onSubmit={submitForm}
        >
          <formContext.Provider value={passContext}>
            {childrenNode}
          </formContext.Provider>
        </form>
        <div>
          <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(fields)}</pre>
          <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(form)}</pre>
        </div>
      </>
    );
  }
);