import React, { useState, useRef } from "react";

interface Step {
  image: string;
  text: string;
}

const Stepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepperRef = useRef<HTMLDivElement>(null);
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
        if (activeStep < steps.length - 1) {
          focusButton(1);
        }
        break;
      }

      case "ArrowLeft": {
        if (activeStep > 0) {
          focusButton(0);
        }
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
    <div ref={stepperRef} className="flex flex-col items-center" role="tabpanel">
      <div>
        <img src={steps[activeStep].image} alt={`img ${activeStep + 1}`} className="" />
      </div>
      <p className="text-center mt-4" aria-label={`text ${activeStep + 1}`}>
        {steps[activeStep].text}
      </p>
      <div className="mt-4">
        <button
          ref={buttonRefs[0]}
          aria-label="previous step button"
          tabIndex={0}
          type="button"
          onClick={handlePrevious}
          onKeyDown={handleKeyDown}
          className="px-4 py-2 mr-2 rounded bg-black text-white"
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
          className="px-4 py-2 mr-2 rounded bg-black text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
