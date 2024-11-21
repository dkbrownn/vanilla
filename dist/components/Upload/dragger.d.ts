import React from "react";
export interface DraggerProps extends React.HTMLAttributes<HTMLDivElement> {
    onFile: (files: FileList) => void;
    children?: React.ReactNode;
}
export declare const Dragger: ({ onFile, children, ...restProps }: DraggerProps) => import("react/jsx-runtime").JSX.Element;
