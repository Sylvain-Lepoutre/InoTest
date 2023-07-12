import { useContext, useEffect, useRef, type LiHTMLAttributes, type RefObject } from "react";

import { SetStateContext } from "./Carousel";

export type SlideState = {
  ref: Ref;
  selected: boolean;
};

type Props = Omit<LiHTMLAttributes<HTMLLIElement>, "style"> & {
  selected?: boolean | undefined;
};

type Ref = RefObject<HTMLLIElement>;

export const Slide = ({ children, selected = false, ...rest }: Props) => {
  const ref = useRef<HTMLLIElement>(null);

  const setState = useContext(SetStateContext);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, slides: [...prevState.slides, { ref, selected }] }));
  }, [selected, setState]);

  return (
    <li ref={ref} style={selected ? undefined : { display: "none" }} {...rest}>
      {children}
    </li>
  );
};
