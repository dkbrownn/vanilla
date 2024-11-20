import { useEffect } from "react";
export var useClickOutside = function (ref, handler) {
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
