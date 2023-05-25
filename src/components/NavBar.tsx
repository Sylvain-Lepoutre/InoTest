import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  title?: string;
};

export default function NavBar({ title }: Props) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const closeMenu: void = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="h-[20rem] flex justify-between px-4">
        <Link
          to="/"
          className="md:mt-[3rem] md:ml-[3rem] mt-5 relative md:text-7xl text-4xl font-bold flex flex-row-reverse items-start lg:text-9xl lg:mt-[7rem] lg:ml-[5rem]"
        >
          <h1>
            {title}
            {location.pathname != "/getstarted" && (
              <p className="scale-50 lg:block absolute top-0 right-0 xl:mt-[-3rem] xl:mr-[-4.5rem] lg:mt-[-3.5rem] lg:mr-[-4.5rem] hidden">
                ©
              </p>
            )}
          </h1>
        </Link>
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
            className={`menu absolute top-16 right-0 w-36 mr-2 bg-white rounded-lg shadow-md ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link onClick={closeMenu} to="/" className="block px-4 py-2">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/about" className="block max-w-full px-4 py-2">
                About us
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/contact" className="block px-4 py-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <ul className="menu hidden md:flex md:items-start mt-5">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 link link-underline link-underline-black text-black"
              {...(location.pathname === "/" ? { "aria-current": "page" } : {})}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-4 py-2 link link-underline link-underline-black text-black"
              {...(location.pathname === "/about" ? { "aria-current": "page" } : {})}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 link link-underline link-underline-black text-black"
              {...(location.pathname === "/contact" ? { "aria-current": "page" } : {})}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
