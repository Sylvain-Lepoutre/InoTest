import { useRef, useState, useEffect, type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "react-i18next";

import { Composite } from "../Composite";
import { useLiveRegion } from "../LiveRegion";
import { TrueNavBarButton } from "./TrueNavBarButton";

type Props = {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  tabIds: string[];
  tabpanelId: string;
};

const TrueNavBar = (props: Props) => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full burgerStyle2 transition ease transform duration-300`;

  const ref = useRef<HTMLButtonElement>(null);

  const { setAssertiveMessage } = useLiveRegion();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handlePreviousPage = () => {
    setAssertiveMessage(`page d'accueil de la zone de test`);
    const previousStep: number = props.activeStep - 1;
    props.setActiveStep(previousStep);
  };

  const handleNextPage = () => {
    setAssertiveMessage(`page contact de la zone de test`);
    const nextStep: number = props.activeStep + 1;
    props.setActiveStep(nextStep);
  };

  useEffect(() => {
    ref.current?.focus();
    setAssertiveMessage(`page d'accueil de la zone de test`);
  }, []);

  return (
    <>
      <nav aria-label={`page d'accueil de la zone de test`} className="h-[2rem] flex justify-between px-4 py-8">
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
        <Composite role="tablist">
          <ul className="menu hidden md:flex md:items-end mt-5 windowStyle" role="tablist">
            <li>
              <TrueNavBarButton
                id={props.tabIds[0]}
                ariaControls={props.tabpanelId}
                ariaSelected={props.activeStep === 0 ? true : false}
                onClick={handlePreviousPage}
              >
                {t("nav-home")}
              </TrueNavBarButton>
            </li>
            <li>
              <TrueNavBarButton
                id={props.tabIds[1]}
                ariaControls={props.tabpanelId}
                ariaSelected={props.activeStep === !0 ? true : false}
                onClick={handleNextPage}
              >
                Contact
              </TrueNavBarButton>
            </li>
          </ul>
        </Composite>
      </nav>
    </>
  );
};

export default TrueNavBar;
