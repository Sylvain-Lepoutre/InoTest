import React, { useState } from "react";
import { Link } from "react-router-dom";

interface FakeStep {
  image?: string;
  text?: string;
}

interface FakeStepperProps {
  container: string;
  href: string;
  style: string;
  style2: string;
  style3: string;
  styledImage: string;
  styledButtons: string;
  styledButtons2: string;
}

const FakeStepper: React.FC = (props: FakeStepperProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: FakeStep[] = [
    { image: "/carousel-1.jpg", text: "InoTest 1" },
    { image: "/carousel-2.jpg", text: "InoTest 2" },
    { image: "/carousel-3.jpg", text: "InoTest 3" },
    { image: "/carousel-4.jpg", text: "InoTest 4" },
  ];

  const handleNext = (array: FakeStep[]) => {
    const nextStep: number = Math.min(activeStep + 1, array.length - 1);
    setActiveStep(nextStep);
  };

  const handlePrevious = () => {
    const previousStep: number = Math.max(activeStep - 1, 0);
    setActiveStep(previousStep);
  };

  return (
    <div className={`${props.container}`}>
      <div className="absolute top-[-10rem]">
        <div className={`${props.style}`} >
          <div className={`${props.style2}`}>
            <img className={`${props.styledImage}`} src={steps[activeStep].image} alt="" />
            <p>
              {steps[activeStep].text}
            </p>
          </div>
          <button             
           onClick={() => {
              handlePrevious();
            }}
            className={`${props.styledButtons}`}
          >
            ⇦
          </button>
          <button
            onClick={() => {
              handleNext(steps);
            }}
            className={`${props.styledButtons2}`}
          >
            ⇨
          </button>
        </div>
      </div>
    </div>
  );
};

export default FakeStepper;
