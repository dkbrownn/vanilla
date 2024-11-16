
import { RefObject, useEffect } from "react";
export const useClickOutside = (ref: RefObject<HTMLElement>, handler: Function) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      console.log(ref.current, event.target
        , ref.current?.contains(event.target as HTMLElement)
      );
      const ele = event.target as HTMLElement
        if (
          !ref.current ||
          ref.current.contains(ele) ||
          ele.closest(".icon-check")
        )
          return;
      handler(event)
    }
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener)
    }
  }, [ref, handler])
}