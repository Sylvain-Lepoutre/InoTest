import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";

const LibraryNavBar = () => {
  const { t } = useTranslation();
  i18n.language;

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full burgerStyle2 transition ease transform duration-300`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="libraryNav rounded-md h-[10vh] flex justify-center items-center">
        <div className="relative md:hidden flex mr-[-1rem]">
          <button className="flex flex-col h-12 w-12 rounded justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            className={`libraryNav menu absolute top-[5rem] right-0 w-36 mr-2 rounded-lg shadow-md ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <button onClick={closeMenu} className="block px-4 py-2 title">
                {t("nav-home")}
              </button>
            </li>
            <li>
              <button onClick={closeMenu} className="block max-w-full px-4 py-2 title">
                {t("nav-about")}
              </button>
            </li>
          </ul>
        </div>

        <ul className="menu hidden md:flex md:items-start">
          <li>
            <div className="block px-4 py-2" aria-current="page">
              {t("nav-home")}
            </div>
          </li>
          <li>
            <a href="#" className="block px-4 py-2">
              {t("nav-about")}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default LibraryNavBar;
