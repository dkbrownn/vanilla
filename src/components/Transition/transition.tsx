import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'
export type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  children?: React.ReactNode;
  wrapper?: boolean;
}
export const Transition = ({
  children,
  classNames,
  animation,
  appear = true,
  wrapper,
  unmountOnExit = true,
  ...restProps
}: TransitionProps) => {

  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      appear
      unmountOnExit
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
}