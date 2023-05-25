import React, { useState, useRef } from "react";

interface Step {
  image: string;
  text: string;
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
  const buttonRefs = [useRef<HTMLButtonElement>(null), useRef<HTMLButtonElement>(null)];

  const steps: Step[] = [
    { image: "", text: "Step 1" },
    { image: "", text: "Step 2" },
    { image: "", text: "Step 3" },
    { image: "", text: "Step 4" },
  ];

  const focusButton = (index: number) => {
    buttonRefs[index]?.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;

    switch (key) {
      case "ArrowRight": {
        focusButton(1);
        break;
      }

      case "ArrowLeft": {
        focusButton(0);
        break;
      }
    }
  };

  const handleNext = () => {
    const nextStep = Math.min(activeStep + 1, steps.length - 1);

    setActiveStep(nextStep);
    focusButton(1);
  };

  const handlePrevious = () => {
    const previousStep = Math.max(activeStep - 1, 0);

    setActiveStep(previousStep);
    focusButton(0);
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
          onClick={handlePrevious}
          onKeyDown={handleKeyDown}
          className={`${props.styledButtons}`}
        >
          Previous
        </button>
        <button
          ref={buttonRefs[1]}
          aria-label="next step button"
          tabIndex={0}
          type="button"
          onClick={handleNext}
          onKeyDown={handleKeyDown}
          className={`${props.styledButtons}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
