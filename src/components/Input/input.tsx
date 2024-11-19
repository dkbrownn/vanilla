import React, { ChangeEvent, forwardRef, ReactElement } from "react";
import classNames from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core"; 
import { Icon } from "../Icon/icon";
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** 输入框的尺寸 */
  size?: "lg" | "medium" | "sm";
  /** 输入框支持的icon */
  icon?: IconProp;
  /** 是否禁用输入框 */
  disabled?: boolean;
  /** 输入框前缀 */
  prepend?: string | ReactElement;
  /** 输入框后缀 */
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * 
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size,
      icon,
      prepend,
      append,
      disabled = false,
      style,
      ...restProps
    }: InputProps,
    ref
  ) => {
    const classes = classNames("vanilla-input-wrapper", {
      "is-disabled": disabled,
      [`input-size-${size}`]: size,
      "input-group": prepend || append,
      "input-group-append": !!append,
      "input-group-prepend": !!prepend,
    });
    const fixControlledValue = (value: any) => {
      if (typeof value === "undefined" || value === null) {
        return "";
      }
      return value;
    };
    if ("value" in restProps) {
      delete restProps.defaultValue;
      restProps.value = fixControlledValue(restProps.value);
    }
    return (
      <div className={classes} style={style} data-testid="test-wrapper">
        {prepend && (
          <div
            className="vanilla-input-group-prepend"
            data-testid="test-prepend"
          >
            {prepend}
          </div>
        )}
        {icon && (
          <div className="icon-wrapper" data-testid="test-icon">
            <Icon icon={icon} title={`title-${icon}`}></Icon>
          </div>
        )}
        <input
          ref={ref}
          className="vanilla-input-inner"
          {...restProps}
          disabled={disabled}
          data-testid="test-input"
        />
        {append && (
          <div className="vanilla-input-group-append" data-testid="test-append">
            {append}
          </div>
        )}
      </div>
    );
  }
);