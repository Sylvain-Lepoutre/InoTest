import type { DetailedHTMLProps, LiHTMLAttributes } from "react";

import { useBreadcrumb } from "./Breadcrumb";

type Props = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
  noSeparator?: boolean;
};

export const Segment = ({ children, noSeparator = false, ...rest }: Props) => {
  const { separator } = useBreadcrumb();

  return (
    <li {...rest}>
      {!noSeparator ? <span>{separator}</span> : null}
      {children}
    </li>
  );
};
