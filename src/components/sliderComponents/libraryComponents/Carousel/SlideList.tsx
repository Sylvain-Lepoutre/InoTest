import { type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLUListElement>;

export const SlideList = ({children, ...rest}: Props) => {
  return <ul {...rest}>{children}</ul>;
};
