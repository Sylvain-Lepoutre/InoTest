import { useEffect, useState, RefObject, useCallback } from "react";

const body = document.querySelector("body");

/**
 * My hook useFocus
 */

const useFocus = (refs: RefObject<HTMLElement>[], initialIndex?: number) => {
  const [activeFocus, setActiveFocus] = useState<number>(initialIndex ?? 0);

  const focusButton = useCallback(
    (index: number) => {
      if (document.activeElement !== body || initialIndex !== undefined) {
        refs[index]?.current?.focus();
      }
    },
    [initialIndex, refs]
  );

  useEffect(() => {
    focusButton(activeFocus);
  }, [activeFocus, focusButton]);

  const horizontalFocus = (event: KeyboardEvent) => {
    const { key } = event;
    const focus = activeFocus;

    switch (key) {
      case "ArrowRight": {
        setActiveFocus(Math.min(focus + 1, refs.length - 1));
        break;
      }

      case "ArrowLeft": {
        setActiveFocus(Math.max(focus - 1, 0));
        break;
      }
    }
  };

  const verticalFocus = (event: KeyboardEvent) => {
    const { key } = event;
    const focus = activeFocus;

    switch (key) {
      case "ArrowDown": {
        setActiveFocus(Math.min(focus + 1, refs.length - 1));
        break;
      }

      case "ArrowUp": {
        setActiveFocus(Math.max(focus - 1, 0));
        break;
      }
    }
  };

  return { horizontalFocus, verticalFocus, activeFocus, setActiveFocus };
};

export default useFocus;
