import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../routes/Root";
import LanguageSelector from "@components/UI/LanguageSelector";
import FastAccesMenu from "./FastAccesMenu";
import { Menu } from "@components/sliderComponents/libraryComponents/AccessibilityMenu/Menu";

type Props = {
  href?: string;
};

const NavBar = ({ href }: Props) => {
  const { t } = useTranslation();

  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full burgerStyle transition ease transform duration-300`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="h-[10vh] flex justify-end px-4">
        
        <div className="relative md:hidden flex mr-[-1rem] z-50">
          <LanguageSelector />
          <button aria-label={t("aria-dark-mode")} type="button">
            <DarkModeSwitch
              style={{ marginRight: "1rem", marginLeft: "0.3rem" }}
              checked={theme === "dark"}
              onChange={toggleTheme}
              size={30}
            />
          </button>
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
            <FastAccesMenu href={href} />
          </li>
          <li>
            <Link
              to="/"
              className="block px-4 py-2 link link-underline link-underline-black navStyle"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              {t("nav-home")}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-4 py-2 link link-underline link-underline-black navStyle"
              aria-current={location.pathname === "/about" ? "page" : undefined}
            >
              {t("nav-about")}
            </Link>
          </li>
          <li aria-label={t("aria-language-button")}>
            <LanguageSelector />
          </li>
          <button aria-label={t("aria-dark-mode")} type="button">
            <DarkModeSwitch
              style={{ marginRight: "0.3rem", marginTop: "0.2rem", marginLeft: "0.3rem" }}
              checked={theme === "dark"}
              onChange={toggleTheme}
              size={33}
            />
          </button>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
