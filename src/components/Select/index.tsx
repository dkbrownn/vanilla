import { FC } from "react";
import { Select, SelectProps } from "./select";
import { Option, OptionProps } from "./option";

export type ISelectComponent = FC<SelectProps> & {
  Optiton: FC<OptionProps>
}

const TransSelect = Select as ISelectComponent
TransSelect.Optiton = Option
export default TransSelect