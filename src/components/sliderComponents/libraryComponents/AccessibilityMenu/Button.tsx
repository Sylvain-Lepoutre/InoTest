import { useContext, useRef, RefObject, type SelectHTMLAttributes, useEffect } from "react";
import { SetStateContext } from "./Menu";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  option: Options;
};

type Options = "font" | "line" | "image";

export type OptionButtonRef = RefObject<HTMLSelectElement>;

export type SelectState = {
  ref: OptionButtonRef;
  option: Options;
};

export const Button = ({ children, option, ...rest }: Props) => {
  const ref = useRef<HTMLSelectElement>(null);

  const setState = useContext(SetStateContext);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      selectButton: [...prevState.selectButton, { ref, option }],
    }));
  }, [setState, option]);

  return (
    <select ref={ref} {...rest}>
      {children}
    </select>
  );
};
