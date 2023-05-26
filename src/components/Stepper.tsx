import React, { useState, useRef, RefObject } from "react";
import useFocus from "../hook/useFocus";

interface Step {
  image?: string;
  text?: string;
}

interface StepperProps {
  style: string;
  style2: string;
  style3: string;
  styledImage: string;
  styledButtons: string;
}

const Stepper: React.FC = (props: StepperProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const buttonRefs: RefObject<HTMLButtonElement>[] = [useRef<HTMLButtonElement>(null), useRef<HTMLButtonElement>(null)];

  const steps: Step[] = [
    { image: "", text: "Step 1" },
    { image: "", text: "Step 2" },
    { image: "", text: "Step 3" },
    { image: "", text: "Step 4" },
  ];

  const { horizontalFocus, activeFocus, setActiveFocus } = useFocus(buttonRefs);

  const handleNext = (array: Step[]) => {
    const nextStep: number = Math.min(activeStep + 1, array.length - 1);
    const focus: number = Math.min(activeFocus + 1, buttonRefs.length - 1);
    setActiveStep(nextStep);
    setActiveFocus(focus);
  };

  const handlePrevious = () => {
    const previousStep: number = Math.max(activeStep - 1, 0);
    const focus: number = Math.max(activeFocus - 1, 0);
    setActiveStep(previousStep);
    setActiveFocus(focus);
  };

  return (
    <div className={`${props.style}`} role="tabpanel">
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
          Previous
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
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
