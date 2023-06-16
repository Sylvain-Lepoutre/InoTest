import { useState } from "react";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

import "../../App.css";

type FakeNavBarProps = {
  activeStep2: number;
  setActiveStep2: React.Dispatch<React.SetStateAction<number>>;
};

const FakeNavBar: React.FC<Props> = (props: FakeNavBarProps) => {
  const { t } = useTranslation();
  i18n.language;
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full burgerStyle2 transition ease transform duration-300`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handlePreviousPage = () => {
    const previousStep: number = Math.max(props.activeStep2 - 1, 0);
    props.setActiveStep2(previousStep);
  };

  const handleNextPage = () => {
    const nextStep: number = Math.min(props.activeStep2 + 1, 1);
    props.setActiveStep2(nextStep);
  };

  return (
    <>
      <nav className="h-[2rem] flex justify-between px-4 py-8">
        <div className="relative md:hidden flex items-start mr-[-1rem]">
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

          <ul className={`menu right-0 w-36 mr-2 buttonClass2 rounded-lg shadow-md ${isMenuOpen ? "block" : "hidden"}`}>
            <li>
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  handlePreviousPage();
                }}
                className="block px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105"
              >
                {t("nav-home")}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  handleNextPage();
                }}
                className="block px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        <ul className="menu hidden md:flex md:items-end mt-5 windowStyle">
          <li>
            <button
              type="button"
              className="block px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              onClick={handlePreviousPage}
            >
              {t("nav-home")}
            </button>
          </li>
          <li>
            <button
              type="button"
              className="block px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
              onClick={handleNextPage}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default FakeNavBar;
