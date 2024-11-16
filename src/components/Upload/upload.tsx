import React, { useRef } from "react";
import axios from "axios"
import { Button } from "../Button/button";


export interface UploadProps {
  /** 发送地址链接 */
  action: string;
  /** 上传文件前 */
  beforeUpload?: (file: File) => boolean | Promise<File>;
  /** 进度 */
  onProgress?: (percentage: number, file: File) => void;
  /** 成功 */
  onSuccess?: (data: any, file: File) => void;
  /** 失败 */
  onError?: (err: any, file: File) => void;
  /** 上传成功后change事件 */
  onChange?: (file: File) => void
}
/**
 * 
 */
export const Upload = ({
  action,
  beforeUpload,
  onError,
  onProgress,
  onSuccess,
  onChange
}: UploadProps) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    if (fileRef.current) {
      fileRef.current.click()
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files 
    if (!files) return 
    uploadFiles(files)
    if (fileRef.current) {
      fileRef.current.value = ""
    }
  }
  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processFile => {
            post(processFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    const formData = new FormData();
    formData.append(file.name, file);
    axios.post(action, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (e) => {
        if (e.total) {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0;
          if (percentage < 100) {
            if (onProgress) onProgress(percentage, file);
          }
        }
      },
    })
    .then((res) => {
      console.log(res);
      if (onSuccess) {
        onSuccess(res.data, file);
      }
      if (onChange) {
        onChange(file)
      }
    })
    .catch((err) => {
      if (onError) onError(err, file);
      if (onChange) {
        onChange(file);
      }
    });
}
  return <div className="vanilla-upload-component">
    <Button btnType="primary" onClick={handleClick} >Upload file</Button>
    <input className="vanilla-file-input" style={{display: "none"}}
    ref={fileRef}
    type="file"
    onChange={handleChange}
    />
  </div>  
}