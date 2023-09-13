import type { DetailedHTMLProps, HTMLAttributes } from "react";

import { useCheckbox } from "./Checkbox";

type Props = Omit<DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "id">;

export const CheckboxLegend = ({ children, ...rest }: Props) => {
  const { id } = useCheckbox();
  return (
    <legend id={id} {...rest}>
      {children}
    </legend>
  );
};
