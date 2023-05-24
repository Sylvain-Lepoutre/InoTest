import React, { useState, useEffect, useRef } from "react";

interface Step {
  image: string;
  text: string;
}

const Stepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepperRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    { image: "", text: "Step 1" },
    { image: "", text: "Step 2" },
    { image: "", text: "Step 3" },
    { image: "", text: "Step 4" },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      key === "ArrowRight" ? handleNext() : key === "ArrowLeft" && handlePrevious();
    };

    stepperRef.current?.addEventListener("keydown", handleKeyDown);

    const cleanUp = () => {
      stepperRef.current?.removeEventListener("keydown", handleKeyDown);
    };

    return () => {
      cleanUp();
    };
  });

  const handleNext = () => setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  const handlePrevious = () => setActiveStep((prevStep) => Math.max(prevStep - 1, 0));

  return (
    <div ref={stepperRef} className="flex flex-col items-center" role="tabpanel">
      <div>
        <img src={steps[activeStep].image} alt={`img ${activeStep + 1}`} className="" />
      </div>
      <p className="text-center mt-4">{steps[activeStep].text}</p>
      <div className="mt-4">
        <button
          aria-label="previous step"
          tabIndex={0}
          type="button"
          onClick={handlePrevious}
          className="focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-700 px-4 py-2 mr-2 rounded bg-black text-white"
        >
          Previous
        </button>
        <button
          aria-label="next step"
          tabIndex={0}
          type="button"
          onClick={handleNext}
          className="focus:outline-none focus:border-slate-700 focus:ring-2 focus:ring-slate-700 px-4 py-2 rounded bg-black text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stepper;
