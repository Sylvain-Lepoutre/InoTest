import { type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  style: string;
};

export const ButtonList = ({ children, style, ...rest }: Props) => {
  return (
    <div className={style} {...rest}>
      {children}
    </div>
  );
};
