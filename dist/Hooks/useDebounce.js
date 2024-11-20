import { useEffect, useState } from "react";
// 手写简易版的debouce
// 我的原始思路时debounce中调用函数，但是这样会导致fetch请求过多，思考欠佳；应当修改为返回搜索框文本，这样可以减少fetch请求
export var useDebounce = function (value, delay) {
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
