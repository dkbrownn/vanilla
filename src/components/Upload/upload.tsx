import React, { useRef, useState } from "react";
import axios from "axios"
import { Button } from "../Button/button";
import { UploadList } from "./uploadList";

export type UploadStatus = "ready" | "uploading" | "success" | "error";

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any
}
export interface UploadProps {
  /** 默认显示文件 */
  defultFileList?: UploadFile[];
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
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) =>void
}
/**
 * 
 */
export const Upload = ({
  defultFileList,
  action,
  beforeUpload,
  onError,
  onProgress,
  onSuccess,
  onChange,
  onRemove
}: UploadProps) => {
  const fileRef = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defultFileList || [])
  const handleClick = () => {
    if (fileRef.current) {
      fileRef.current.click()
    }
  }

  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file
        }
      })
    })
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
  const handleRemove = (file: UploadFile) => {
    setFileList((revList) => {
      return revList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file);
    }
  }

  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now().toString(),
      size: file.size,
      name: file.name,
      status: "ready",
      percent: 0,
      raw: file
    }
    setFileList([_file, ...fileList])
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
            updateFileList(_file, {percent: percentage, status: 'uploading'})
            if (onProgress) onProgress(percentage, file);
          }
        }
      },
    })
    .then((res) => {
      console.log(res)
      updateFileList(_file, { status: "success", response: res.data })
      if (onSuccess) {
        onSuccess(res.data, file)
      }
      if (onChange) {
        onChange(file)
      }
    })
    .catch((err) => {
      updateFileList(_file, { status: "error", error: err})
      if (onError) {
        onError(err, file);
      }
      if (onChange) {
        onChange(file);
      }
    });
}
console.log(fileList)
  return (
    <div className="vanilla-upload-component">
      <Button btnType="primary" onClick={handleClick}>
        Upload file
      </Button>
      <input
        className="vanilla-file-input"
        style={{ display: "none" }}
        ref={fileRef}
        type="file"
        onChange={handleChange}
      />
      {
        <UploadList onRemove={handleRemove} fileList={fileList || []}/>
      }
    </div>
  );  
}