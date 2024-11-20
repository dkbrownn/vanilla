var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { createContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Input } from "../Input/input";
import { useClickOutside } from "../../Hooks/useClickOutside";
import { Transition } from "../Transition/transition";
import { Icon } from "../Icon/icon";
export var SelectContext = createContext({
    selectedValues: [],
});
/**
 * 下拉选择器。
 * 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
 * ### 引用方法
 *
 * ~~~js
 * import { Select } from 'vanilla-react'
 * // 然后可以使用 <Select> 和 <Select.Option>
 * ~~~
 */
export var Select = function (_a) {
    var defaultValue = _a.defaultValue, placeholder = _a.placeholder, disabled = _a.disabled, multiple = _a.multiple, name = _a.name, _b = _a.isShow, isShow = _b === void 0 ? false : _b, onChange = _a.onChange, onVisibleChange = _a.onVisibleChange, children = _a.children;
    var containerRef = useRef(null);
    var input = useRef(null);
    var _c = useState(false), menuOpen = _c[0], setMenuOpen = _c[1];
    var _d = useState(typeof defaultValue === "string" ? defaultValue : ""), value = _d[0], setValue = _d[1];
    var _e = useState(Array.isArray(defaultValue) ? defaultValue : []), selectedValues = _e[0], setSelectedValues = _e[1];
    var handleClick = function (e) {
        e.preventDefault();
        if (disabled)
            return;
        setMenuOpen(true);
        if (onVisibleChange)
            onVisibleChange(!menuOpen);
    };
    useClickOutside(containerRef, function () {
        setMenuOpen(false);
        if (onVisibleChange && menuOpen)
            onVisibleChange(false);
    });
    var handleOptionClick = function (value, isSelected) {
        // 单选模式
        if (!multiple) {
            setMenuOpen(false);
            setValue(value);
            if (onVisibleChange)
                onVisibleChange(false);
        }
        else {
            setValue("");
        }
        var updatedValues = [value];
        if (multiple) {
            updatedValues = isSelected ? selectedValues.filter(function (v) { return v !== value; }) : __spreadArray(__spreadArray([], selectedValues, true), [value], false);
            setSelectedValues(updatedValues);
        }
        if (onChange)
            onChange(value, updatedValues);
    };
    useEffect(function () {
        // focus input
        console.log("111", input.current);
        if (input.current) {
            input.current.focus();
            if (multiple && selectedValues.length > 0) {
                input.current.placeholder = "";
            }
            else {
                if (placeholder)
                    input.current.placeholder = placeholder;
            }
        }
    }, [selectedValues, multiple, placeholder]);
    var wrapperClasses = classNames("vanilla-select", {
        "menu-is-open": menuOpen,
        "is-disabled": disabled,
        "is-multiple": multiple,
    });
    var passedContext = {
        onSelect: handleOptionClick,
        selectedValues: multiple ? selectedValues : value,
        multiple: multiple
    };
    var generateOptions = function () {
        var NodeList = {};
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var value = childElement.props.value;
            if (childElement.type.displayName === "Option") {
                if (!NodeList[value]) {
                    NodeList[value] = value;
                    return React.cloneElement(childElement, {
                        index: "select-".concat(index),
                    });
                }
                else {
                    console.error("Warning: Options can not have a equal value");
                    return React.cloneElement(childElement, {
                        index: "select-".concat(index),
                        "disabled": true
                    });
                }
            }
            else {
                console.error("Warning: Select has a child which is not a Option component");
            }
        });
    };
    return (React.createElement("div", { className: wrapperClasses, ref: containerRef },
        isShow && React.createElement("div", { className: "show-wrapper", style: {
                padding: ".5rem",
            } },
            "\u5F53\u524D\u503C\uFF1A",
            !multiple ? (React.createElement("span", null, value)) : (selectedValues.map(function (value, index) { return React.createElement("span", { key: index }, value); }))),
        React.createElement("div", { className: "vanilla-select-input" },
            React.createElement(Input, { ref: input, disabled: disabled, placeholder: placeholder, readOnly: true, value: value, name: name, icon: "angle-down", onClick: handleClick }),
            multiple && (React.createElement("div", { className: "vanilla-selected-tags" }, selectedValues.map(function (item, index) {
                return (React.createElement("span", { className: "vanilla-tag", key: "tag-".concat(index) },
                    item,
                    React.createElement(Icon, { icon: "times", onClick: function () { return handleOptionClick(item, true); } })));
            })))),
        React.createElement(SelectContext.Provider, { value: passedContext },
            React.createElement(Transition, { in: menuOpen, timeout: 300, animation: "zoom-in-top" },
                React.createElement("ul", { className: "vanilla-select-dropdown" }, generateOptions())))));
};
