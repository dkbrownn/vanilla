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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/icon";
/**
 *
 */
export var Input = forwardRef(function (_a, ref) {
    var _b;
    var size = _a.size, icon = _a.icon, prepend = _a.prepend, append = _a.append, _c = _a.disabled, disabled = _c === void 0 ? false : _c, style = _a.style, restProps = __rest(_a, ["size", "icon", "prepend", "append", "disabled", "style"]);
    var classes = classNames("vanilla-input-wrapper", (_b = {
            "is-disabled": disabled
        },
        _b["input-size-".concat(size)] = size,
        _b["input-group"] = prepend || append,
        _b["input-group-append"] = !!append,
        _b["input-group-prepend"] = !!prepend,
        _b));
    var fixControlledValue = function (value) {
        if (typeof value === "undefined" || value === null) {
            return "";
        }
        return value;
    };
    if ("value" in restProps) {
        delete restProps.defaultValue;
        restProps.value = fixControlledValue(restProps.value);
    }
    return (React.createElement("div", { className: classes, style: style, "data-testid": "test-wrapper" },
        prepend && (React.createElement("div", { className: "vanilla-input-group-prepend", "data-testid": "test-prepend" }, prepend)),
        icon && (React.createElement("div", { className: "icon-wrapper", "data-testid": "test-icon" },
            React.createElement(Icon, { icon: icon, title: "title-".concat(icon) }))),
        React.createElement("input", __assign({ ref: ref, className: "vanilla-input-inner" }, restProps, { disabled: disabled, "data-testid": "test-input" })),
        append && (React.createElement("div", { className: "vanilla-input-group-append", "data-testid": "test-append" }, append))));
});
