import React from "react";
export type UploadStatus = "ready" | "uploading" | "success" | "error";
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
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
    headers?: {
        [key: string]: any;
    };
    /** 上传的文件字段名 */
    name?: string;
    /** 上传时附带的额外参数 */
    data?: {
        [key: string]: any;
    };
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
 * 通过点击或者拖拽上传文件
 * ##引用方法
 * ~~~js
 * import { Upload } from "vanilla-react-dkbrownn"
 * ~~~
 */
export declare const Upload: ({ defultFileList, action, headers, name, data, withCredentials, accept, multiple, drag, beforeUpload, onError, onProgress, onSuccess, onChange, onRemove, children }: UploadProps) => import("react/jsx-runtime").JSX.Element;
