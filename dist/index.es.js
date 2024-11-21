import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import classNames from 'classnames';
import React, { createContext, useState, useContext, forwardRef, useEffect, useRef, useReducer, useImperativeHandle } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import Schema from 'async-validator';
import { mapValues, each } from 'lodash-es';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * ##引用方法
 * ~~~js
 * import { Button } from "vanilla-react-dkbrownn"
 * ~~~
 */
var Button = function (_a) {
    var _b;
    var _c = _a.btnType, btnType = _c === void 0 ? "default" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, size = _a.size, children = _a.children, href = _a.href, className = _a.className, restProps = __rest(_a, ["btnType", "disabled", "size", "children", "href", "className"]);
    var classes = classNames("vanilla-btn", className, (_b = {},
        _b["vanilla-btn-".concat(btnType)] = btnType,
        _b["vanilla-btn-".concat(size)] = size,
        _b.disabled = btnType === "link" && disabled,
        _b));
    if (btnType === "link" && href) {
        return (jsx("a", __assign({ className: classes, href: href }, restProps, { children: children })));
    }
    else {
        return (jsx("button", __assign({ className: classes, disabled: disabled }, restProps, { children: children })));
    }
};

/**
 * 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * ### 引用方法
 *
 * ~~~js
 * import { Menu } from 'vanilla-react-dkbrownn'
 * ~~~
 */
var MenuContext = createContext({ index: "0" });
var Menu = function (_a) {
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
    return (jsx("ul", __assign({ className: classes, style: style, "data-testid": "test-menu" }, { children: jsx(MenuContext.Provider, __assign({ value: passedContext }, { children: renderChildren() })) })));
};

var MenuItem = function (_a) {
    var index = _a.index, disabled = _a.disabled, className = _a.className, style = _a.style, children = _a.children;
    var context = useContext(MenuContext);
    var classes = classNames("menu-item", className, {
        'is-disabled': disabled,
        'is-active': index === context.index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && (typeof index === 'string'))
            context.onSelect(index);
    };
    return (jsx("li", __assign({ className: classes, style: style, onClick: handleClick }, { children: children })));
};
MenuItem.displayName = 'MenuItem';

/**
 *
 * 提供了一套常用的图标集合 基y于react-fontawesome。

 * 支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic

 * 支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://fontawesome.com/icons?d=gallery&s=solid&m=free
 *
 * ##引用方法
 * ~~~js
 * import { Icon } from "vanilla-react-dkbrownn"
 * ~~~
 */
var Icon = function (_a) {
    var _b;
    var theme = _a.theme, className = _a.className, restProps = __rest(_a, ["theme", "className"]);
    var classes = classNames("vanilla-icon", className, (_b = {},
        _b["vanilla-icon-".concat(theme)] = theme,
        _b));
    return jsx(FontAwesomeIcon, __assign({ className: classes }, restProps));
};

var Transition = function (_a) {
    var children = _a.children, classNames = _a.classNames, animation = _a.animation; _a.appear; var wrapper = _a.wrapper; _a.unmountOnExit; var restProps = __rest(_a, ["children", "classNames", "animation", "appear", "wrapper", "unmountOnExit"]);
    return (jsx(CSSTransition, __assign({ classNames: classNames ? classNames : animation, appear: true, unmountOnExit: true }, restProps, { children: wrapper ? jsx("div", { children: children }) : children })));
};

var SubMenu = function (_a) {
    var index = _a.index, title = _a.title, className = _a.className, children = _a.children;
    var context = useContext(MenuContext);
    var openedSubMenus = context.defaultOpenSubMenus;
    var isOpend = (index && context.mode === "vertical") ? openedSubMenus === null || openedSubMenus === void 0 ? void 0 : openedSubMenus.includes(index) : false;
    var _b = useState(isOpend), menuOpen = _b[0], setOpen = _b[1];
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!menuOpen);
    };
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    //横向事件
    var hoverEvents = context.mode === "horizontal" ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); }
    } : {};
    //纵向事件
    var clickEvents = context.mode === "vertical" ? { onClick: handleClick } : {};
    var renderChildren = function () {
        var subMenuClasses = classNames("vanilla-submenu", {
            "menu-opened": menuOpen,
        });
        var childrenComponent = React.Children.map(children, function (child, i) {
            var childElement = child;
            if (childElement.type.displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: "".concat(index, "-").concat(i) });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem Component");
            }
        });
        return (jsx(Transition, __assign({ in: menuOpen, timeout: 300, classNames: "zoom-in-top", appear: true, unmountOnExit: true }, { children: jsx("ul", __assign({ className: subMenuClasses }, { children: childrenComponent })) })));
    };
    return (jsxs("li", __assign({ className: classes }, hoverEvents, { children: [jsxs("div", __assign({ className: "submenu-title" }, clickEvents, { children: [title, jsx(Icon, { icon: "angle-down", className: "arrow-icon" })] })), renderChildren()] }), index));
};
SubMenu.displayName = 'SubMenu';

var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

/**
 *
 */
var Input = forwardRef(function (_a, ref) {
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
    return (jsxs("div", __assign({ className: classes, style: style, "data-testid": "test-wrapper" }, { children: [prepend && (jsx("div", __assign({ className: "vanilla-input-group-prepend", "data-testid": "test-prepend" }, { children: prepend }))), icon && (jsx("div", __assign({ className: "icon-wrapper", "data-testid": "test-icon" }, { children: jsx(Icon, { icon: icon, title: "title-".concat(icon) }) }))), jsx("input", __assign({ ref: ref, className: "vanilla-input-inner" }, restProps, { disabled: disabled, "data-testid": "test-input" })), append && (jsx("div", __assign({ className: "vanilla-input-group-append", "data-testid": "test-append" }, { children: append })))] })));
});

// 手写简易版的debouce
// 我的原始思路时debounce中调用函数，但是这样会导致fetch请求过多，思考欠佳；应当修改为返回搜索框文本，这样可以减少fetch请求
var useDebounce = function (value, delay) {
    var _a = useState(value), debounceValue = _a[0], setDebounceValue = _a[1];
    useEffect(function () {
        var clear = setTimeout(function () {
            setDebounceValue(value);
        }, delay);
        return function () {
            clearTimeout(clear);
        };
    }, [value, delay]);
    return debounceValue;
};

var useClickOutside = function (ref, handler) {
    useEffect(function () {
        var listener = function (event) {
            var _a;
            console.log(ref.current, event.target, (_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target));
            var ele = event.target;
            if (!ref.current ||
                ref.current.contains(ele) ||
                ele.closest(".icon-check"))
                return;
            handler(event);
        };
        document.addEventListener("click", listener);
        return function () {
            document.removeEventListener("click", listener);
        };
    }, [ref, handler]);
};

/**
 *  输入框自动完成功能。当输入值需要自动完成时使用，支持同步和异步两种方式 支持 Input 组件的所有属性 支持键盘事件选择
 * ##引用方法
 * ~~~js
 * import { AutoComplete  } from "vanilla-react-dkbrownn"
 * ~~~
 */
var AutoComplete = function (_a) {
    var fetchSuggestios = _a.fetchSuggestios, onSelect = _a.onSelect, renderOptions = _a.renderOptions, value = _a.value, restProps = __rest(_a, ["fetchSuggestios", "onSelect", "renderOptions", "value"]);
    var _b = useState(value), inputValue = _b[0], setInputValue = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var _d = useState([]), suggestions = _d[0], setSuggestions = _d[1];
    var triggerSearch = useRef(true);
    var componentRef = useRef(null);
    var _e = useState(-1), hightLight = _e[0], setHightLight = _e[1];
    console.log(suggestions);
    var renderSearchIcon = function () {
        return jsx("div", __assign({ className: "suggestions-loading-icon" }, { children: loading ? jsx(Icon, { icon: "spinner", spin: true }) : null }));
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
        return (jsxs("ul", __assign({ className: "vanilla-suggestion-list", "data-tetsid": "test-list" }, { children: [suggestions === null || suggestions === void 0 ? void 0 : suggestions.map(function (item, index) {
                    var hightLightClasses = classNames("suggestion-item", {
                        "is-active": hightLight === index,
                    });
                    return jsx("li", __assign({ className: hightLightClasses, onClick: function () { return handleClick(item); } }, { children: renderTmeplate(item) }), index);
                }), loading ? renderSearchIcon() : null] })));
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
        }
    };
    return (jsxs("div", __assign({ className: "vanilla-auto-complete", ref: componentRef }, { children: [jsx(Input, __assign({ value: inputValue }, restProps, { onChange: handleChange, onKeyDown: handleKeyDown })), generateDropdown()] })));
};

var Progress = function (_a) {
    var _b = _a.touch, touch = _b === void 0 ? false : _b, _c = _a.showText, showText = _c === void 0 ? true : _c, percent = _a.percent, _d = _a.strokeHeight, strokeHeight = _d === void 0 ? 15 : _d, styles = _a.styles, _e = _a.theme, theme = _e === void 0 ? "primary" : _e;
    console.log("progress---");
    var outerRef = useRef(null);
    var innerRef = useRef(null);
    useEffect(function () {
        if (outerRef.current) {
            console.log(outerRef.current.clientWidth, outerRef.current.offsetLeft);
        }
    });
    var handleMove = function (e) {
        if (!touch)
            return;
        if (outerRef.current) {
            var outerWidth_1 = outerRef.current.clientWidth;
            var innerX = e.clientX - outerRef.current.offsetLeft;
            var percent_1 = Math.round(100 * (innerX / outerWidth_1));
            if (innerRef.current) {
                innerRef.current.style.width = "".concat(percent_1, "%");
            }
        }
    };
    return (jsx("div", __assign({ className: "vanilla-progress-bar", style: styles }, { children: jsx("div", __assign({ className: "vanilla-progress-bar-outer", style: { height: "".concat(strokeHeight, "px") }, onMouseEnter: function (e) { return console.log(e.clientX, "enter"); }, onMouseMove: handleMove, onMouseLeave: function (e) { return console.log(e.clientX, "leave"); }, ref: outerRef }, { children: jsx("div", __assign({ ref: innerRef, className: "vanilla-progress-bar-inner color-".concat(theme), style: {
                    width: "".concat(percent, "%"),
                } }, { children: showText && !touch && jsxs("span", __assign({ className: "inner-text" }, { children: [percent, "%"] })) })) })) })));
};

var UploadList = function (_a) {
    var fileList = _a.fileList, onRemove = _a.onRemove;
    return (jsx("ul", __assign({ style: {
            padding: "0"
        } }, { children: fileList.map(function (item) {
            return (jsxs("li", __assign({ className: "vanilla-upload-list-item" }, { children: [jsxs("span", __assign({ className: "file-name file-name-".concat(item.status) }, { children: [jsx(Icon, { style: { padding: "0 1rem" }, icon: "file-alt", theme: "secondary" }), jsx("span", { children: item.name })] })), jsxs("span", __assign({ className: "file-status" }, { children: [item.status === "uploading" && (jsx(Icon, { theme: "primary", icon: "spinner", spin: true })), item.status === "success" && (jsx(Icon, { theme: "success", icon: "check-circle" })), item.status === "error" && (jsx(Icon, { theme: "danger", icon: "times-circle" }))] })), jsx("span", __assign({ className: "file-actions" }, { children: jsx(Icon, { icon: "times", onClick: function () { return onRemove(item); } }) })), item.status === "uploading" && (jsx(Progress, { percent: item.percent || 0 }))] }), item.uid));
        }) })));
};

var Dragger = function (_a) {
    var onFile = _a.onFile, children = _a.children, restProps = __rest(_a, ["onFile", "children"]);
    var _b = useState(false), dragger = _b[0], setDragger = _b[1];
    var classes = classNames("vanilla-uploader-dragger", {
        "is-dragover": dragger
    });
    var handleDrop = function (e) {
        e.preventDefault();
        setDragger(false);
        onFile(e.dataTransfer.files);
    };
    var handleDragger = function (e, over) {
        e.preventDefault();
        setDragger(over);
    };
    return (jsx("div", __assign({ className: classes, onDragOver: function (e) { return handleDragger(e, true); }, onDragLeave: function (e) { return handleDragger(e, false); }, onDrop: handleDrop }, restProps, { children: children })));
};

/**
 * 通过点击或者拖拽上传文件
 * ##引用方法
 * ~~~js
 * import { Upload } from "vanilla-react-dkbrownn"
 * ~~~
 */
var Upload = function (_a) {
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
    return (jsxs("div", __assign({ className: "vanilla-upload-component" }, { children: [drag ? (jsx(Dragger, __assign({ onClick: handleClick, onFile: function (files) { return uploadFiles(files); } }, { children: children }))) : (jsx(Button, __assign({ btnType: "primary", onClick: handleClick }, { children: children }))), jsx("input", { className: "vanilla-file-input", style: { display: "none" }, ref: fileRef, type: "file", onChange: handleChange, accept: accept, multiple: multiple, "data-testid": "test-input" }), jsx(UploadList, { onRemove: handleRemove, fileList: fileList, "data-testid": "test-list" })] })));
};

// 使用react提供的Children.map() api实现对子节点的抽丝剥茧，将想要展示的部分抽离出来
/**
 * 选项卡切换组件。
 * 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ### 引用方法
 *
 * ~~~js
 * import { Tabs } from 'vanilla-react-dkbrownn'
 * ~~~
 */
var Tabs = function (_a) {
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
            return jsx("li", __assign({ className: navLinkClass, onClick: function (e) { return handleClick(e, index, disabled); } }, { children: label }), "nav-item-".concat(index));
        });
    };
    var renderContent = function () {
        return React.Children.map(children, function (child, index) {
            if (index === activeIndex) {
                return child;
            }
        });
    };
    return (jsxs("div", __assign({ className: "tabs ".concat(className) }, { children: [jsx("ul", __assign({ className: navClasses }, { children: renderNavLinks() })), jsx("div", __assign({ className: "vanilla-tabs-content" }, { children: renderContent() }))] })));
};

var TabItem = function (_a) {
    _a.label; _a.disabled; var children = _a.children;
    return jsx("div", __assign({ className: "tab-panel" }, { children: children }));
};

var TransTabs = Tabs;
TransTabs.Item = TabItem;

// TODO 完善alert位置
/**
 *  用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ##引用方法
 * ~~~js
 * import { Alert } from "vanilla-react-dkbrownn"
 * ~~~
 */
var Alert = function (_a) {
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
    return (jsx(Transition, __assign({ in: !hide, unmountOnExit: true, timeout: 300, animation: "zoom-in-top" }, { children: jsxs("div", __assign({ className: classes }, { children: [jsxs("p", __assign({ className: "vanilla-alert-title" }, { children: [title, " "] })), desc ? jsx("p", __assign({ className: "vanilla-alert-desc" }, { children: desc })) : null, close ? (jsx(Icon, { className: "vanilla-alert-close", onClick: handleClose, icon: "times" })) : null] })) })));
};

var SelectContext = createContext({
    selectedValues: [],
});
/**
 * 下拉选择器。
 * 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
 * ### 引用方法
 *
 * ~~~js
 * import { Select } from 'vanilla-react-dkbrownn'
 * // 然后可以使用 <Select> 和 <Select.Option>
 * ~~~
 */
var Select = function (_a) {
    var defaultValue = _a.defaultValue, placeholder = _a.placeholder, _b = _a.disabled, disabled = _b === void 0 ? false : _b, multiple = _a.multiple, name = _a.name, _c = _a.isShow, isShow = _c === void 0 ? false : _c, onChange = _a.onChange, onVisibleChange = _a.onVisibleChange, children = _a.children;
    var containerRef = useRef(null);
    var input = useRef(null);
    var containerWidth = useRef(0);
    var _d = useState(false), menuOpen = _d[0], setMenuOpen = _d[1];
    var _e = useState(typeof defaultValue === "string" ? defaultValue : ""), value = _e[0], setValue = _e[1];
    var _f = useState(Array.isArray(defaultValue) ? defaultValue : []), selectedValues = _f[0], setSelectedValues = _f[1];
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
    useEffect(function () {
        if (containerRef.current) {
            containerWidth.current = containerRef.current.getBoundingClientRect().width;
        }
    });
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
    return (jsxs("div", __assign({ className: wrapperClasses, ref: containerRef }, { children: [isShow && (jsxs("div", __assign({ className: "show-wrapper", style: {
                    padding: ".5rem",
                } }, { children: ["\u5F53\u524D\u503C\uFF1A", !multiple ? (jsx("span", { children: value })) : (selectedValues.map(function (value, index) { return (jsx("span", { children: value }, index)); }))] }))), jsxs("div", __assign({ className: "vanilla-select-input", onClick: handleClick }, { children: [jsx(Input, { ref: input, disabled: disabled, placeholder: placeholder, readOnly: true, value: value, name: name, icon: "angle-down" }), multiple && (jsx("div", __assign({ className: "vanilla-selected-tags" }, { children: selectedValues.map(function (item, index) {
                            return (jsxs("span", __assign({ className: "vanilla-tag" }, { children: [item, jsx(Icon, { icon: "times", onClick: function () { return handleOptionClick(item, true); } })] }), "tag-".concat(index)));
                        }) })))] })), jsx(SelectContext.Provider, __assign({ value: passedContext }, { children: jsx(Transition, __assign({ in: menuOpen, timeout: 300, animation: "zoom-in-top" }, { children: jsx("ul", __assign({ className: "vanilla-select-dropdown" }, { children: generateOptions() })) })) }))] })));
};

var Option = function (_a) {
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
    return (jsxs("li", __assign({ className: classes, onClick: function (e) { return handleClick(e, value, isSelected); } }, { children: [children || (label ? label : value), !disabled && multiple && isSelected && jsx(Icon, { icon: "check", className: "icon-check" })] }), index));
};
Option.displayName = "Option";

var TransSelect = Select;
TransSelect.Optiton = Option;

var filedReducer = function (state, action) {
    var _a, _b, _c;
    switch (action.type) {
        case "addField":
            return __assign(__assign({}, state), (_a = {}, _a[action.name] = __assign({}, action.value), _a));
        case "updateValue":
            return __assign(__assign({}, state), (_b = {}, _b[action.name] = __assign(__assign({}, state[action.name]), { value: action.value }), _b));
        case "updateValidateResult":
            var _d = action.value, isVaild = _d.isVaild, errors = _d.errors;
            return __assign(__assign({}, state), (_c = {}, _c[action.name] = __assign(__assign({}, state[action.name]), { isVaild: isVaild, errors: errors }), _c));
        default:
            return state;
    }
};
var useStore = function (initialValues) {
    // from state
    var _a = useState({ isVaild: true, isSubmiting: false, errors: {} }), form = _a[0], setForm = _a[1];
    var _b = useReducer(filedReducer, {}), fields = _b[0], dispatch = _b[1];
    var getFieldValue = function (key) {
        return fields[key] && fields[key].value;
    };
    var getFieldsValue = function () {
        return mapValues(fields, function (item) { return item.value; });
    };
    var setFieldValue = function (name, value) {
        if (fields[name]) {
            dispatch({ type: "updateValue", name: name, value: value });
        }
    };
    var reset = function () {
        each(fields, function (value, name) {
            if (initialValues === null || initialValues === void 0 ? void 0 : initialValues[name]) {
                dispatch({ type: "updateValue", name: name, value: initialValues[name] });
            }
            else {
                dispatch({ type: "updateValue", name: name, value: null });
            }
        });
        // if (initialValues) {
        //   each(initialValues, (value, name) => {
        //     console.log(value, name)
        //     if (fields[name]) {
        //       dispatch({type: "updateValue", name, value})
        //     }
        //   })
        // } else {
        //   each(initialValues, ({value, name}) => {
        //     dispatch({type: "updateValue", name, value: null})
        //   })
        // }
    };
    var transformRules = function (rules) {
        return rules.map(function (rule) {
            if (typeof rule === "function") {
                var calledRule = rule({ getFieldValue: getFieldValue });
                return calledRule;
            }
            else {
                return rule;
            }
        });
    };
    var validateField = function (name) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, value, rules, afterRules, descroptor, valueMap, validator, isVaild, errors, e_1, err;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = fields[name], value = _a.value, rules = _a.rules;
                    afterRules = transformRules(rules);
                    descroptor = (_b = {},
                        _b[name] = afterRules,
                        _b);
                    valueMap = (_c = {},
                        _c[name] = value,
                        _c);
                    validator = new Schema(descroptor);
                    isVaild = true;
                    errors = [];
                    console.log(valueMap, descroptor, validator);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, validator.validate(valueMap)];
                case 2:
                    _d.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_1 = _d.sent();
                    console.log(e_1);
                    isVaild = false;
                    err = e_1;
                    console.log("e", err.errors);
                    console.log("fields", err.fields);
                    errors = err.errors;
                    return [3 /*break*/, 5];
                case 4:
                    console.log("errors", isVaild);
                    dispatch({ type: "updateValidateResult", name: name, value: { isVaild: isVaild, errors: errors } });
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    // const test = async (
    //   name: string,
    //   errorsArray: Record<string, ValidateError[]>
    // ) => {
    //   const { value, rules } = fields[name];
    //   const afterRules = transformRules(rules);
    //   const descroptor = {
    //     [name]: afterRules,
    //   };
    //   const valueMap = {
    //     [name]: value,
    //   };
    //   const validator = new Schema(descroptor);
    //   // const result = await validator.validate(valueMap).then(res =>
    //   //  { console.log("res", res)
    //   //   return res
    //   //  }).catch(err => {
    //   //     console.log("err1",err.errors)
    //   //     return err.errors
    //   //   });
    //   console.log(descroptor, valueMap);
    //   try {
    //     await validator.validate(valueMap);
    //   } catch (e) {
    //     const err = e as ValidateErrorType;
    //     console.log(err.errors);
    //     errorsArray[name] = err.errors;
    //   }
    // };
    var validateAllField = function () { return __awaiter(void 0, void 0, void 0, function () {
        var isVaild, errors, valueMap, descroptor, validator, e_2, err;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isVaild = true;
                    errors = {};
                    valueMap = mapValues(fields, function (item) { return item.value; });
                    descroptor = mapValues(fields, function (item) { return transformRules(item.rules); });
                    validator = new Schema(descroptor);
                    console.log(valueMap, descroptor, validator);
                    setForm(__assign(__assign({}, form), { isSubmiting: true }));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, validator.validate(valueMap)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3:
                    e_2 = _a.sent();
                    console.error(e_2);
                    isVaild = false;
                    err = e_2;
                    errors = err.fields;
                    each(fields, function (value, name) {
                        // error 是否存在对应的key
                        if (errors[name]) {
                            var itemErrors = errors[name];
                            dispatch({ type: "updateValidateResult", name: name, value: { isVaild: false, errors: itemErrors } });
                        }
                        else if (value.rules.length > 0 && !errors[name]) {
                            dispatch({ type: "updateValidateResult", name: name, value: { isVaild: true, errors: [] } });
                        }
                    });
                    return [3 /*break*/, 5];
                case 4:
                    setForm(__assign(__assign({}, form), { isSubmiting: false, isVaild: isVaild, errors: errors }));
                    return [2 /*return*/, {
                            isVaild: isVaild,
                            errors: errors,
                            values: valueMap,
                        }];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return {
        fields: fields,
        dispatch: dispatch,
        form: form,
        validateField: validateField,
        validateAllField: validateAllField,
        getFieldValue: getFieldValue,
        getFieldsValue: getFieldsValue,
        setFieldValue: setFieldValue,
        reset: reset,
    };
};

var formContext = createContext({});
var Form = forwardRef(function (_a, ref) {
    var _b = _a.name, name = _b === void 0 ? "vanilla-form" : _b, children = _a.children, initialValues = _a.initialValues, onFinish = _a.onFinish, onFinishFailed = _a.onFinishFailed;
    var _c = useStore(initialValues), form = _c.form, dispatch = _c.dispatch, fields = _c.fields, restProps = __rest(_c, ["form", "dispatch", "fields"]);
    var validateField = restProps.validateField, validateAllField = restProps.validateAllField;
    useImperativeHandle(ref, function () {
        return __assign({}, restProps);
    });
    var passContext = {
        dispatch: dispatch,
        fields: fields,
        initialValues: initialValues,
        validateField: validateField,
    };
    var submitForm = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, isVaild, errors, values;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    e.preventDefault();
                    e.stopPropagation();
                    return [4 /*yield*/, validateAllField()];
                case 1:
                    _a = _b.sent(), isVaild = _a.isVaild, errors = _a.errors, values = _a.values;
                    if (isVaild && onFinish) {
                        onFinish(values);
                    }
                    else if (!isVaild && onFinishFailed) {
                        onFinishFailed(values, errors);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var childrenNode;
    if (typeof children === "function") {
        childrenNode = children(form);
    }
    else {
        childrenNode = children;
    }
    return (jsx(Fragment, { children: jsx("form", __assign({ name: name, className: "vanilla-form", onSubmit: submitForm }, { children: jsx(formContext.Provider, __assign({ value: passContext }, { children: childrenNode })) })) }));
});

var FormItem = function (_a) {
    var name = _a.name, label = _a.label, children = _a.children, rules = _a.rules, _b = _a.valuePropName, valuePropName = _b === void 0 ? "value" : _b, _c = _a.validateTrigger, validateTrigger = _c === void 0 ? "onBlur" : _c, _d = _a.trigger, trigger = _d === void 0 ? "onChange" : _d, _e = _a.getValueFromEvent, getValueFromEvent = _e === void 0 ? function (e) { return e.target.value; } : _e;
    var rowClasses = classNames("vanilla-row", {
        "vanilla-row-no-label": !label
    });
    var _f = useContext(formContext), dispatch = _f.dispatch, fields = _f.fields, initialValues = _f.initialValues, validateField = _f.validateField;
    useEffect(function () {
        var value = initialValues && initialValues[name];
        dispatch({ type: "addField", name: name, value: { label: label, name: name, value: value, rules: rules || [], errors: [], isVaild: true } });
    }, []);
    // 获取store对应值
    var fieldState = fields[name];
    var value = (fieldState && fieldState.value) || "";
    var error = (fieldState && fieldState.errors);
    var hasError = error && error.length > 0;
    var isRequired = rules === null || rules === void 0 ? void 0 : rules.some(function (rule) {
        if (typeof rule !== "function") {
            return rule.required;
        }
    });
    var labelClasses = classNames({
        "vanilla-form-item-required": isRequired,
    });
    var itemClasses = classNames("vanilla-form-item-control", {
        "vanilla-form-item-has-error": hasError,
    });
    var onValueUpdate = function (e) {
        var value = getValueFromEvent(e);
        console.log("new value", value);
        dispatch({ type: "updateValue", name: name, value: value });
    };
    var onValueValidate = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, validateField(name)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    // 创建列表，包含value和onChange
    var controlProps = {};
    controlProps[valuePropName] = value;
    controlProps[trigger] = onValueUpdate;
    if (rules) {
        controlProps[validateTrigger] = onValueValidate;
    }
    var childrenList = React.Children.toArray(children);
    // TODO 判断children类型，是否正确
    if (childrenList.length === 0) {
        console.error(" NO child element found in formItem, please provide one");
    }
    if (childrenList.length > 1) {
        console.warn("Only support one child element in formItem");
    }
    if (!React.isValidElement(childrenList[0])) {
        console.error(" Child component is not a vaild React Element");
    }
    var child = childrenList[0];
    var returnChildNode = React.cloneElement(child, __assign(__assign({}, child.props), controlProps));
    return (jsxs("div", __assign({ className: rowClasses }, { children: [label && (jsx("div", __assign({ className: "vanilla-form-item-label" }, { children: jsx("label", __assign({ className: labelClasses, title: label }, { children: label })) }))), jsxs("div", __assign({ className: "vanilla-form-item" }, { children: [jsx("div", __assign({ className: itemClasses }, { children: returnChildNode })), hasError && jsx("div", __assign({ className: "vanilla-form-item-explain" }, { children: error[0].message }))] }))] })));
};

var TransForm = Form;
TransForm.Item = FormItem;

library.add(fas);

export { Alert, AutoComplete, Button, TransForm as Form, Icon, Input, TransMenu as Menu, Progress, TransSelect as Select, TransTabs as Tabs, Transition, Upload };
