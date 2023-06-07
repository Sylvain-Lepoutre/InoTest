import React, { useState, useRef, RefObject } from "react";
import useFocus from "../../hook/useFocus";

interface TrueStep {
  image?: string;
  text?: string;
}

interface TrueStepperProps {
  container: string;
  href: string;
  style: string;
  style2: string;
  style3: string;
  styledImage: string;
  styledButtons: string;
  styledButtons2: string;
}

const Stepper: React.FC = (props: TrueStepperProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const buttonRefs: RefObject<HTMLButtonElement>[] = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];

  const steps: TrueStep[] = [
    { image: "/carousel-1.avif", text: "InoTest 1" },
    { image: "/carousel-2.avif", text: "InoTest 2" },
    { image: "/carousel-3.avif", text: "InoTest 3" },
    { image: "/carousel-4.avif", text: "InoTest 4" },
  ];

  const { horizontalFocus } = useFocus(buttonRefs);

  const handleNext = (array: FakeStep[]) => {
    setIsTransitioning(true);
    setTimeout(() => {
      const nextStep: number = Math.min(activeStep + 1, array.length - 1);
      setActiveStep(nextStep);
      setIsTransitioning(false);
    }, 900);
  };

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const previousStep: number = Math.max(activeStep - 1, 0);
      setActiveStep(previousStep);
      setIsTransitioning(false);
    }, 900);
  };

  return (
    <>
      <div className={`${props.container}`}>
        <div className="absolute top-[-10rem]">
          <div className={`${props.style}`}>
            <div className={`${props.style2} ${isTransitioning ? "fade-left" : ""}`}>
              <img
                className={`${props.styledImage}`}
                src={steps[activeStep].image}
                alt={`img ${activeStep + 1}`}
                aria-hidden="true"
                role="presentation"
              />
              <p aria-label={`text ${activeStep + 1}`}>{steps[activeStep].text}</p>
            </div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 5l-7 7m0 0l7 7m-7-7h18" />
              </svg>
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
              className={`${props.styledButtons2}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stepper;
