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
  const buttonRefs: RefObject<HTMLButtonElement>[] = [useRef<HTMLButtonElement>(null), useRef<HTMLButtonElement>(null)];

  const steps: Step[] = [
    { image: "https://fakeimg.pl/200x100/?retina=1&text=Slide 1&font=noto", text: "Slide 1", alt: "" },
    {
      image: "https://fakeimg.pl/200x100/?retina=1&text=Slide 2&font=noto",
      text: "Slide 2",
      alt: "",
    },
    {
      image: "https://fakeimg.pl/200x100/?retina=1&text=Slide 3&font=noto",
      text: "Slide 3",
      alt: "",
    },
    {
      image: "https://fakeimg.pl/200x100/?retina=1&text=Slide 4&font=noto",
      text: "Slide 4",
      alt: "",
    },
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
        className="flex justify-center align-center md:mt-0 p-6 w-[87vw]"
        role="region"
        aria-roledescription={t("aria-step")}
      >
        <div className="flex justify-center align-center flex-col items-center rounded-lg bg-[#151515] w-[50vw] p-4 mx-8 windowStyle">
          <div>
            <img
              className="md:block"
              src={steps[activeStep].image}
              alt={steps[activeStep].alt}
              role="presentation"
              aria-hidden="true"
            />
          </div>
          <p
            className="text-center md:text-justify mt-4 text-white windowStyle h-fit"
            aria-label={`${activeStep + 1} sur 4`}
          >
            {steps[activeStep].text}
          </p>
          <div className="mt-0 md:mt-0 md:flex-row flex flex-col relative">
            {activeStep !== 0 ? (
              <button
                ref={buttonRefs[0]}
                aria-label={t("aria-previous")}
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
                aria-label={t("aria-next")}
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
              <button
                ref={buttonRefs[2]}
                aria-label={t("aria-start")}
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
              </button>
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
