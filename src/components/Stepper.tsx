import React, { useState, useEffect, useRef } from "react";

interface Step {
  image: string;
  text: string;
}

const Stepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<Array<React.RefObject<HTMLButtonElement>>>([
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ]);

  const steps: Step[] = [
    { image: "", text: "Step 1" },
    { image: "", text: "Step 2" },
    { image: "", text: "Step 3" },
    { image: "", text: "Step 4" },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      key === "ArrowRight" && activeStep < steps.length - 1
        ? (handleNext(), focusButton(1))
        : key === "ArrowLeft" && activeStep > 0
        ? (handlePrevious(), focusButton(0))
        : (key === "Enter" || key === " ") && event.preventDefault();
    };

    stepperRef.current?.addEventListener("keydown", handleKeyDown);

    const cleanUp = () => {
      stepperRef.current?.removeEventListener("keydown", handleKeyDown);
    };

    return () => {
      cleanUp();
    };
  });

  const focusButton = (index: number) => {
    const focusIndex = (index + buttonRef.current.length) % buttonRef.current.length;
    buttonRef.current[focusIndex]?.current?.focus();
  };

  const handleNext = () => {
    const nextStep = Math.min(activeStep + 1, steps.length - 1);
    setActiveStep(nextStep);
    focusButton(nextStep);
  };

  const handlePrevious = () => {
    const previousStep = Math.max(activeStep - 1, 0);
    setActiveStep(previousStep);
    focusButton(previousStep);
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
          ref={buttonRef.current[0]}
          aria-label="previous step button"
          tabIndex={0}
          type="button"
          onClick={handlePrevious}
          className="px-4 py-2 mr-2 rounded bg-black text-white"
        >
          Previous
        </button>
        <button
          ref={buttonRef.current[1]}
          aria-label="next step button"
          tabIndex={0}
          type="button"
          onClick={handleNext}
          className="px-4 py-2 rounded bg-black text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
