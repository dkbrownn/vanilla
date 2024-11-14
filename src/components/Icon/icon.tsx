import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps,  } from "@fortawesome/react-fontawesome";
import { SizeProp, IconProp } from "@fortawesome/fontawesome-svg-core";
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface IconProps extends FontAwesomeIconProps {
  /**
   * 图标主题色
   */
  theme?: ThemeProps;
  /**
   * 图标尺寸
   */
  size?: SizeProp;
  /**
   * 图标类型
   */
  icon: IconProp;
}
/**
 * 
 * 提供了一套常用的图标集合 基y于react-fontawesome。

 * 支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic

 * 支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free
 * 
 * ##引用方法
 * ~~~js
 * import { Icon } from "vanilla-react"
 * ~~~
 */
export const Icon = ({
  theme,
  className,
  ...restProps
}: IconProps) => {
  const classes = classNames('icon', className, {
    [`icon-${theme}`]: theme
  })
  return <FontAwesomeIcon className={classes} {...restProps}/>
  
}