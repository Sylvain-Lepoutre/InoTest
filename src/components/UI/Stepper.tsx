import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Step {
  image?: string;
  text?: string;
  alt?: string;
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

  const [activeStep, setActiveStep] = useState<number>(0);
  const [assertiveMessage, setAssertiveMessage] = useState("");

  const steps: Step[] = [
    { image: "/Step-1.jpg", text: t("step-1"), alt: "" },
    { image: "/Step-2.png", text: t("step-2"), alt: "Tutoriel sur la page des composant non accessible" },
    { image: "/Step-3.png", text: t("step-3"), alt: "Tutoriel sur les modals" },
    { image: "/Step-4.png", text: t("step-4"), alt: "Tutoriel sur la page des composant accessible" },
  ];

  const handleNext = (array: Step[]) => {
    setAssertiveMessage(`${t("Étape")} ${activeStep + 2} ${t("sur")} 4`);
    const nextStep: number = Math.min(activeStep + 1, array.length - 1);
    setActiveStep(nextStep);
  };

  const handlePrevious = () => {
    setAssertiveMessage(`${t("Étape")} ${activeStep} ${t("sur")} 4`);
    const previousStep: number = Math.max(activeStep - 1, 0);
    setActiveStep(previousStep);
  };

  return (
    <>
      <section className={`${props.container}`} aria-label={`${t("aria-step")}`}>
        <div className={`${props.style}`}>
          <div>
            <img className={`${props.styledImage}`} src={steps[activeStep].image} alt={steps[activeStep].alt} />
          </div>
          <p aria-live="polite" role="status" className={`${props.style2}`}>
            {steps[activeStep].text}
          </p>
          <div className={`${props.style3}`}>
            {activeStep !== 0 ? (
              <button
                aria-label={t("aria-previous")}
                tabIndex={0}
                type="button"
                onClick={() => {
                  handlePrevious();
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
                aria-label={t("aria-next")}
                tabIndex={0}
                type="button"
                onClick={() => {
                  handleNext(steps);
                }}
                className={`${props.styledButtons}`}
              >
                {t("next")}
              </button>
            ) : (
              <Link
                to={`${props.href}`}
                aria-label={t("aria-start")}
                tabIndex={0}
                type="button"
                className={`text-center ${props.styledButtons}`}
              >
                {t("start")}
              </Link>
            )}
          </div>
          <div aria-live="assertive" role="status" className="sr-only">
            {assertiveMessage}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stepper;
