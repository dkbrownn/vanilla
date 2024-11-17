import React, { ReactNode, createContext } from "react";
import { useStore } from "./useStore";
export interface FormProps {
  /**  */
  name?: string;
  initialValues?: Record<string, any> ;
  children?: ReactNode;
}
export type IFormContext = Pick<
  ReturnType<typeof useStore>,
  "dispatch" | "fields"
> &
  Pick<FormProps, "initialValues">;


export const formContext = createContext<IFormContext>({} as IFormContext);
export const Form = ({ name = "vanilla-form", children, initialValues }: FormProps) => {
  const { form, dispatch, fields } = useStore();
  const passContext = {
    dispatch,
    fields,
    initialValues,
  };
  return (
    <>
      <form name={name} className="vanilla-form">
        <formContext.Provider value={passContext}>
          {children}
        </formContext.Provider>
      </form>
      <div>
        <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(fields)}</pre>
        <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(form)}</pre>
      </div>
    </>
  );
};