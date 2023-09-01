import { useEffect, useMemo, useState, type AnchorHTMLAttributes, type DetailedHTMLProps } from "react";

import { useSegment } from "./Segment";

export type LinkObject = {
  setIsCurrentPage: Dispatch<SetStateAction<boolean>>;
};

type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Link = ({ children, ...rest }: Props) => {
  const [isCurrentPage, setIsCurrentPage] = useState(false);

  const { registerLink } = useSegment();

  const link = useMemo(
    () => ({
      setIsCurrentPage,
    }),
    []
  );

  useEffect(() => {
    registerLink(link);
  }, [link, registerLink]);

  return (
    <a aria-current={isCurrentPage ? "page" : undefined} {...rest}>
      {children}
    </a>
  );
};
