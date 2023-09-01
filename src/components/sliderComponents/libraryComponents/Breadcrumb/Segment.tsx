import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type DetailedHTMLProps,
  type Dispatch,
  type LiHTMLAttributes,
  type SetStateAction,
} from "react";

import type { Props as BreadcrumbProps } from "./Breadcrumb";
import type { LinkObject } from "./Link";
import { useSegmentList } from "./SegmentList";

export type SegmentObject = {
  link: LinkObject | null;
  setHasSeparator: Dispatch<SetStateAction<boolean>>;
};

type Props = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> & {
  separator?: BreadcrumbProps["separator"];
};

type SetLink = Dispatch<SetStateAction<LinkObject>>;

const SetLinkContext = createContext<SetLink | null>(null);

const registerLink = (setLink: SetLink) => (link: LinkObject) => {
  setLink(link);
};

export const useSegment = () => {
  const setLink = useContext(SetLinkContext);

  if (setLink === null) {
    throw new Error("This component must be a child of the `Segment` component");
  }

  return {
    registerLink: registerLink(setLink),
  };
};

export const Segment = ({ children, separator, ...rest }: Props) => {
  const [hasSeparator, setHasSeparator] = useState(true);
  const [link, setLink] = useState<LinkObject | null>(null);

  const { registerSegment, separator: segmentListSeparator } = useSegmentList();

  if (separator === undefined) {
    separator = segmentListSeparator;
  }

  const segment = useMemo(
    () => ({
      link,
      setHasSeparator,
    }),
    [link]
  );

  useEffect(() => {
    registerSegment(segment);
  }, [registerSegment, segment]);

  return (
    <li {...rest}>
      {hasSeparator ? <span>{separator}</span> : null}
      <SetLinkContext.Provider value={setLink}>{children}</SetLinkContext.Provider>
    </li>
  );
};
