import { useRef, useState, RefObject, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import useFocus from "../../hook/useFocus";
import { ThemeContext } from "../../routes/Root";
import FastAccesMenu from "../header/FastAccesMenu";
import LanguageSelector from "@components/UI/LanguageSelector";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

type Props = {
  href?: string;
  escapeRef?: RefObject<HTMLElement>;
};

const LibraryNavBar: React.FC<Props> = ({ escapeRef, href }: Props) => {
  const { t } = useTranslation();
  i18n.language;

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full burgerStyle2 transition ease transform duration-300`;
  const navRefs: RefObject<HTMLElement>[] = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null)
  ];

  navRefs[0] = escapeRef ?? navRefs[0];

  const { horizontalFocus } = useFocus(navRefs);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="windowStyle rounded-md h-[10vh] flex justify-center items-center">
        <div className="relative md:hidden flex mr-[-1rem]">
          <button
            className="flex flex-col h-12 w-12 rounded justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${isMenuOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"}`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </button>

          <ul
            className={`menu absolute top-16 right-0 w-36 mr-2 buttonClass rounded-lg shadow-md ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link onClick={closeMenu} to="/" className="block px-4 py-2 text">
                {t("nav-home")}
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/" className="block max-w-full px-4 py-2 text">
                {t("nav-about")}
              </Link>
            </li>
          </ul>
        </div>

        <ul className="menu hidden md:flex md:items-start">
          <li>
            <Link
              ref={navRefs[0]}
              onKeyDown={(event) => {
                horizontalFocus(event);
              }}
              to="/"
              className="block px-4 py-2 link link-underline link-underline text"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              {t("nav-home")}
            </Link>
          </li>
          <li>
            <Link
              ref={navRefs[1]}
              onKeyDown={(event) => {
                horizontalFocus(event);
              }}
              to="/"
              className="block px-4 py-2 link link-underline link-underline text"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              {t("nav-about")}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LibraryNavBar;
