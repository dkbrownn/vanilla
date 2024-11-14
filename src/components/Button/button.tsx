import React from "react";
import classNames from "classnames";

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

export interface BaseButtonProps {
  /**
   * 类名
   */
  className?: string;
  /**是否禁用 */
  disabled?: boolean;
  /** How large should the button be? */
  size?: ButtonSize;
  /**
   * 按钮类型，共有四种分别为 'primary' | 'default' | 'danger' | 'link'
   **/
  btnType?: ButtonType;
  /** 子节点元素 */
  children: React.ReactNode;
  /** 当按钮类型为link时，跳转的链接 */
  href?: string;
}
// 普通按钮的原生属性和自定义属性
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
// 链接按钮
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

// 组件属性 (Partial: 将所有属性设置为可选)
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export const Button = ({
  btnType = "default",
  disabled = false,
  size,
  children,
  href,
  className,
  ...restProps
}: ButtonProps) => {
  const classes = classNames("btn", className,  {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};
