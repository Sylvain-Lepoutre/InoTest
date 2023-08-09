import { createContext, useContext, useRef, type HTMLAttributes, type RefObject } from "react";

type ContextType = RefObject<HTMLElement>;

type Props = Omit<HTMLAttributes<HTMLDivElement>, "aria-live" | "status"> & {
  live: "assertive" | "off" | "polite";
};

const Context = createContext<ContextType>({ current: null });

export const useLiveRegion = () => {
  const ref = useContext(Context);

  return {
    setAssertiveMessage: (message: string) => {
      if (ref?.current !== null) {
        ref.current.textContent = message;
      }
    },
  };
};

export const LiveRegion = ({ children, live = "assertive", ...rest }: Props) => {
  const ref = useRef<ContextType>(null);

  return (
    <Context.Provider value={ref}>
      {children}
      <div aria-live={live} ref={ref} role="status" {...rest} />
    </Context.Provider>
  );
};
