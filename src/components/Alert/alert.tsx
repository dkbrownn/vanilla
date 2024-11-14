import React, { useState } from "react";
import classNames from "classnames";
import { Transition } from "../Transition/transition";
export type AlertType = 'success' | 'default' | 'danger' | 'warning';
interface AlertProps {
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
}
// TODO 完善alert位置
/**
 *  用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ##引用方法
 * ~~~js
 * import { Alert } from "vanilla-react"
 * ~~~
 */
export const Alert = ({
  className,
  close = true,
  alType = 'default',
  title = 'title',
  desc
}: AlertProps) => {
  const classes = classNames("alt", className, {
    [`alt-${alType}`]: alType,
  });
  const [hide, setHide] = useState<boolean | undefined>(false)
  const handleClose = () => {
    setHide(true)
  }
  return (
    <Transition in={!hide} unmountOnExit timeout={300} animation="zoom-in-top">
      <div className={classes}>
        {<p className="alt-title">{title} </p>}
        {desc ? <p className="alt-desc">{desc}</p> : null}
        {close ? (
          <span className="alt-close" onClick={handleClose}>
            x
          </span>
        ) : null}
      </div>
    </Transition>
  );
}