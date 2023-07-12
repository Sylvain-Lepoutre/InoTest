import { useContext, useEffect, useRef, type ButtonHTMLAttributes, type RefObject } from "react";

import { SetStateContext } from "./Carousel";

export type NavButtonRef = RefObject<HTMLButtonElement>;

export type NavButtonTo = "previous" | "next";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  to: NavButtonTo;
};

export const NavButton = ({ children, to, ...rest }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);

  const setState = useContext(SetStateContext);

  useEffect(() => {
    setState((prevState) => {
      return { ...prevState, [`${to}ButtonRef`]: ref };
    });
  }, [setState, to]);

  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  );
};
