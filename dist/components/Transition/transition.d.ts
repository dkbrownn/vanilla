import React from "react";
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
export type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName;
    children?: React.ReactNode;
    wrapper?: boolean;
};
export declare const Transition: ({ children, classNames, animation, appear, wrapper, unmountOnExit, ...restProps }: TransitionProps) => import("react/jsx-runtime").JSX.Element;
export {};
