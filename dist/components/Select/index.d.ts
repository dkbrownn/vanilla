import { FC } from "react";
import { SelectProps } from "./select";
import { OptionProps } from "./option";
export type ISelectComponent = FC<SelectProps> & {
    Optiton: FC<OptionProps>;
};
declare const TransSelect: ISelectComponent;
export default TransSelect;
