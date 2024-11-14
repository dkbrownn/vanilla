import React, { ChangeEvent, ReactElement } from "react";
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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
/**
 * 
 */
export const Input = ({
  size,
  icon,
  prepend,
  append,
  disabled = false,
  onChange,
  style,
  ...restProps
}:InputProps) => {
  const classes = classNames("vanilla-input-wrapper", {
    "is-disabled": disabled,
    [`input-size-${size}`]: size,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });

  return (
    <div className={classes} style={style}>
      {prepend && <div className="vanilla-input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`}></Icon>
        </div>
      )}
      <input className="vanilla-input-inner" {...restProps} disabled={disabled}/>
      {append && <div className="vanilla-input-group-append">{append}</div>}
    </div>
  );
}