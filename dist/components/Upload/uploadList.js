import React from "react";
import { Icon } from "../Icon/icon";
import { Progress } from "../Progress/progress";
export var UploadList = function (_a) {
    var fileList = _a.fileList, onRemove = _a.onRemove;
    return (React.createElement("ul", { style: {
            padding: "0"
        } }, fileList.map(function (item) {
        return (React.createElement("li", { className: "vanilla-upload-list-item", key: item.uid },
            React.createElement("span", { className: "file-name file-name-".concat(item.status) },
                React.createElement(Icon, { style: { padding: "0 1rem" }, icon: "file-alt", theme: "secondary" }),
                React.createElement("span", null, item.name)),
            React.createElement("span", { className: "file-status" },
                item.status === "uploading" && (React.createElement(Icon, { theme: "primary", icon: "spinner", spin: true })),
                item.status === "success" && (React.createElement(Icon, { theme: "success", icon: "check-circle" })),
                item.status === "error" && (React.createElement(Icon, { theme: "danger", icon: "times-circle" }))),
            React.createElement("span", { className: "file-actions" },
                React.createElement(Icon, { icon: "times", onClick: function () { return onRemove(item); } })),
            item.status === "uploading" && (React.createElement(Progress, { percent: item.percent || 0 }))));
    })));
};
