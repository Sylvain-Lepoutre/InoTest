import {
  createContext,
  useContext,
  useEffect,
  useState,
  type DetailedHTMLProps,
  type Dispatch,
  type OlHTMLAttributes,
  type SetStateAction,
} from "react";

import { useBreadcrumb, type Props as BreadcrumbProps } from "./Breadcrumb";
import type { SegmentObject } from "./Segment";

type Props = DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement> & {
  separator?: BreadcrumbProps["separator"];
};

type SetSegments = Dispatch<SetStateAction<SegmentObject[]>>;

const SeparatorContext = createContext<BreadcrumbProps["separator"] | null>(null);
const SetSegmentsContext = createContext<SetSegments | null>(null);

const registerSegment = (setSegments: SetSegments) => (segment: SegmentObject) => {
  setSegments((segments) => (!segments.includes(segment) ? [...segments, segment] : segments));
};

export const useSegmentList = () => {
  const separator = useContext(SeparatorContext);
  const setSegments = useContext(SetSegmentsContext);

  if (separator === null || setSegments === null) {
    throw new Error("This component must be a child of the `SegmentList` component");
  }

  return {
    registerSegment: registerSegment(setSegments),
    separator,
  };
};

export const SegmentList = ({ children, separator, ...rest }: Props) => {
  const [segments, setSegments] = useState<SegmentObject[]>([]);

  const { separator: breadcrumbSeparator } = useBreadcrumb();

  if (separator === undefined) {
    separator = breadcrumbSeparator;
  }

  useEffect(() => {
    if (segments.length > 0) {
      segments[0].setHasSeparator(false);
      segments[segments.length - 1].link?.setIsCurrentPage(true);
    }
  }, [segments]);

  return (
    <ol {...rest}>
      <SeparatorContext.Provider value={separator}>
        <SetSegmentsContext.Provider value={setSegments}>{children}</SetSegmentsContext.Provider>
      </SeparatorContext.Provider>
    </ol>
  );
};
