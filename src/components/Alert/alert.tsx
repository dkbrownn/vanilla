import React, { useState } from "react";
import classNames from "classnames";
export type AlertType = 'sucess' | 'default' | 'danger' | 'warning';
interface AlertProps {
  className?: string;
  close?: boolean;
  alType?: AlertType;
  title?: string;
  desc?: string
}
// TODO 完善alert位置
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
  const [hide, setHide] = useState<Boolean>(false)
  const handleClose = () => {
    setHide(true)
  }
  return ( hide ? null :
    <div className={classes}>
    {
     <p className="alt-title">{title} </p> 
    }
    {
      desc ? <p className="alt-desc">
        {desc}
      </p> : null
    }
    {
      close ? <span className="alt-close"
      onClick={handleClose}
      >
        x
      </span> : null
    }
  </div>
);
}