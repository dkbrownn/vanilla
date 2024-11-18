import React, { useRef, useState } from "react";
import axios from "axios"
import { Button } from "../Button/button";
import { UploadList } from "./uploadList";
import { Dragger } from "./dragger";

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
  /** 删除时触发的函数 */
  onRemove?: (file: UploadFile) => void;
  /** 设置上传的请求头部 */
  headers?: { [key: string]: any };
  /** 上传的文件字段名 */
  name?: string;
  /** 上传时附带的额外参数 */
  data?: { [key: string]: any };
  /** 支持发送 cookie 凭证信息 */
  withCredentials?: boolean;
  /** 可选参数, 接受上传的文件类型 */
  accept?: string;
  /** 是否支持多选文件 */
  multiple?: boolean;
  /** 是否支持拖拽上传 */
  drag?: boolean;
  children?: React.ReactNode;
}
/**
 * 
 */
export const Upload = ({
  defultFileList,
  action,
  headers,
  name = "file",
  data,
  withCredentials,
  accept,
  multiple,
  drag,
  beforeUpload,
  onError,
  onProgress,
  onSuccess,
  onChange,
  onRemove,
  children
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
    setFileList(prvList => {
      return [_file, ...prvList];
    })
    const formData = new FormData()
    formData.append(name || "file", file)
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios
      .post(action, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...headers,
        },
        withCredentials,
        onUploadProgress: (e) => {
          console.log(`total: ${e.total}, loaded: ${e.loaded}`)
          if (e.total) {
            let percentage = Math.round((e.loaded * 100) / e.total) || 0;
            console.log(percentage)
            if (percentage < 100) {
              updateFileList(_file, {
                percent: percentage,
                status: "uploading",
              });
              if (onProgress) onProgress(percentage, file);
            }
          }
        },
      })
      .then((res) => {
        console.log(res);
        updateFileList(_file, { status: "success", response: res.data });
        if (onSuccess) {
          onSuccess(res.data, file);
        }
        if (onChange) {
          onChange(file);
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: "error", error: err });
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
      {drag ? (
        <Dragger onClick={handleClick} onFile={(files) => uploadFiles(files)}>
          {children}
        </Dragger>
      ) : (
        <Button btnType="primary" onClick={handleClick}>
          {children}
        </Button>
      )}
      <input
        className="vanilla-file-input"
        style={{ display: "none" }}
        ref={fileRef}
        type="file"
        onChange={handleChange}
        accept={accept}
        multiple={multiple}
        data-testid="test-input"
      />
      <UploadList onRemove={handleRemove} fileList={fileList || []} />
    </div>
  );  
}