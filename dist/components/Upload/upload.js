var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useRef, useState } from "react";
import axios from "axios";
import { Button } from "../Button/button";
import { UploadList } from "./uploadList";
import { Dragger } from "./dragger";
/**
 *
 */
export var Upload = function (_a) {
    var defultFileList = _a.defultFileList, action = _a.action, headers = _a.headers, _b = _a.name, name = _b === void 0 ? "file" : _b, data = _a.data, withCredentials = _a.withCredentials, accept = _a.accept, multiple = _a.multiple, drag = _a.drag, beforeUpload = _a.beforeUpload, onError = _a.onError, onProgress = _a.onProgress, onSuccess = _a.onSuccess, onChange = _a.onChange, onRemove = _a.onRemove, children = _a.children;
    var fileRef = useRef(null);
    var _c = useState(defultFileList || []), fileList = _c[0], setFileList = _c[1];
    var handleClick = function () {
        if (fileRef.current) {
            fileRef.current.click();
        }
    };
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    var handleChange = function (e) {
        var files = e.target.files;
        if (!files)
            return;
        uploadFiles(files);
        if (fileRef.current) {
            fileRef.current.value = "";
        }
    };
    var uploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            if (!beforeUpload) {
                post(file);
            }
            else {
                var result = beforeUpload(file);
                if (result && result instanceof Promise) {
                    result.then(function (processFile) {
                        post(processFile);
                    });
                }
                else if (result !== false) {
                    post(file);
                }
            }
        });
    };
    var handleRemove = function (file) {
        setFileList(function (revList) {
            return revList.filter(function (item) { return item.uid !== file.uid; });
        });
        if (onRemove) {
            onRemove(file);
        }
    };
    var post = function (file) {
        var _file = {
            uid: Date.now().toString(),
            size: file.size,
            name: file.name,
            status: "ready",
            percent: 0,
            raw: file
        };
        setFileList(function (prvList) {
            return __spreadArray([_file], prvList, true);
        });
        var formData = new FormData();
        formData.append(name || "file", file);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios
            .post(action, formData, {
            headers: __assign({ "Content-Type": "multipart/form-data" }, headers),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                console.log("total: ".concat(e.total, ", loaded: ").concat(e.loaded));
                if (e.total) {
                    var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                    console.log(percentage);
                    if (percentage < 100) {
                        updateFileList(_file, {
                            percent: percentage,
                            status: "uploading",
                        });
                        if (onProgress)
                            onProgress(percentage, file);
                    }
                }
            },
        })
            .then(function (res) {
            console.log(res);
            updateFileList(_file, { status: "success", response: res.data });
            if (onSuccess) {
                onSuccess(res.data, file);
            }
            if (onChange) {
                onChange(file);
            }
        })
            .catch(function (err) {
            updateFileList(_file, { status: "error", error: err });
            if (onError) {
                onError(err, file);
            }
            if (onChange) {
                onChange(file);
            }
        });
    };
    console.log(fileList);
    return (React.createElement("div", { className: "vanilla-upload-component" },
        drag ? (React.createElement(Dragger, { onClick: handleClick, onFile: function (files) { return uploadFiles(files); } }, children)) : (React.createElement(Button, { btnType: "primary", onClick: handleClick }, children)),
        React.createElement("input", { className: "vanilla-file-input", style: { display: "none" }, ref: fileRef, type: "file", onChange: handleChange, accept: accept, multiple: multiple, "data-testid": "test-input" }),
        React.createElement(UploadList, { onRemove: handleRemove, fileList: fileList, "data-testid": "test-list" })));
};
