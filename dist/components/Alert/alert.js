import React, { useState } from "react";
import classNames from "classnames";
import { Transition } from "../Transition/transition";
import { Icon } from "../Icon/icon";
// TODO 完善alert位置
/**
 *  用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ##引用方法
 * ~~~js
 * import { Alert } from "vanilla-react"
 * ~~~
 */
export var Alert = function (_a) {
    var _b;
    var className = _a.className, _c = _a.close, close = _c === void 0 ? true : _c, _d = _a.alType, alType = _d === void 0 ? "default" : _d, _e = _a.title, title = _e === void 0 ? "title" : _e, desc = _a.desc, onClose = _a.onClose;
    var classes = classNames("vanilla-alert", className, (_b = {},
        _b["vanilla-alert-".concat(alType)] = alType,
        _b));
    var _f = useState(false), hide = _f[0], setHide = _f[1];
    var handleClose = function () {
        if (onClose) {
            onClose();
        }
        setHide(true);
    };
    return (React.createElement(Transition, { in: !hide, unmountOnExit: true, timeout: 300, animation: "zoom-in-top" },
        React.createElement("div", { className: classes },
            React.createElement("p", { className: "vanilla-alert-title" },
                title,
                " "),
            desc ? React.createElement("p", { className: "vanilla-alert-desc" }, desc) : null,
            close ? (React.createElement(Icon, { className: "vanilla-alert-close", onClick: handleClose, icon: "times" })) : null)));
};
