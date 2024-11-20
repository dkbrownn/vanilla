import React, { useContext } from "react";
import classNames from "classnames";
import { Icon } from "../Icon/icon";
import { SelectContext } from "./select";
export var Option = function (_a) {
    var index = _a.index, value = _a.value, label = _a.label, disabled = _a.disabled, children = _a.children;
    var _b = useContext(SelectContext), onSelect = _b.onSelect, selectedValues = _b.selectedValues, multiple = _b.multiple;
    var isSelected = selectedValues.includes(value);
    var classes = classNames("vanilla-select-option", {
        "is-disabled": disabled,
        "is-selected": isSelected,
    });
    var handleClick = function (e, value, isSelected) {
        e.preventDefault();
        if (onSelect && !disabled) {
            onSelect(value, isSelected);
        }
    };
    return (React.createElement("li", { key: index, className: classes, onClick: function (e) { return handleClick(e, value, isSelected); } },
        children || (label ? label : value),
        !disabled && multiple && isSelected && React.createElement(Icon, { icon: "check", className: "icon-check" })));
};
Option.displayName = "Option";
