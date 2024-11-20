import React from "react";
import { UploadFile } from "./upload";
interface UploadListProps {
    /** 上传文件数组 */
    fileList: UploadFile[];
    /** 删除 */
    onRemove: (_file: UploadFile) => void;
}
export declare const UploadList: ({ fileList, onRemove }: UploadListProps) => React.JSX.Element;
export {};
