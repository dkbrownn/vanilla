import React, { createContext, useState } from "react";
import classNames from "classnames";
export var MenuContext = createContext({ index: "0" });
export var Menu = function (_a) {
    var _b;
    var defaultIndex = _a.defaultIndex, className = _a.className, _c = _a.mode, mode = _c === void 0 ? "horizontal" : _c, style = _a.style, children = _a.children, onSelect = _a.onSelect, _d = _a.defaultOpenSubMenus, defaultOpenSubMenus = _d === void 0 ? [] : _d;
    var _e = useState(defaultIndex), currentActive = _e[0], setActive = _e[1];
    var classes = classNames("vanilla-menu", className, (_b = {},
        _b["menu-".concat(mode)] = mode,
        _b));
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : "0",
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childElement, { index: String(index) }); // 返回一个新的react元素，新元素具有不同的 props 和 children，cloneElement(element, props, ...children)
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem Component");
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
