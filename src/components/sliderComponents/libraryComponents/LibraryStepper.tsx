import React, { useState, useRef, RefObject, useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import useFocus from "../../../hook/useFocus";

interface Step {
  image?: string;
  text?: string;
}

const LibraryStepper = () => {
  const { t } = useTranslation();
  i18n.language;

  const [activeStep, setActiveStep] = useState<number>(0);
  const [buttonVisible, setButtonVisible] = useState(false);
  const buttonRefs: RefObject<HTMLButtonElement>[] = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];

  const steps: Step[] = [
    { image: "/Step-1.jpg", text: t("step-1"), alt: "" },
    { image: "/Step-2.png", text: t("step-2"), alt: "Tutoriel sur la page des composant non accessible" },
    { image: "/Step-3.png", text: t("step-3"), alt: "Tutoriel sur les modals" },
    { image: "/Step-4.png", text: t("step-4"), alt: "Tutoriel sur la page des composant accessible" },
  ];

  const { horizontalFocus } = useFocus(buttonRefs);

  const handleNext = (array: Step[]) => {
    const nextStep: number = Math.min(activeStep + 1, array.length - 1);
    setActiveStep(nextStep);
  };

  const handlePrevious = () => {
    const previousStep: number = Math.max(activeStep - 1, 0);
    setActiveStep(previousStep);
  };

  useEffect(() => {
    const lastStep = activeStep === steps.length - 1;
    setButtonVisible(lastStep);
  }, [activeStep, steps.length]);

  return (
    <>
      <section
        className="flex justify-start align-center md:mt-0 p-6 w-[87vw]"
        role="region"
        aria-roledescription="Fenêtre de tutoriel"
      >
        <div className="mt-20 md:mt-0 flex justify-center align-center flex-col items-center rounded-lg bg-[#151515] w-[60vw] p-4 mx-8 windowStyle">
          <div>
            <img className="md:block hidden" src={steps[activeStep].image} alt={steps[activeStep].alt} />
          </div>
          <p
            className="text-center md:text-justify mt-4 text-white my-[1rem] windowStyle h-[15vh]"
            aria-label={`${activeStep + 1} sur 4`}
          >
            {steps[activeStep].text}
          </p>
          <div className="mt-80 md:mt-0 md:flex-row flex flex-col relative">
            {activeStep !== 0 ? (
              <button
                ref={buttonRefs[0]}
                aria-label="previous step button"
                tabIndex={0}
                type="button"
                onClick={() => {
                  handlePrevious();
                }}
                onKeyDown={() => {
                  horizontalFocus(event);
                }}
                className="px-4 py-2 mx-2 w-[8rem] my-1 rounded bg-white text-black buttonClass2"
              >
                {t("previous")}
              </button>
            ) : (
              ""
            )}
            {activeStep !== steps.length - 1 ? (
              <button
                ref={buttonRefs[1]}
                aria-label="next step button"
                tabIndex={0}
                type="button"
                onClick={() => {
                  handleNext(steps);
                }}
                onKeyDown={() => {
                  horizontalFocus(event);
                }}
                className="px-4 py-2 mx-2 w-[8rem] my-1 rounded bg-white text-black buttonClass2"
              >
                {t("next")}
              </button>
            ) : (
              ""
            )}
            {activeStep === steps.length - 1 ? (
              <div
                ref={buttonRefs[2]}
                aria-label="start button"
                tabIndex={0}
                type="button"
                onKeyDown={() => {
                  horizontalFocus(event);
                }}
                className={`transition-opacity duration-[1000ms] px-4 py-2 mx-2 w-[8rem] my-1 rounded bg-white text-black buttonClass2 ${
                  buttonVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {t("start")}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default LibraryStepper;
