import { useRef, useEffect, MouseEvent, TouchEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import LibraryNavBar from "@components/libraryComponents/LibraryNavBar";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';


const ImageSlider = () => {
  const libraryNavBar = `
  import { useState } from "react";
  import { useLocation } from "react-router-dom";

  const LibraryNavBar = () => {

    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const genericHamburgerLine = \`h-1 w-6 my-1 rounded-full burgerStyle2 transition ease transform duration-300\`;
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  
    return (
      <>
        <nav className="bg-black text-white rounded-md h-[10vh] flex justify-center items-center">
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
  
            <ul className={\`menu absolute top-16 right-0 w-36 mr-2 bg-black text-white rounded-lg shadow-md \${isMenuOpen ? "block" : "hidden"}\`}>
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
                className="block px-4 py-2 link link-underline link-underline text-white"
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Your text here
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 link link-underline link-underline text-white"
                aria-current={location.pathname === "/" ? "page" : undefined}
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
  

  const { t } = useTranslation();
  i18n.language;
  const trackRef = useRef<HTMLElement>(null);
  const prevPercentageRef = useRef<number>(0);
  const mouseDownAtRef = useRef<number>(0);
  const minPercentage = -100;
  const maxPercentage = 0;
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ajoutez votre valeur de breakpoint ici
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSection("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const handleOnDown = (e: MouseEvent) => {
      if (e.target === trackRef.current || trackRef.current?.contains(e.target as Node)) {
        mouseDownAtRef.current = e.clientX;
      }
    };

    prevPercentageRef.current = -50;

    const handleOnUp = () => {
      mouseDownAtRef.current = 0;
      prevPercentageRef.current = parseFloat(trackRef.current?.dataset.percentage || "0");
    };

    const handleOnMove = (e: MouseEvent) => {
      if (mouseDownAtRef.current === 0) return;

      const mouseDelta = parseFloat(mouseDownAtRef.current) - e.clientX;
      const maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(prevPercentageRef.current) + percentage;
      let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, maxPercentage), minPercentage);

      if (nextPercentage < minPercentage || nextPercentage > maxPercentage) {
        const overflow = Math.abs(nextPercentage) - 100;
        nextPercentage = nextPercentage < minPercentage ? maxPercentage + overflow : minPercentage - overflow;
      }

      trackRef.current.dataset.percentage = nextPercentage.toString();

      trackRef.current.style.transform = `translate(${nextPercentage}%, -50%)`;

      const images = trackRef.current?.getElementsByClassName("image");
      for (const image of Array.from(images)) {
        image.setAttribute("style", `object-position: ${100 + nextPercentage}% center`);
      }

      let transitionDuration = "0.3s"; // Durée de transition par défaut (pour les écrans non mobiles)

      if (isMobile) {
        // Personnalisez la durée de transition pour les écrans mobiles
        transitionDuration = "1s"; // Par exemple, une durée de 1 seconde pour un défilement plus lent
      }

      trackRef.current.style.transitionDuration = transitionDuration;

    };

    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", (e: TouchEvent) => handleOnDown(e.touches[0]));
    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", (e: TouchEvent) => handleOnUp(e.touches[0]));
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", (e: TouchEvent) => handleOnMove(e.touches[0]));

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", (e: TouchEvent) => handleOnDown(e.touches[0]));
      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", (e: TouchEvent) => handleOnUp(e.touches[0]));
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", (e: TouchEvent) => handleOnMove(e.touches[0]));
    };
  }, [minPercentage]);

  const handleButtonClick = (section: string) => {
    setActiveSection(prevSection => {
      if (prevSection === section) {
        return "";
      } else {
        return section;
      }
    });
  };
  

  return (
    <>
      <section
        id="image-track"
        data-mouse-down-at="0"
        data-prev-percentage="0"
        ref={trackRef}
        className="flex gap-4vmin left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none overflow-hidden h-fit"
      >
        <div className="flex flex-col gap-2 items-center">
          <div className="w-40 h-56">
            <img
              className="image image-animation w-40 h-56 object-cover object-center rounded-b"
              src="https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF2aWdhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              draggable="false"
              alt="Slider 1"
            />
          </div>
          <button onClick={() => handleButtonClick("nav")} className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer">
            <h2>{t('nav')}</h2>
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-40 h-56">
            <img
              className="image image-animation w-40 h-56 object-cover object-center rounded-t"
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              draggable="false"
              alt="Slider 2"
            />
          </div>
          <button onClick={() => handleButtonClick("image")} className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer">
            <h2>Image</h2>
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-40 h-56">
            <img
              className="image image-animation w-40 h-56 object-cover object-center rounded-t"
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              draggable="false"
              alt="Slider 3"
            />
          </div>
          <button onClick={() => handleButtonClick("article")} className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer">
            <h2>Article</h2>
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-40 h-56">
            <img
              className="image image-animation w-40 h-56 object-cover object-center rounded-t"
              src="https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RlcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              draggable="false"
              alt="Slider 4"
            />
          </div>
          <button onClick={() => handleButtonClick("stepper")} className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer">
            <h2>Stepper</h2>
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-40 h-56">
            <img
              className="image image-animation w-40 h-56 object-cover object-center rounded-t"
              src="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              draggable="false"
              alt="Slider 5"
            />
          </div>
          <button onClick={() => handleButtonClick("form")} className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer">
            <h2>{t('form')}</h2>
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-40 h-56">
            <img
              className="image image-animation w-40 h-56 object-cover object-center rounded-t"
              src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80"
              draggable="false"
              alt="Slider 6"
            />
          </div>
          <button onClick={() => handleButtonClick("coming-soon-1")} className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer">
            <h2>{t('coming')}</h2>
            <p>{t('soon')}</p>
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-40 h-56">
            <img
              className="image image-animation w-40 h-56 object-cover object-center rounded-t"
              src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80"
              draggable="false"
              alt="Slider 7"
            />
          </div>
          <button onClick={() => handleButtonClick("coming-soon-2")} className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer">
            <h2>{t('coming')}</h2>
            <p>{t('soon')}</p>
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="w-40 h-56">
            <img
              className="image image-animation w-40 h-56 object-cover object-center rounded-t"
              src="https://images.unsplash.com/photo-1682686581556-a3f0ee0ed556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              draggable="false"
              alt="Slider 8"
            />
          </div>
          <button onClick={() => handleButtonClick("coming-soon-3")} className="buttonClass3 flex flex-col w-full rounded-b h-[4rem] transition ease-in-out delay-150 duration-300 justify-center items-center cursor-pointer">
            <h2>{t('coming')}</h2>
            <p>{t('soon')}</p>
          </button>
        </div>
      </section>

      <section className="flex justify-center -mt-32 p-6">
          {activeSection === "nav" && (
            <div className={`overflow-auto rounded-lg w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="pt-3 mb-2 text-center text-3xl font-bold title">{t('nav')}</h2>
                <div className="px-6 mb-2">
                  <LibraryNavBar />
                </div>
                <div className="h-[90vh] title px-6">
                  <div className="pb-6">
                    <SyntaxHighlighter language="javascript" style={dracula}>
                      {libraryNavBar}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
          )}
      
          {activeSection === "image" && (
            <div className={`rounded w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="pt-3 text-center text-3xl font-bold">Image</h2>
              </div>
            </div>
          )}
      
          {activeSection === "article" && (
            <div className={`rounded w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="pt-3 text-center text-3xl font-bold">Article</h2>
              </div>
            </div>
          )}
      
          {activeSection === "stepper" && (
            <div className={`rounded w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="pt-3 text-center text-3xl font-bold">Stepper</h2>
              </div>
            </div>
          )}
      
          {activeSection === "form" && (
            <div className={`rounded w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="pt-3 text-center text-3xl font-bold">{t('form')}</h2>
              </div>
            </div>
          )}
      
          {activeSection === "coming-soon-1" && (
            <div className={`flex justify-center items-center rounded w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="text-center text-3xl font-bold">{t('coming')}</h2>
                <p className="text-center text-xl font-bold">{t('soon')}</p>
              </div>
            </div>
          )}
      
          {activeSection === "coming-soon-2" && (
            <div className={`flex justify-center items-center rounded w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="text-center text-3xl font-bold">{t('coming')}</h2>
                <p className="text-center text-xl font-bold">{t('soon')}</p>
              </div>
            </div>
          )}
      
          {activeSection === "coming-soon-3" && (
            <div className={`flex justify-center items-center rounded w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="text-center text-3xl font-bold">{t('coming')}</h2>
                <p className="text-center text-xl font-bold">{t('soon')}</p>
              </div>
            </div>
          )}
      </section>
    </>
  );
};

export default ImageSlider;
