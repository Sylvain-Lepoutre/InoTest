import { useContext, useRef, RefObject, type SelectHTMLAttributes, useEffect } from "react";

import { SetStateContext } from "./Menu";

export type OptionButtonRef = RefObject<HTMLButtonElement>;

export type OptionButton = "font" | "line" | "image";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  selectOption: OptionButton;
  style: string;
};

export const Button = ({ children, selectOption, style, ...rest }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);

  const setState = useContext(SetStateContext);

  useEffect(() => {
    setState((prevState) => {
      return { ...prevState, [`${selectOption}`]: ref };
    });
  }, [setState, selectOption]);

  return (
    <select className={style} ref={ref} {...rest}>
      {children}
    </select>
  );
};
