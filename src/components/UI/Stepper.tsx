import React, { useState, useRef, RefObject, useEffect } from "react";
import useFocus from "../../hook/useFocus";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

interface Step {
  image?: string;
  text?: string;
}

interface StepperProps {
  container: string;
  href: string;
  style: string;
  style2: string;
  style3: string;
  styledImage: string;
  styledButtons: string;
}

const Stepper: React.FC = (props: StepperProps) => {
  const { t } = useTranslation();
  i18n.language;

  const [activeStep, setActiveStep] = useState<number>(0);
  const [buttonVisible, setButtonVisible] = useState(false);
  const buttonRefs: RefObject<HTMLButtonElement>[] = [useRef<HTMLButtonElement>(null), useRef<HTMLButtonElement>(null)];

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
      <section className={`${props.container}`} role="region" aria-roledescription={t("aria-step")}>
        <div className={`${props.style}`}>
          <div>
            <img className={`${props.styledImage}`} src={steps[activeStep].image} alt={steps[activeStep].alt} />
          </div>
          <p className={`${props.style2}`}>{steps[activeStep].text}</p>
          <div className={`${props.style3}`}>
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
                className={`${props.styledButtons}`}
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
                className={`${props.styledButtons}`}
              >
                {t("next")}
              </button>
            ) : (
              <Link
                to={`${props.href}`}
                ref={buttonRefs[1]}
                aria-label={t("aria-start")}
                tabIndex={0}
                type="button"
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    buttonRefs[1].current?.click();
                  }
                  horizontalFocus(event);
                }}
                className={`transition-opacity duration-[1000ms] text-center ${props.styledButtons} ${
                  buttonVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {t("start")}
              </Link>
            )}
          </div>
          <div aria-live="polite" role="status" className="sr-only">
            {t("Étape")} {activeStep + 1} {t("sur")} 4
          </div>
        </div>
      </section>
    </>
  );
};

export default Stepper;
