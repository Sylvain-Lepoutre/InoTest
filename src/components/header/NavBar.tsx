import { useRef, useState, RefObject, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import useFocus from "../../hook/useFocus";
import { ThemeContext } from "../../routes/Root";
import FastAccesMenu from "./FastAccesMenu";
import LanguageSelector from "@components/UI/LanguageSelector";

import { useTranslation } from 'react-i18next';
import i18n from "../../../i18n";

type Props = {
  href: string;
  title?: string;
  href?: string;
  escapeRef?: RefObject<HTMLElement>;
};

const NavBar: React.FC<Props> = ({ title, escapeRef, href }: Props) => {
  const { t } = useTranslation();
  console.log(i18n.language);

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

  const { horizontalFocus } = useFocus(navRefs);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter') {
      buttonRef.current?.click();
    }
  };

  return (
    <>
      <nav className="h-[5rem] flex justify-between px-4">
        <div className="md:mt-[3rem] md:ml-[3rem] mt-5 relative md:text-7xl text-4xl font-bold flex flex-row-reverse items-start lg:text-9xl lg:mt-[7rem] lg:ml-[5rem]">
          <h1 className="title">
            {title}
            {location.pathname !== "/getstarted" &&
              location.pathname !== "/path1" &&
              location.pathname !== "/path2" && (
                <p className="scale-50 lg:block absolute top-0 right-0 xl:mt-[-3rem] xl:mr-[-4.5rem] lg:mt-[-3.5rem] lg:mr-[-4.5rem] hidden">
                  ©
                </p>
              )}
          </h1>
        </div>
        <div className="relative md:hidden flex items-start mr-[-1rem]">
          <LanguageSelector />
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
              {t('nav-home')}
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/about" className="block max-w-full px-4 py-2">
              {t('nav-about')}
              </Link>
            </li>
          </ul>
        </div>

        <ul className="menu hidden md:flex md:items-start mt-5">
          <li>
            <FastAccesMenu href={href} horizontalFocus={horizontalFocus} navRef={navRefs[0]} />
          </li>
          <li>
            <Link
              ref={navRefs[1]}
              onKeyDown={(event) => {
                horizontalFocus(event);
              }}
              to="/"
              className="block px-4 py-2 link link-underline link-underline-black navStyle"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              {t('nav-home')}
            </Link>
          </li>
          <li>
            <Link
              ref={navRefs[2]}
              onKeyDown={(event) => {
                horizontalFocus(event);
              }}
              to="/about"
              className="block px-4 py-2 link link-underline link-underline-black navStyle"
              aria-current={location.pathname === "/about" ? "page" : undefined}
            >
              {t('nav-about')}
            </Link>
          </li>
          <button
            type="button"
            aria-label="language button"
            onKeyDown={(event) => {
              horizontalFocus(event);
            }}
          >
            <LanguageSelector horizontalFocus={horizontalFocus} navRef={navRefs[3]} />
          </button>
          <button
            type="button"
            aria-label="dark mode button"
            ref={navRefs[4]}
            onKeyDown={(event) => {
              horizontalFocus(event);
              event.key === "Enter" || (event.key === "space" && toggleTheme());
            }}
            onClick={toggleTheme}
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
