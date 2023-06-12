import React, { useState, useRef, RefObject, useEffect } from "react";
import useFocus from "../../hook/useFocus";
import { Link } from "react-router-dom";

import { useTranslation } from 'react-i18next';
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
  styledButtons2: string;
}

const Stepper: React.FC = (props: StepperProps) => {
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
    { image: "/Step-1.jpg", text: t('step-1') },
    { image: "/Step-2.png", text: t('step-2') },
    { image: "/Step-3.png", text: t('step-3') },
    { image: "/Step-4.png", text: t('step-4') },
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
      <section className={`${props.container}`} aria-label="tutorial window">
          <div className={`${props.style}`}>
            <div>
              <img className={`${props.styledImage}`} src={steps[activeStep].image} alt={`img ${activeStep + 1}`} />
            </div>
            <p className={`${props.style2}`} aria-label={`text ${activeStep + 1}`}>
              {steps[activeStep].text}
            </p>
            <div className={`${props.style3}`}>
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
                className={`${props.styledButtons}`}
              >
                {t('previous')}
              </button>
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
                className={`${props.styledButtons}`}
              >
                {t('next')}
              </button>
            </div>
            {activeStep === steps.length - 1 ? (
              <Link
                to={`${props.href}`}
                ref={buttonRefs[2]}
                aria-label="start button"
                tabIndex={0}
                type="button"
                onKeyDown={() => {
                  horizontalFocus(event);
                }}
                className={`transition-opacity duration-[1000ms] ${props.styledButtons2} ${
                  buttonVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {t('start')}
              </Link>
            ) : (
              ""
            )}
          </div>
      </section>
    </>
  );
};

export default Stepper;
