import { RefObject } from "react";

/**
 *
 * @param {RefObject<HTMLElement>} ref - A ref that require an RefObject<HTMLElement> type.
 * @param {() => void} [callback] -  callback function.
 * @param {string} firstKey - The first key to check for in the event.
 * @param {string} secondKey - The second key to check for in the event.
 */

const useKeys = (callback: () => void, ref: RefObject<HTMLElement>, firstKey: string, secondKey: string) => {
  const handleKey = () => {
    if (event.key === firstKey || event.key === secondKey) {
      callback();
    }
  };

  window.addEventListener("keydown", handleKey);
};

export default useKeys;
