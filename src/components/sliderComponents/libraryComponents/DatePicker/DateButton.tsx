import { useEffect, useRef, type MouseEventHandler, type PropsWithChildren } from "react";
import { useComposite } from "../../../Composite";

type Props = {
  readonly ariaLabel: string;
  readonly id: string;
  readonly onClick: MouseEventHandler<HTMLButtonElement>;
  style: string;
};

export const DateButton = ({ ariaLabel, children, onClick, style }: PropsWithChildren<Props>) => {
  const { addRef } = useComposite();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    addRef(ref);
  }, [addRef]);

  return (
    <button aria-label={ariaLabel} className={style} onClick={onClick} ref={ref} type="button">
      {children}
    </button>
  );
};
