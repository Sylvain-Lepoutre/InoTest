import type { DetailedHTMLProps, OlHTMLAttributes } from "react";

type Props = DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;

export const SegmentList = ({ children, ...rest }: Props) => {
  return <ol {...rest}>{children}</ol>;
};
