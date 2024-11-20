import React from "react";
export var TabItem = function (_a) {
    var label = _a.label, disabled = _a.disabled, children = _a.children;
    return React.createElement("div", { className: "tab-panel" }, children);
};
