import { useRef, useEffect, MouseEvent, TouchEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
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

import { isMobile } from "react-device-detect";

const ImageSlider = () => {
  const { t } = useTranslation();
  i18n.language;
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
      const maxDelta = isMobile ? mobileMaxDelta : desktopMaxDelta;

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
  }, [minPercentage, isMobile]);

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
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF2aWdhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          cardName="Navbar"
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
          cardName="Form"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1644682542938-abaed4287f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN3aXRjaCUyMGJ1dHRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          cardName="Switch"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1598744609005-6c45c55c5e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGVhdXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          cardName="Tabs"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          imageSrc="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          cardName="Coming soon"
          onButtonClick={handleButtonClick}
        />
      </section>

      <section className="flex justify-center -mt-32 p-6">
        {activeSection === "Navbar" && (
          <CardSliderContent
            cardName="Navbar"
            libraryComponent={<LibraryNavBar />}
            componentCode={NavCode}
            dash1="Utilisation de balises sémantiques : Les balises utilisées, telles que &lt;nav&gt;, &lt;ul&gt;, &lt;li&gt;, et &lt;a&gt;, ont des significations spécifiques pour les lecteurs d'écran et autres technologies d'assistance. Elles aident les utilisateurs à comprendre la structure et la fonctionnalité de la barre de navigation."
            dash2="Contrôles accessibles au clavier : Les utilisateurs qui ne peuvent pas utiliser une souris ou un écran tactile peuvent naviguer dans la barre de navigation à l'aide du clavier. Les éléments interactifs, tels que les boutons et les liens, sont conçus pour être activés en appuyant sur la touche Entrée ouEspace lorsqu'ils sont en surbrillance."
            dash3="Contraste visuel : Les couleurs utilisées pour le texte et l'arrière-plan de la barre de navigation ont été choisies pour offrir un bon contraste, facilitant la lisibilité pour les personnes ayant une vision réduite ou une sensibilité aux couleurs."
            dash4="Gestion de l'état du menu : Lorsque vous cliquez sur l'icône de hamburger, le menu s'ouvre et se ferme. Cette fonctionnalité permet aux utilisateurs de comprendre si le menu est ouvert ou fermé, même s'ils ne peuvent pas voir l'icône."
          />
        )}

        {activeSection === "Image" && (
          <CardSliderContent cardName="Image" libraryComponent={<LibraryImages />} componentCode={ImagesCode} />
        )}

        {activeSection === "Article" && (
          <CardSliderContent
            cardName="Article"
            libraryComponent={<LibraryArticle />}
            componentCode={ArticleCode}
            dash1="Les balises HTML sont utilisées de manière appropriée : Le code utilise des balises sémantiques telles que <article>, <section>, <h1>, <h2>, <p>, etc., ce qui améliore l'accessibilité pour les lecteurs d'écran et facilite la compréhension de la structure de la page pour tous les utilisateurs."
            dash2="Les attributs alt et aria-hidden sont utilisés pour les images : Les images incluses dans le code ont des attributs alt et aria-hidden définis, ce qui permet aux lecteurs d'écran de comprendre le contenu des images et de les ignorer lorsqu'elles ne sont pas pertinentes pour le contexte."
            dash3="Les classes CSS sont utilisées de manière adaptative : Le code utilise des classes CSS adaptatives, telles que md:mt-0, sm:px-6, lg:px-8, etc., qui permettent de modifier le style en fonction de la taille de l'écran. Cela garantit que le contenu reste lisible et bien disposé sur différents appareils et résolutions d'écran."
            dash4="La structure de lecture est cohérente : Le code suit une structure de lecture logique avec des balises appropriées pour les titres, les sous-titres et les paragraphes. Cela facilite la navigation et la compréhension du contenu pour les utilisateurs qui dépendent de la structure de la page pour accéder à l'information."
          />
        )}

        {activeSection === "Stepper" && (
          <CardSliderContent cardName="Stepper" libraryComponent={<LibraryNavBar />} componentCode={NavCode} />
        )}

        {activeSection === "Form" && (
          <CardSliderContent
            cardName="Form"
            libraryComponent={<LibraryForm />}
            componentCode={FormCode}
            dash1="Les éléments de formulaire (balises &lt;input&gt;, &lt;textarea&gt;, &lt;select&gt;, etc.) sont tous associés à des étiquettes (&lt;label&gt;) appropriées à l'aide de l'attribut htmlFor (ou for en HTML), ce qui permet aux lecteurs d'écran de les associer correctement et d'annoncer l'étiquette correspondante lorsqu'un élément de formulaire reçoit le focus."
            dash2="Les étiquettes sont écrites de manière descriptive, ce qui facilite la compréhension pour les utilisateurs ayant des difficultés de lecture ou de vision."
            dash3="Les contrôles de formulaire ont des styles et des attributs (aria-*) appropriés pour fournir des indices visuels et contextuels aux utilisateurs, en particulier ceux qui utilisent des lecteurs d'écran."
            dash4="Les boutons ont des textes explicites et des classes CSS appropriées pour indiquer leur rôle (par exemple, le bouton 'send' indique clairement son objectif)."
          />
        )}

        {activeSection === "Switch" && (
          <CardSliderContent
            cardName="Switch"
            libraryComponent={<LibrarySwitch />}
            componentCode={SwitchCode}
            dash1="Utilisation appropriée des rôles et des attributs ARIA : Le bouton dans ce code utilise les attributs ARIA (Accessible Rich Internet Applications) pour améliorer l'accessibilité. L'attribut role='switch' indique que le bouton agit comme un interrupteur. L'attribut aria-checked={isChecked} est utilisé pour indiquer l'état actuel de l'interrupteur, en fonction de la valeur de isChecked."
            dash2="Gestion du clavier : L'événement onKeyDown est utilisé pour détecter les touches du clavier pressées par l'utilisateur. Si l'utilisateur appuie sur la touche Enter ou sur la touche Espace, la fonction handleSwitch est appelée pour changer l'état de l'interrupteur."
            dash3="Texte alternatif : L'attribut aria-label fournit un texte alternatif pour l'interrupteur, ce qui est utile pour les lecteurs d'écran ou toute autre technologie d'assistance."
            dash4="Styles visuels distincts pour les états : Les classes CSS conditionnelles sont utilisées pour appliquer des styles visuels distincts en fonction de l'état de l'interrupteur. Cela permet aux utilisateurs ayant une déficience visuelle de distinguer clairement l'état actuel de l'interrupteur."
          />
        )}

        {activeSection === "Tabs" && (
          <CardSliderContent cardName="Tabs" libraryComponent={<LibraryNavBar />} componentCode={NavCode} />
        )}

        {activeSection === "Coming soon" && (
          <CardSliderContent cardName="Coming soon" libraryComponent={<LibraryNavBar />} componentCode={NavCode} />
        )}
      </section>
    </>
  );
};

export default ImageSlider;
