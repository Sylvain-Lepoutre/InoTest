import { useRef, useEffect, MouseEvent, TouchEvent, useState } from "react";
import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import CardSlider from "./CardSlider";
import CardSliderContent from "./CardSliderContent";
import LibraryNavBar from "@components/sliderComponents/libraryComponents/LibraryNavBar";
import NavCode from "./codeComponents/NavCode";
import LibrarySwitch from "./libraryComponents/LibrarySwitch";
import SwitchCode from "./codeComponents/SwitchCode";
import LibraryForm from "./libraryComponents/LibraryForm";
import FormCode from "./codeComponents/FormCode";
import LibraryArticle from "./libraryComponents/LibraryArticle";
import ArticleCode from "./codeComponents/ArticleCode";
import LibraryImages from "./libraryComponents/LibraryImages";
import ImagesCode from "./codeComponents/ImagesCode";
import LibraryTabs from "./libraryComponents/LibraryTabs";
import TabsCode from "./codeComponents/TabsCode";
import LibraryStepper from "./libraryComponents/LibraryStepper";
import StepperCode from "./codeComponents/StepperCode";
import LibraryModal from "./libraryComponents/LibraryModal";
import ModalCode from "./codeComponents/ModalCode";

import { Composite } from "../Composite";

const ImageSlider = () => {
  const { t } = useTranslation();

  const trackRef = useRef<HTMLElement>(null);
  const prevPercentageRef = useRef<number>(0);
  const mouseDownAtRef = useRef<number>(0);
  const minPercentage = -100;
  const maxPercentage = 0;
  const mobileMaxDelta = window.innerWidth / 0.4; // Vitesse de défilement pour mobile
  const desktopMaxDelta = window.innerWidth / 1; // Vitesse de défilement pour ordinateur
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
      const maxDelta = window.innerWidth < 600 ? mobileMaxDelta : desktopMaxDelta;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(prevPercentageRef.current) + percentage;
      let nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, maxPercentage), minPercentage);

      if (nextPercentage < minPercentage) {
        nextPercentage = minPercentage;
      } else if (nextPercentage > maxPercentage) {
        nextPercentage = maxPercentage;
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
    setActiveSection((prevSection) => {
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
        <Composite orientation="horizontal">
          <CardSlider
            ariaLabel="Déployer le composant navbar"
            cardName="Navbar"
            imageSrc="https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF2aWdhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            onButtonClick={handleButtonClick}
          />
          <CardSlider
            ariaLabel="Déployer le composant image"
            cardName="Image"
            imageSrc="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            onButtonClick={handleButtonClick}
          />
          <CardSlider
            ariaLabel="Déployer le composant article"
            cardName="Article"
            imageSrc="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            onButtonClick={handleButtonClick}
          />
          <CardSlider
            ariaLabel="Déployer le composant stepper"
            cardName="Stepper"
            imageSrc="https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RlcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            onButtonClick={handleButtonClick}
          />
          <CardSlider
            ariaLabel="Déployer le composant form"
            cardName="Form"
            imageSrc="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            onButtonClick={handleButtonClick}
          />
          <CardSlider
            ariaLabel="Déployer le composant switch"
            cardName="Switch"
            imageSrc="https://images.unsplash.com/photo-1644682542938-abaed4287f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN3aXRjaCUyMGJ1dHRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
            onButtonClick={handleButtonClick}
          />
          <CardSlider
            ariaLabel="Déployer le composant tabs"
            cardName="Tabs"
            imageSrc="https://images.unsplash.com/photo-1598744609005-6c45c55c5e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGVhdXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            onButtonClick={handleButtonClick}
          />
          <CardSlider
            ariaLabel="Déployer le composant modal"
            cardName="Modal"
            imageSrc="https://images.unsplash.com/photo-1526398737131-11b73763ecaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2luZG93fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            onButtonClick={handleButtonClick}
          />
        </Composite>
      </section>

      <section className="flex justify-center -mt-32 p-6">
        {activeSection === "Navbar" && (
          <CardSliderContent
            cardName="Navbar"
            libraryComponent={<LibraryNavBar />}
            componentCode={NavCode}
            dash1={t("lnav-1")}
            dash2={t("lnav-2")}
            dash3={t("lnav-3")}
            dash4={t("lnav-4")}
          />
        )}

        {activeSection === "Image" && (
          <CardSliderContent
            cardName="Image"
            libraryComponent={<LibraryImages />}
            componentCode={ImagesCode}
            dash1={t("limg-1")}
            dash2={t("limg-2")}
            dash3={t("limg-3")}
            dash4={t("limg-4")}
          />
        )}

        {activeSection === "Article" && (
          <CardSliderContent
            cardName="Article"
            libraryComponent={<LibraryArticle />}
            componentCode={ArticleCode}
            dash1={t("larticle-1")}
            dash2={t("larticle-2")}
            dash3={t("larticle-3")}
            dash4={t("larticle-4")}
          />
        )}

        {activeSection === "Stepper" && (
          <CardSliderContent
            cardName="Stepper"
            libraryComponent={<LibraryStepper />}
            componentCode={StepperCode}
            dash1={t("lstep-1")}
            dash2={t("lstep-2")}
            dash3={t("lstep-3")}
            dash4={t("lstep-4")}
          />
        )}

        {activeSection === "Form" && (
          <CardSliderContent
            cardName="Form"
            libraryComponent={<LibraryForm />}
            componentCode={FormCode}
            dash1={t("lform-1")}
            dash2={t("lform-2")}
            dash3={t("lform-3")}
            dash4={t("lform-4")}
          />
        )}

        {activeSection === "Switch" && (
          <CardSliderContent
            cardName="Switch"
            libraryComponent={<LibrarySwitch />}
            componentCode={SwitchCode}
            dash1={t("lswitch-1")}
            dash2={t("lswitch-2")}
            dash3={t("lswitch-3")}
            dash4={t("lswitch-4")}
          />
        )}

        {activeSection === "Tabs" && (
          <CardSliderContent
            cardName="Tabs"
            libraryComponent={<LibraryTabs />}
            componentCode={TabsCode}
            dash1={t("ltabs-1")}
            dash2={t("ltabs-2")}
            dash3={t("ltabs-3")}
            dash4={t("ltabs-4")}
          />
        )}

        {activeSection === "Modal" && (
          <CardSliderContent
            cardName="Modal"
            libraryComponent={<LibraryModal />}
            componentCode={ModalCode}
            dash1={t("lmodal-1")}
            dash2={t("lmodal-2")}
            dash3={t("lmodal-3")}
            dash4={t("lmodal-4")}
          />
        )}
      </section>
    </>
  );
};

export default ImageSlider;
