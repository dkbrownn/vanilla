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
import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { Input } from "../Input/input";
import { Icon } from "../Icon/icon";
import { useDebounce } from "../../Hooks/useDebounce";
import { useClickOutside } from "../../Hooks/useClickOutside";
export var AutoComplete = function (_a) {
    var fetchSuggestios = _a.fetchSuggestios, onSelect = _a.onSelect, renderOptions = _a.renderOptions, value = _a.value, restProps = __rest(_a, ["fetchSuggestios", "onSelect", "renderOptions", "value"]);
    var _b = useState(value), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState([]), suggestions = _d[0], setSuggestions = _d[1];
    var triggerSearch = useRef(true);
    var componentRef = useRef(null);
    var _e = useState(-1), hightLight = _e[0], setHightLight = _e[1];
    console.log(suggestions);
    var renderSearchIcon = function () {
        return React.createElement("div", { className: "suggestions-loading-icon" }, loading ? React.createElement(Icon, { icon: "spinner", spin: true }) : null);
    };
    var debounceValue = useDebounce(inputValue, 500);
    useClickOutside(componentRef, function () {
        setSuggestions([]);
    });
    useEffect(function () {
        if (debounceValue && triggerSearch.current) {
            var results = fetchSuggestios(debounceValue);
            if (results instanceof Promise) {
                results.then(function (data) {
                    setLoading(false);
                    setSuggestions(data);
                });
            }
            else {
                setSuggestions(results);
                setLoading(false);
            }
        }
        else {
            setSuggestions([]);
            setLoading(false);
        }
        triggerSearch.current = false;
        setHightLight(-1);
    }, [debounceValue, fetchSuggestios]);
    var handleChange = function (e) {
        var value = e.target.value.trim();
        setInputValue(value);
        setSuggestions([]);
        triggerSearch.current = true;
        if (!value)
            return;
        setLoading(true);
    };
    var renderTmeplate = function (item) {
        return renderOptions ? renderOptions(item) : item.value;
    };
    var handleClick = function (value) {
        if (value) {
            setInputValue(value.value);
            setSuggestions([]);
            triggerSearch.current = false;
            if (onSelect)
                onSelect(value);
        }
    };
    var generateDropdown = function () {
        return (React.createElement("ul", { className: "vanilla-suggestion-list", "data-tetsid": "test-list" }, suggestions === null || suggestions === void 0 ? void 0 :
            suggestions.map(function (item, index) {
                var hightLightClasses = classNames("suggestion-item", {
                    "is-active": hightLight === index,
                });
                return React.createElement("li", { className: hightLightClasses, key: index, onClick: function () { return handleClick(item); } }, renderTmeplate(item));
            }),
            loading ? renderSearchIcon() : null));
    };
    var hilight = function (index) {
        if (index < 0)
            index = 0;
        if (index >= suggestions.length)
            index = suggestions.length - 1;
        setHightLight(index);
    };
    var handleKeyDown = function (e) {
        // alert(e.key)
        switch (e.key) {
            case "ArrowUp":
                hilight(hightLight - 1);
                break;
            case "ArrowDown":
                hilight(hightLight + 1);
                break;
            case "ArrowLeft":
                break;
            case "ArrowRight":
                break;
            case "Escape":
                setSuggestions([]);
                break;
            case "Enter":
                handleClick(suggestions[hightLight]);
                break;
            default:
                break;
        }
    };
    return (React.createElement("div", { className: "vanilla-auto-complete", ref: componentRef },
        React.createElement(Input, __assign({ value: inputValue }, restProps, { onChange: handleChange, onKeyDown: handleKeyDown })),
        generateDropdown()));
};
