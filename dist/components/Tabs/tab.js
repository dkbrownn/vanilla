import React, { useState } from "react";
import classNames from "classnames";
// 使用react提供的Children.map() api实现对子节点的抽丝剥茧，将想要展示的部分抽离出来
/**
 * 选项卡切换组件。
 * 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ### 引用方法
 *
 * ~~~js
 * import { Tabs } from 'vanilla-react'
 * ~~~
 */
export var Tabs = function (_a) {
    var _b;
    var _c = _a.defaultIndex, defaultIndex = _c === void 0 ? 0 : _c, className = _a.className, _d = _a.type, type = _d === void 0 ? 'line' : _d, children = _a.children, onSelect = _a.onSelect;
    var _e = useState(defaultIndex), activeIndex = _e[0], setIndex = _e[1];
    var navClasses = classNames("vanilla-tabs-nav", (_b = {},
        _b["tabs-nav-".concat(type)] = type,
        _b));
    var handleClick = function (e, index, disabled) {
        e.preventDefault();
        if (!disabled) {
            setIndex(index);
            if (onSelect) {
                onSelect(index);
            }
        }
    };
    var renderNavLinks = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var _a = childElement.props, label = _a.label, disabled = _a.disabled;
            var navLinkClass = classNames("tabs-nav-item", {
                'disabled': disabled,
                'is-active': activeIndex === index
            });
            return React.createElement("li", { className: navLinkClass, key: "nav-item-".concat(index), onClick: function (e) { return handleClick(e, index, disabled); } }, label);
        });
    };
    var renderContent = function () {
        return React.Children.map(children, function (child, index) {
            if (index === activeIndex) {
                return child;
            }
        });
    };
    return (React.createElement("div", { className: "tabs ".concat(className) },
        React.createElement("ul", { className: navClasses }, renderNavLinks()),
        React.createElement("div", { className: "vanilla-tabs-content" }, renderContent())));
};
