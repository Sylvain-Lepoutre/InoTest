import { RefObject } from "react";
import { useTranslation } from "react-i18next";

type FastAccesMenuProps = {
  mouseFocus: (event: MouseEvent) => void;
  horizontalFocus: (event: KeyboardEvent) => void;
  href: string;
  navRef: RefObject<HTMLElement>;
};

const FastAccesMenu: React.FC<FastAccesMenuProps> = (props: FastAccesMenuProps) => {
  const { t } = useTranslation();

  return (
    <a
      aria-label={t("aria-fastAccess")}
      className="sr-only focus:not-sr-only block focus:px-4 focus:py-2 navStyle"
      href={props.href}
    >
      {t("main-content-button")}
    </a>
  );
};

export default FastAccesMenu;
