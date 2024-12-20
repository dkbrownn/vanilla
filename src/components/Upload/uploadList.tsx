import React from "react";
import { UploadFile } from "./upload";
import { Icon } from "../Icon/icon";
import { Progress } from "../Progress/progress";
interface UploadListProps {
  /** 上传文件数组 */
  fileList: UploadFile[];
  /** 删除 */ 
  onRemove: (_file: UploadFile) => void;
}

export const UploadList = ({
  fileList,
  onRemove
}: UploadListProps) => {
  return (
    <ul style={{
      padding: "0"
    }}>
      {fileList.map((item) => {
        return (
          <li
            className="vanilla-upload-list-item"
            key={item.uid}
          >
            <span className={`file-name file-name-${item.status}`}>
              <Icon
                style={{ padding: "0 1rem" }}
                icon={"file-alt"}
                theme="secondary"
              />
              <span>{item.name}</span>
            </span>
            <span className="file-status">
              {item.status === "uploading" && (
                <Icon theme="primary" icon="spinner" spin />
              )}
              {item.status === "success" && (
                <Icon theme="success" icon="check-circle" />
              )}
              {item.status === "error" && (
                <Icon theme="danger" icon="times-circle" />
              )}
            </span>
            <span className="file-actions">
              <Icon icon="times" onClick={() => onRemove(item)} />
            </span>
            {item.status === "uploading" && (
              <Progress percent={item.percent || 0} />
            )}
          </li>
        );
      })}
    </ul>
    )
}