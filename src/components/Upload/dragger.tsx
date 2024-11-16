import React, { useState, DragEvent } from "react";
import classNames from "classnames";

export interface DraggerProps extends React.HTMLAttributes<HTMLDivElement> {
  onFile: (files: FileList) => void;
  children?: React.ReactNode;
}

export const Dragger = ({
  onFile,
  children,
  ...restProps
}: DraggerProps) => {
  const [dragger, setDragger] = useState(false)
  const classes = classNames("vanilla-uploader-dragger", {
    "is-dragover": dragger
  })
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragger(false)
    onFile(e.dataTransfer.files)
  }
  const handleDragger = (e: DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragger(over)
  }
  return (
    <div
      className={classes}
      onDragOver={(e) => handleDragger(e, true)}
      onDragLeave={(e) => handleDragger(e, false)}
      onDrop={handleDrop}
      {...restProps}
    >
      {children}
    </div>
  );
}