import { createContext, useEffect, useState, type Dispatch, type HTMLAttributes, type SetStateAction } from "react";

import { Button, type SelectState } from "./Button";
import { ButtonList } from "./ButtonList";

type State = {
  selectButton: SelectState[];
};

type Props = HTMLAttributes<HTMLDivElement>;

export const SetStateContext = createContext<Dispatch<SetStateAction<State>>>(() => {
  throw new Error("Cannot access SetStateContext outside of the Menu component");
});

export const Menu = ({ children, ...rest }: Props) => {
  const [state, setState] = useState<State>({
    selectButton: [],
  });

  const handleChangeFont = (event: Event) => {
    const select = event.target as HTMLSelectElement;
    console.log("Font :", select.value);

    if (select.value === "Default") {
      document.documentElement.style.fontSize = "16px";
    } else if (select.value === "Large") {
      document.documentElement.style.fontSize = "20px";
    } else if (select.value === "Extra Large") {
      document.documentElement.style.fontSize = "24px";
    }
  };

  const handleChangeLine = (event: Event) => {
    const select = event.target as HTMLSelectElement;
    console.log("Line spacing :", select.value);

    if (select.value === "Default") {
      document.documentElement.style.lineHeight = "1.5";
    } else if (select.value === "Large") {
      document.documentElement.style.lineHeight = "2";
    } else if (select.value === "Extra Large") {
      document.documentElement.style.lineHeight = "2.5";
    }
  };

  const handleChangeImage = () => {
    const select = event.target as HTMLSelectElement;
    console.log("Image :", select.value);

    if (select.value === "visible") {
      //TODO
    } else if (select.value === "hidden") {
      //TODO
    }
  };

  useEffect(() => {
    for (const selectState of state.selectButton) {
      if (selectState.option === "font") {
        selectState.ref.current?.addEventListener("change", handleChangeFont);
      } else if (selectState.option === "line") {
        selectState.ref.current?.addEventListener("change", handleChangeLine);
      } else if (selectState.option === "image") {
        selectState.ref.current?.addEventListener("change", handleChangeImage);
      }
    }

    return () => {
      for (const selectState of state.selectButton) {
        if (selectState.option === "font") {
          selectState.ref.current?.removeEventListener("change", handleChangeFont);
        } else if (selectState.option === "line") {
          selectState.ref.current?.removeEventListener("change", handleChangeLine);
        } else if (selectState.option === "image") {
          selectState.ref.current?.removeEventListener("change", handleChangeImage);
        }
      }
    };
  }, [state.selectButton]);

  return (
    <div {...rest}>
      <SetStateContext.Provider value={setState}>{children}</SetStateContext.Provider>
    </div>
  );
};

Menu.Button = Button;
Menu.ButtonList = ButtonList;
