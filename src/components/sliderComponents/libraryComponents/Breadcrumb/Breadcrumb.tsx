import { createContext, useContext, type DetailedHTMLProps, type HTMLAttributes } from "react";

import { Link } from "./Link";
import { Segment } from "./Segment";
import { SegmentList } from "./SegmentList";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  separator: string;
};

const SeparatorContext = createContext<string | null>(null);

export const useBreadcrumb = () => {
  const separator = useContext(SeparatorContext);

  return {
    separator,
  };
};

export const Breadcrumb = ({ children, separator, ...rest }: Props) => {
  return (
    <nav {...rest}>
      <SeparatorContext.Provider value={separator}>{children}</SeparatorContext.Provider>
    </nav>
  );
};

Breadcrumb.Link = Link;
Breadcrumb.Segment = Segment;
Breadcrumb.SegmentList = SegmentList;
