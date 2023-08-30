import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import ArticleCode from "@components/sliderComponents/codeComponents/ArticleCode";
import AccessibilityMenuCode from "@components/sliderComponents/codeComponents/AccessibilityMenuCode";
import CardSlider from "@components/sliderComponents/CardSlider";
import CardSliderContent from "@components/sliderComponents/CardSliderContent";
import DateInput from "@components/sliderComponents/libraryComponents/DatePicker/DateInput";
import DatePickerCode from "@components/sliderComponents/codeComponents/DatePickerCode";
import FaqAccordion from "../sliderComponents/libraryComponents/FaqAccordion";
import FaqAccordionCode from "@components/sliderComponents/codeComponents/FaqAccordionCode";
import FormCode from "@components/sliderComponents/codeComponents/FormCode";
import LibraryArticle from "@components/sliderComponents/libraryComponents/LibraryArticle";
import LibraryForm from "@components/sliderComponents/libraryComponents/LibraryForm";
import LibraryModal from "@components/sliderComponents/libraryComponents/LibraryModal";
import LibraryNavBar from "@components/sliderComponents/libraryComponents/LibraryNavBar";
import LibraryStepper from "@components/sliderComponents/libraryComponents/LibraryStepper";
import LibrarySwitch from "@components/sliderComponents/libraryComponents/LibrarySwitch";
import { Menu } from "@components/sliderComponents/libraryComponents/AccessibilityMenu/Menu";
import ModalCode from "@components/sliderComponents/codeComponents/ModalCode";
import MultiStepForm from "@components/sliderComponents/libraryComponents/MultipleStepForm";
import MultiStepFormCode from "@components/sliderComponents/codeComponents/MultiStepFormCode";
import NavCode from "@components/sliderComponents/codeComponents/NavCode";
import StepperCode from "@components/sliderComponents/codeComponents/StepperCode";
import SwitchCode from "@components/sliderComponents/codeComponents/SwitchCode";
import Tabs from "@components/sliderComponents/libraryComponents/Tabs";
import TabsCode from "@components/sliderComponents/codeComponents/TabsCode";

import question from "../../local-files/accordion.json";
import tabs from "../../local-files/tabs.json";

const GridLayout = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("");

  const handleButtonClick = (section: string) => {
    setActiveSection((prevSection) => {
      if (prevSection === section) {
        return "";
      } else {
        return section;
      }
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSection("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <section
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        <CardSlider
          ariaLabel="Ouvrir le composant navbar"
          cardName="Navbar"
          imageSrc="https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF2aWdhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          ariaLabel="Ouvrir le composant date picker"
          cardName="Date Picker"
          imageSrc="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80"
          onButtonClick={handleButtonClick}
        />

        <CardSlider
          ariaLabel="Ouvrir le composant accordion"
          cardName="Accordion"
          imageSrc="https://images.unsplash.com/photo-1563485572084-eb7405aa3b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNjb3JkaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          onButtonClick={handleButtonClick}
        />

        <CardSlider
          ariaLabel="Ouvrir le composant article"
          cardName="Article"
          imageSrc="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aWNsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          ariaLabel="Ouvrir le composant stepper"
          cardName="Stepper"
          imageSrc="https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RlcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          ariaLabel="Ouvrir le composant form"
          cardName="Form"
          imageSrc="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          ariaLabel="Ouvrir le composant switch"
          cardName="Switch"
          imageSrc="https://images.unsplash.com/photo-1644682542938-abaed4287f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN3aXRjaCUyMGJ1dHRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          ariaLabel="Ouvrir le composant tabs"
          cardName="Tabs"
          imageSrc="https://images.unsplash.com/photo-1598744609005-6c45c55c5e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFibGVhdXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          ariaLabel="Ouvrir le composant Multistep Form"
          cardName="Multistep Form"
          imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          ariaLabel="Ouvrir le composant modal"
          cardName="Modal"
          imageSrc="https://images.unsplash.com/photo-1526398737131-11b73763ecaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2luZG93fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
          onButtonClick={handleButtonClick}
        />
        <CardSlider
          ariaLabel="Ouvrir le composant accessibility menu"
          cardName="Accessibility menu"
          imageSrc="https://images.unsplash.com/photo-1574887427561-d3d5d58c9273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          onButtonClick={handleButtonClick}
        />
      </section>

      <section className="flex justify-center  p-6">
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

        {activeSection === "Date Picker" && (
          <CardSliderContent
            cardName="Date Picker"
            libraryComponent={<DateInput />}
            componentCode={DatePickerCode}
            dash1={t("date-1")}
            dash2={t("date-2")}
            dash3={t("date-3")}
            dash4={t("date-4")}
          />
        )}

        {activeSection === "Accordion" && (
          <CardSliderContent
            cardName="Accordion"
            libraryComponent={
              <FaqAccordion
                questions={question}
                styles={{
                  question: "buttonClass my-1 p-1 rounded font-bold",
                  answer: "buttonClass2 p-1 rounded italic",
                }}
              />
            }
            componentCode={FaqAccordionCode}
            dash1={t("accordion-1")}
            dash2={t("accordion-2")}
            dash3={t("accordion-3")}
            dash4={t("accordion-4")}
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
            libraryComponent={
              <Tabs
                tabs={tabs}
                style={{
                  container: "md:mt-0 p-6 w-[87vw]",
                  childContainer: "flex space-x-4",
                  tabs: "px-4 py-2 font-semibold text-gray-600 rounded-t-lg focus:outline-black",
                  activeTabs: "bg-slate-300",
                  tabpanelContainer: "p-4 bg-gray-400",
                  tabpanels: "bg-gray-500",
                }}
              />
            }
            componentCode={TabsCode}
            dash1={t("ltabs-1")}
            dash2={t("ltabs-2")}
            dash3={t("ltabs-3")}
            dash4={t("ltabs-4")}
          />
        )}

        {activeSection === "Multistep Form" && (
          <CardSliderContent
            cardName="Multistep Form"
            libraryComponent={<MultiStepForm />}
            componentCode={MultiStepFormCode}
            dash1={t("multi-1")}
            dash2={t("multi-2")}
            dash3={t("multi-3")}
            dash4={t("multi-4")}
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
        {activeSection === "Accessibility menu" && (
          <CardSliderContent
            cardName="Accessibility menu"
            libraryComponent={
              <Menu aria-label="Accessibility menu" className="flex justify-center h-[5rem] items-center">
                <Menu.SelectList className="h-[4rem] flex ">
                  <Menu.Select
                    labelStyle="navStyle"
                    label="Change the font size"
                    option="fontSize"
                    className="p-2 mx-[4rem] rounded buttonClass bg-black text-white flex flex-col"
                  >
                    <Menu.Option value="Default">Default</Menu.Option>
                    <Menu.Option value="Large">Large</Menu.Option>
                    <Menu.Option value="ExtraLarge">Extra Large</Menu.Option>
                  </Menu.Select>
                  <Menu.Select
                    labelStyle="navStyle"
                    label="Change the line spacing"
                    option="line"
                    className="p-2 mx-[4rem] rounded buttonClass bg-black text-white flex flex-col"
                  >
                    <Menu.Option value="Default">Default</Menu.Option>
                    <Menu.Option value="Large">Large</Menu.Option>
                    <Menu.Option value="ExtraLarge">Extra Large</Menu.Option>
                  </Menu.Select>
                  <Menu.Select
                    labelStyle="navStyle"
                    label="Display images"
                    option="image"
                    className="p-2 mx-[4rem] rounded buttonClass bg-black text-white flex flex-col"
                  >
                    <Menu.Option value="visible">visible</Menu.Option>
                    <Menu.Option value="hidden">hidden</Menu.Option>
                  </Menu.Select>
                  <Menu.Select
                    labelStyle="navStyle"
                    label="Change the font"
                    option="fontChange"
                    className="p-2 mx-[4rem] rounded buttonClass bg-black text-white flex flex-col"
                  >
                    <Menu.Option value="Basis, arial">Default</Menu.Option>
                    <Menu.Option value="Georgia, serif">Georgia</Menu.Option>
                    <Menu.Option value="fantasy">Fantasy</Menu.Option>
                    <Menu.Option value="cursive">Cursive</Menu.Option>
                  </Menu.Select>
                </Menu.SelectList>
              </Menu>
            }
            componentCode={AccessibilityMenuCode}
            dash1={t("access-1")}
            dash2={t("access-2")}
            dash3={t("access-3")}
            dash4={t("access-4")}
          />
        )}
      </section>
    </>
  );
};

export default GridLayout;
