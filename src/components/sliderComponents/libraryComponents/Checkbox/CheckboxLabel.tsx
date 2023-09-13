import type { DetailedHTMLProps, LabelHTMLAttributes } from "react";

type Props = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export const CheckboxLabel = ({ children, ...rest }: Props) => {
  return <label {...rest}>{children}</label>;
};
