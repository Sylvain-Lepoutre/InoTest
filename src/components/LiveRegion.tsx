import { createContext, useContext, useRef, type PropsWithChildren, type RefObject } from "react";

type ContextType = RefObject<HTMLElement>;

const Context = createContext<ContextType | null>(null);

export const useLiveRegion = () => {
  const ref = useContext(Context);

  return {
    setAssertiveMessage: (message: string) => {
      if (ref !== null && ref.current !== null) {
        ref.current.textContent = message;
      }
    },
  };
};

export const LiveRegion = () => {
  const ref = useRef<ContextType>(null);

  return (
    <Context.Provider value={ref}>
      <div aria-live="assertive" className="sr-only" ref={ref} role="status"></div>
    </Context.Provider>
  );
};
