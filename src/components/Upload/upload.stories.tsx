import React from "react";
import { Meta, StoryFn } from "@storybook/react/*";
import { action } from '@storybook/addon-actions'
import { Upload } from "./upload";
const actionURL = "https://my-json-server.typicode.com/dkbrownn/demo/posts"
const meta = {
  title: "Upload组件",
  component: Upload
} satisfies Meta<typeof Upload>

const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024 ) > 50) {
    alert("file too big") 
    return false
  }
  return true
}

const filePromise = (file: File) => {
  const newFile = new File([file], "new_name.docx", {type: file.type})
  return Promise.resolve(newFile)
}
export default meta
export const DefaultType: StoryFn<typeof Upload> = () => (
  
  <Upload action={actionURL}
  beforeUpload={filePromise}
  // onProgress={action("progress")}
  // onError={action("error")}
  // onSuccess={action("success")}
  onChange={action("change")}
  ></Upload>
)