import { useEffect, useRef, type MouseEventHandler, type PropsWithChildren } from "react";

import { useComposite } from "../Composite";

type Props = {
  readonly ariaControls: string;
  readonly ariaSelected: boolean;
  readonly id: string;
  readonly onClick: MouseEventHandler<HTMLButtonElement>;
};

export const TrueNavBarButton = ({ ariaControls, ariaSelected, children, id, onClick }: PropsWithChildren<Props>) => {
  const { addRef } = useComposite();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    addRef(ref);
  }, [addRef]);

  return (
    <button
      aria-controls={ariaControls}
      aria-selected={ariaSelected}
      className="block px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
      id={id}
      onClick={onClick}
      ref={ref}
      role="tab"
      type="button"
    >
      {children}
    </button>
  );
};
