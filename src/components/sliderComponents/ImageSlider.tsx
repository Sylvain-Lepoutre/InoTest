import { useRef, useEffect, MouseEvent, TouchEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CardSlider from "./CardSlider";
import CardSliderContent from "./CardSliderContent";
import LibraryNavBar from "@components/sliderComponents/libraryComponents/LibraryNavBar";
import NavCode from "./codeComponents/NavCode";

const ImageSlider = () => {

  const { t } = useTranslation();
  i18n.language;
  const trackRef = useRef<HTMLElement>(null);
  const prevPercentageRef = useRef<number>(0);
  const mouseDownAtRef = useRef<number>(0);
  const minPercentage = -100;
  const maxPercentage = 0;
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSection("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    prevPercentageRef.current = -50;

    const handleOnDown = (e: MouseEvent) => {
      if (e.target === trackRef.current || trackRef.current?.contains(e.target as Node)) {
        mouseDownAtRef.current = e.clientX;
      }
    };

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
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF2aWdhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          cardName="nav"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          cardName="Image"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          cardName="Article"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RlcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          cardName="Stepper"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          cardName="form"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1644682542938-abaed4287f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN3aXRjaCUyMGJ1dHRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          cardName="Switch"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          cardName="coming"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1556327070-9661a89d51db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbWluZyUyMHNvb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          cardName="coming"
          onButtonClick={handleButtonClick}
        />
      </section>

      <section className="flex justify-center -mt-32 p-6">
          {activeSection === "nav" && (
            <CardSliderContent
              cardName="nav"
              libraryComponent={<LibraryNavBar />}
              componentCode={NavCode}
              dash1="Utilisation de balises sémantiques : Les balises utilisées, telles que
              &lt;nav&gt;, &lt;ul&gt;, &lt;li&gt;, et &lt;a&gt;, ont des significations spécifiques
              pour les lecteurs d'écran et autres technologies d'assistance. Elles aident les utilisateurs
              à comprendre la structure et la fonctionnalité de la barre de navigation."
              dash2="Contrôles accessibles au clavier : Les utilisateurs qui ne peuvent pas utiliser une souris ou un
              écran tactile peuvent naviguer dans la barre de navigation à l'aide du clavier. Les éléments
              interactifs, tels que les boutons et les liens, sont conçus pour être activés en appuyant sur la
              touche Entrée ouEspace lorsqu'ils sont en surbrillance."
              dash3="Contraste visuel : Les couleurs utilisées pour le texte et l'arrière-plan de la barre
              de navigation ont été choisies pour offrir un bon contraste, facilitant la lisibilité pour
              les personnes ayant une vision réduite ou une sensibilité aux couleurs."
              dash4="Gestion de l'état du menu : Lorsque vous cliquez sur l'icône de hamburger, le menu s'ouvre et
              se ferme. Cette fonctionnalité permet aux utilisateurs de comprendre si le menu est ouvert ou
              fermé, même s'ils ne peuvent pas voir l'icône."
            />
          )}

          {activeSection === "Image" && (
            <div className={`rounded w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="pt-3 text-center text-3xl font-bold">Image</h2>
              </div>
            </div>
          )}

          {activeSection === "Article" && (
            <div className={`rounded w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="pt-3 text-center text-3xl font-bold">Article</h2>
              </div>
            </div>
          )}

          {activeSection === "Stepper" && (
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

          {activeSection === "Switch" && (
            <div className={`rounded w-[95vw] h-[70vh] buttonClass2 relative border-2 border-black backdrop-filter backdrop-blur-[2px] ${activeSection ? 'element' : ''}`}>
              <div className="absolute top-0 left-0 w-full h-full"></div>
              <div className="relative">
                <h2 className="pt-3 text-center text-3xl font-bold">Switch</h2>
              </div>
            </div>
          )}

          {activeSection === "coming" && (
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
