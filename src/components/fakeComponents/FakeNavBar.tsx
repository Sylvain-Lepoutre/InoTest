import { constants } from "http2";
import { useState } from "react";

import "../../App.css";

const FakeNavBar:React.FC<Props> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full burgerStyle2 transition ease transform duration-300`;

  const closeMenu: void = () => {
    setIsMenuOpen(false);
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
            className={`menu mt-4 right-0 w-36 mr-2 burgerStyle rounded-lg shadow-md ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <p onClick={closeMenu} className="block px-4 py-2">
                Home
              </p>
            </li>
            <li>
              <p onClick={closeMenu} className="block px-4 py-2">
                Contact
              </p>
            </li>
          </ul>
        </div>

        <ul className="menu hidden md:flex md:items-start mt-5 windowStyle">
          <li>
            <p
              className="block px-4 py-2"
            >
              Home
            </p>
          </li>
          <li>
            <p
              className="block px-4 py-2"
            >
              Contact
            </p>
          </li>
        </ul>
      </nav>
    </>
  );
};


export default FakeNavBar;