import { createContext, useState, type Dispatch, type HTMLAttributes, type SetStateAction } from "react";

import { ButtonList, OptionButtonRef, Size, Spacing } from "./ButtonList";
import { Button } from "./Button";

type State = {
  fontSizeButtonRef?: OptionButtonRef;
  lineSpacingRef?: OptionButtonRef;
  imageRef?: OptionButtonRef;
  option: {
    fontSize?: Size[];
    lineSpacing?: Spacing[];
    image?: Image[];
  };
};

type Props = HTMLAttributes<HTMLDivElement> & {
  style: string;
};

export const SetStateContext = createContext<Dispatch<SetStateAction<State>>>(() => undefined);

export const Menu = ({ children, style, ...rest }: Props) => {
  const [state, setState] = useState<State>({
    fontSizeButtonRef: undefined,
    lineSpacingRef: undefined,
    imageRef: undefined,
    option: {
      fontSize: ["small", "medium", "large", "xl"],
      lineSpacing: ["small", "medium", "large", "xl"],
      image: ["visible", "hidden"],
    },
  });

  const handleState = (e) => {
    if (ref.current) setState(e.target.value);
  };

  state.fontSizeButtonRef?.current?.addEventListener("click", handleState);
  state.lineSpacingRef?.current?.addEventListener("click", handleState);
  state.image?.current?.addEventListener("click", handleState);

  return (
    <div className={style} {...rest}>
      {children}
    </div>
  );
};

Menu.ButtonList = ButtonList;
Menu.Button = Button;
