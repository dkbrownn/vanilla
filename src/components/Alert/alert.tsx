import React, { useState } from "react";
import classNames from "classnames";
import { Transition } from "../Transition/transition";
import { Icon } from "../Icon/icon";
export type AlertType = 'success' | 'default' | 'danger' | 'warning';
export interface AlertProps {
  /** 自定义标题 */
  className?: string;
  /**
   * 是否可以手动关闭
   * */
  close?: boolean;
  /**
   * 类型 四种可选 针对四种不同的场景
   * */
  alType?: AlertType;
  /** alert标题 */
  title?: string;
  /** 内容描述 */
  desc?: string;
  /** 关闭alert时触发的事件 */
  onClose?: () => void;
}
// TODO 完善alert位置
/**
 *  用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ##引用方法
 * ~~~js
 * import { Alert } from "vanilla-react-dkbrownn"
 * ~~~
 */
export const Alert = ({
  className,
  close = true,
  alType = "default",
  title = "title",
  desc,
  onClose,
}: AlertProps) => {
  const classes = classNames("vanilla-alert", className, {
    [`vanilla-alert-${alType}`]: alType,
  });
  const [hide, setHide] = useState<boolean | undefined>(false);
  const handleClose = () => {
    if (onClose) {
      onClose()
    }
    setHide(true);
  };
  return (
    <Transition in={!hide} unmountOnExit timeout={300} animation="zoom-in-top">
      <div className={classes}>
        {<p className="vanilla-alert-title">{title} </p>}
        {desc ? <p className="vanilla-alert-desc">{desc}</p> : null}
        {close ? (
          <Icon
            className="vanilla-alert-close"
            onClick={handleClose}
            icon={"times"}
          />
        ) : null}
      </div>
    </Transition>
  );
};