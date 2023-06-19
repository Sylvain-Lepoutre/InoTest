import { useRef, useState, RefObject, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import useFocus from "../../hook/useFocus";
import { ThemeContext } from "../../routes/Root";
import FastAccesMenu from "./FastAccesMenu";
import LanguageSelector from "@components/UI/LanguageSelector";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

type Props = {
  href?: string;
  escapeRef?: RefObject<HTMLElement>;
};

const NavBar: React.FC<Props> = ({ escapeRef, href }: Props) => {
  const { t } = useTranslation();
  i18n.language;

  const { theme, toggleTheme } = useContext(ThemeContext) as {
    theme: string;
    toggleTheme: () => void;
  };
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full burgerStyle transition ease transform duration-300`;
  const navRefs: RefObject<HTMLElement>[] = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  navRefs[0] = escapeRef ?? navRefs[0];

  const { horizontalFocus, mouseFocus } = useFocus(navRefs);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="h-[10vh] flex justify-end px-4">
        <div className="relative md:hidden flex mr-[-1rem] z-50">
          <LanguageSelector mouseFocus={mouseFocus} />
          <DarkModeSwitch
            style={{ marginRight: "1rem", marginTop: "1.7rem", marginLeft: "0.3rem" }}
            checked={theme === "dark"}
            onChange={toggleTheme}
            size={30}
          />
          <button
            className="flex flex-col h-12 w-12  mt-5 rounded justify-center"
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
            className={`menu absolute top-16 right-0 w-36 mr-2 bg-white rounded-lg shadow-md ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link onClick={closeMenu} to="/" className="block px-4 py-2">
                {t("nav-home")}
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/about" className="block max-w-full px-4 py-2">
                {t("nav-about")}
              </Link>
            </li>
          </ul>
        </div>

        <ul className="menu hidden md:flex md:items-start mt-5">
          <li>
            <FastAccesMenu href={href} horizontalFocus={horizontalFocus} mouseFocus={mouseFocus} navRef={navRefs[0]} />
          </li>
          <li>
            <Link
              ref={navRefs[1]}
              onKeyDown={(event) => {
                horizontalFocus(event);
              }}
              onClick={() => {
                mouseFocus();
              }}
              to="/"
              className="block px-4 py-2 link link-underline link-underline-black navStyle"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              {t("nav-home")}
            </Link>
          </li>
          <li>
            <Link
              ref={navRefs[2]}
              onKeyDown={(event) => {
                horizontalFocus(event);
              }}
              onClick={() => {
                mouseFocus();
              }}
              to="/about"
              className="block px-4 py-2 link link-underline link-underline-black navStyle"
              aria-current={location.pathname === "/about" ? "page" : undefined}
            >
              {t("nav-about")}
            </Link>
          </li>
          <li aria-label={t("aria-language-button")}>
            <LanguageSelector mouseFocus={mouseFocus} horizontalFocus={horizontalFocus} navRef={navRefs[3]} />
          </li>
          <button
            type="button"
            aria-label={t("aria-dark-mode")}
            ref={navRefs[4]}
            onKeyDown={(event) => {
              horizontalFocus(event);
              event.key === "Enter" || (event.key === "space" && toggleTheme());
            }}
            onClick={(event) => {
              mouseFocus();
              toggleTheme(event);
            }}
          >
            <DarkModeSwitch
              style={{ marginRight: "0.3rem", marginTop: "0.2rem", marginLeft: "0.3rem" }}
              checked={theme === "dark"}
              size={33}
            />
          </button>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
