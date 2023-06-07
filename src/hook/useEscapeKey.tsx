import { RefObject, useCallback } from "react";

const useEscapeKey = (ref: RefObject<HTMLElement>) => {
  const handleEscape = useCallback((ref: RefObject<HTMLElement>) => {
    ref.current?.focus();
  }, []);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleEscape(ref);
    }
  });
};

export default useEscapeKey;
