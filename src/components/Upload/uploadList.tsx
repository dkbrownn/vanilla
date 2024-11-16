import React from "react";
import { UploadFile } from "./upload";
import { Icon } from "../Icon/icon";
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
            style={{
              listStyle: "none",
              padding: ".1rem 0",
            }}
            className="vanilla-upload-list-item"
            key={item.uid}
          >
            <span className={`file-name file-name-${item.status}`}>
              <Icon
                style={{ padding: "0 1rem" }}
                icon={"file-alt"}
                theme="secondary"
              />
              {item.name}
            </span>
            <span className="file-status">
              {item.status === "uploading" && <Icon icon="spinner" spin />}
              {item.status === "success" && <Icon icon="check-circle" />}
              {item.status === "error" && <Icon icon="times-circle" />}
            </span>
            <span className="file-actions">
              <Icon icon="times" onClick={() => onRemove(item)}/>
            </span>
          </li>
        );
      })}
    </ul>
    )
}