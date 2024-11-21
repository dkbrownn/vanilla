import React from "react";
import { Meta, StoryFn } from "@storybook/react/*";
import { action } from '@storybook/addon-actions'
import { Upload, UploadFile } from "./upload";
import { Icon } from "../Icon/icon";
const actionURL = "/api/posts"
const meta = {
  title: "Upload组件",
  component: Upload
} satisfies Meta<typeof Upload>

const defaultFileList: UploadFile[] = [
  { uid: "123", size: 123, name: "h.md", status: "uploading", percent: 30},
  { uid: "1235", size: 1235, name: "hy.md", status: "error"},
  { uid: "1239", size: 1239, name: "hyx.md", status: "success"}
]

// const checkFileSize = (file: File) => {
//   if (Math.round(file.size / 1024 ) > 50) {
//     alert("file too big") 
//     return false
//   }
//   return true
// }

// const filePromise = (file: File) => {
//   const newFile = new File([file], "new_name.docx", {type: file.type})
//   return Promise.resolve(newFile)
// }
export default meta
export const DefaultType: StoryFn<typeof Upload> = () => (
  
  <Upload 
  defultFileList={defaultFileList}
  action={actionURL}
  // beforeUpload={filePromise}
  // onProgress={action("progress")}
  // onError={action("error")}
  // onSuccess={action("success")}
  onChange={action("change")}
  onRemove={action("remove")}
  name="fileName"
  data={{"key": "value"}}
  headers={{"X-Powered-By": "vanilla"}}
  multiple
  >
    Upload file
  </Upload>
)
DefaultType.storyName = "默认的Upload"
export const DragType: StoryFn<typeof Upload> = () => (
  
  <Upload 
  defultFileList={defaultFileList}
  action={actionURL}
  // beforeUpload={filePromise}
  // onProgress={action("progress")}
  // onError={action("error")}
  // onSuccess={action("success")}
  onChange={action("change")}
  onRemove={action("remove")}
  name="fileName"
  data={{"key": "value"}}
  headers={{"X-Powered-By": "vanilla"}}
  multiple
  drag
  >
   <Icon icon="upload" size="5x" theme="secondary" />
    <br/>
    <p>点击或者拖动到此区域进行上传</p>
  </Upload>
)
DragType.storyName = "支持拖拽的Upload"