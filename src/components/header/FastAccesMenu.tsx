import { RefObject } from "react";

type FastAccesMenuProps = {
  href: string;
  horizontalFocus: (event: KeyboardEvent) => void;
  navRef: RefObject<HTMLElement>;
};

const FastAccesMenu: React.FC<FastAccesMenuProps> = (props: FastAccesMenuProps) => {
  return (
    <a
      ref={props.navRef}
      aria-label="go to main content"
      onKeyDown={(event) => {
        props.horizontalFocus(event);
      }}
      className="block px-4 py-2 sr-only focus:not-sr-only focus:text-black navStyle"
      href={props.href}
    >
      Main content
    </a>
  );
};

export default FastAccesMenu;
