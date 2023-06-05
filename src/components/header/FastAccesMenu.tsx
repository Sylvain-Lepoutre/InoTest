type FastAccesMenuProps = {
  href: string;
  accesRef: HTMLElement;
};

const FastAccesMenu: React.FC<FastAccesMenuProps> = (props: FastAccesMenuProps) => {
  return (
    <>
      <a
        ref={props.accesRef}
        aria-label="go to main content"
        className="focus:text-black block px-4 py-2 navStyle"
        href={props.href}
      >
        Main content
      </a>
    </>
  );
};

export default FastAccesMenu;
