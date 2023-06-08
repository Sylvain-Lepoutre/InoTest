import ErrorModalButton from "@components/UI/ErrorModal";
import React, { useState } from "react";

interface FakeStep {
  image?: string;
  text?: string;
}

interface FakeStepperProps {
  container: string;
  href: string;
  style: string;
  style2: string;
  styledImage: string;
  styledButtons: string;
  styledButtons2: string;
}

const FakeStepper: React.FC = (props: FakeStepperProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: FakeStep[] = [
    { image: "https://picsum.photos/id/116/1500/530", text: "lorem ipsum dolor fatem si vis pacem para bellum 1" },
    { image: "https://picsum.photos/id/196/1500/530", text: "lorem ipsum dolor fatem si vis pacem para bellum 2" },
    { image: "https://picsum.photos/id/176/1500/530", text: "lorem ipsum dolor fatem si vis pacem para bellum 3" },
    { image: "https://picsum.photos/id/184/1500/530", text: "lorem ipsum dolor fatem si vis pacem para bellum 4" },
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
      <div className={`${props.style}`}>
        <ErrorModalButton
          buttonText="!"
          modalContent="Buttons have no aria-label or type attribute, and cannot be moved by keyboard keys. And images do not have the following attributes: alt='' aria-hidden='true' role='presentation'."
          style="text-black"
        />
        <div className={`${props.style2}`}>
          <div>
            <img className={`${props.styledImage}`} src={steps[activeStep].image} alt="" />
          </div>
          <div className="mt-6">
            <p className="text">{steps[activeStep].text}</p>
          </div>
        </div>
        <button
          onClick={() => {
            handlePrevious();
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
          onClick={() => {
            handleNext(steps);
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
  );
};

export default FakeStepper;
