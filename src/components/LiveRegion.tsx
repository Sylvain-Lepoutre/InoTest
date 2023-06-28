import { createContext, useContext, useRef, type RefObject } from "react";

type ContextType = RefObject<HTMLElement> | null;

const Context = createContext<ContextType>(null);

export const useLiveRegion = () => {
  const ref = useContext(Context);

  return {
    setAssertiveMessage: (message: string) => {
      if (ref?.current !== null && ref?.current !== undefined) {
        ref.current.textContent = message;
      }
    },
  };
};

export const LiveRegion = () => {
  const ref = useRef<ContextType>(null);

  return (
    <Context.Provider value={ref}>
      <div aria-live="assertive" className="sr-only" ref={(el) => (ref.current = el)} role="status"></div>
    </Context.Provider>
  );
};
