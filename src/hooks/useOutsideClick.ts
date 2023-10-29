import React, { useEffect } from "react";

type Callback = (event: MouseEvent) => void;

function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: Callback,
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    }

    const handleClick = (event: MouseEvent) => handleClickOutside(event);

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
}

export default useOutsideClick;
