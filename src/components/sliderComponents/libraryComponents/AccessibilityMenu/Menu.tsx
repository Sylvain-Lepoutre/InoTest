import { useState } from "react";

import { ButtonList } from "./ButtonList";
import { Button } from "./Button";

type State = {
  fontSize?: Size[];
  lineSpacing?: Spacing[];
};

export const Menu = ({ children, fontSize, lineSpacing }: Props) => {
  const [fontSize, setFontSize] = useState<State>(["small", "medium", "large"]);
  const [lineSpacing, setLineSpacing] = useState<State>(["small", "medium", "large"]);

  return <div>{children}</div>;
};

Menu.ButtonList = ButtonList;
Menu.Button = Button;
