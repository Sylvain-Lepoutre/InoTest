import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Link = ({ children, ...rest }: Props) => {
  return <a {...rest}>{children}</a>;
};
