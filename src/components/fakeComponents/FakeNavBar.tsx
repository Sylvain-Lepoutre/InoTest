import { useState } from "react";

import "../../App.css";

interface Props {
  activeStep2: number;
  setActiveStep2: React.Dispatch<React.SetStateAction<number>>;
}

const FakeNavBar: React.FC<Props> = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full burgerStyle2 transition ease transform duration-300`;

  const closeMenu: void = () => {
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
      <nav className="h-[2rem] flex justify-between px-4">
        <div className="relative md:hidden flex items-start mr-[-1rem]">
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
            className={`menu mt-4 right-0 w-36 mr-2 buttonClass2 rounded-lg shadow-md ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <button type="button" onClick={(closeMenu, handlePreviousPage)} className="block px-4 py-2">
                Home
              </button>
            </li>
            <li>
              <button type="button" onClick={(closeMenu, handleNextPage)} className="block px-4 py-2">
                Contact
              </button>
            </li>
          </ul>
        </div>

        <ul className="menu hidden md:flex md:items-start mt-5 windowStyle">
          <li>
            <button type="button" className="block px-4 py-2" onClick={handlePreviousPage}>
              Home
            </button>
          </li>
          <li>
            <button type="button" className="block px-4 py-2" onClick={handleNextPage}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default FakeNavBar;
