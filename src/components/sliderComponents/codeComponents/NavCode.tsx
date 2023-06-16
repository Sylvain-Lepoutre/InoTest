export default `import { useState } from "react";

    const LibraryNavBar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
      const genericHamburgerLine = \`h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300\`;

      const closeMenu = () => {
        setIsMenuOpen(false);
      };

      return (
        <>
          <nav role="menu" className="bg-black rounded-md h-[10vh] flex justify-center items-center">
            <div className="relative md:hidden flex mr-[-1rem]">
              <button
                className="flex flex-col h-12 w-12 rounded justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div
                  className={\`\${genericHamburgerLine} \${isMenuOpen ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-100 group-hover:opacity-100"}\`}
                />
                <div
                  className={\`\${genericHamburgerLine} \${isMenuOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"}\`}
                />
                <div
                  className={\`\${genericHamburgerLine} \${isMenuOpen ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-100 group-hover:opacity-100"}\`}
                />
              </button>

              <ul className={\`menu absolute top-16 right-0 w-36 mr-2 bg-black rounded-lg shadow-md \${isMenuOpen ? "block" : "hidden"}\`}>
                <li>
                  <a onClick={closeMenu} href="#" className="block px-4 py-2 text-white">
                    Your text here
                  </a>
                </li>
                <li>
                  <a onClick={closeMenu} href="#" className="block max-w-full px-4 py-2 text-white">
                    Your text here
                  </a>
                </li>
              </ul>
            </div>

            <ul className="menu hidden md:flex md:items-start">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-white"
                  aria-current="page"
                >
                  Your text here
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-white"
                >
                  Your text here
                </a>
              </li>
            </ul>
          </nav>
        </>
      );
    };

    export default LibraryNavBar;
    `;
