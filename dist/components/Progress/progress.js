import React, { useEffect, useRef } from "react";
export var Progress = function (_a) {
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
    return (React.createElement("div", { className: "vanilla-progress-bar", style: styles },
        React.createElement("div", { className: "vanilla-progress-bar-outer", style: { height: "".concat(strokeHeight, "px") }, onMouseEnter: function (e) { return console.log(e.clientX, "enter"); }, onMouseMove: handleMove, onMouseLeave: function (e) { return console.log(e.clientX, "leave"); }, ref: outerRef },
            React.createElement("div", { ref: innerRef, className: "vanilla-progress-bar-inner color-".concat(theme), style: {
                    width: "".concat(percent, "%"),
                } }, showText && !touch && React.createElement("span", { className: "inner-text" },
                percent,
                "%")))));
};
