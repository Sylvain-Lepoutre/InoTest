import { useState, useRef, RefObject } from "react";
import useFocus from "../../hook/useFocus";
import RightModalButton from "@components/UI/RightModal";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

interface TrueStep {
  image?: string;
  text?: string;
}

const Stepper = () => {
  const { t } = useTranslation();
  i18n.language;

  const [activeStep, setActiveStep] = useState<number>(0);
  const buttonRefs: RefObject<HTMLButtonElement>[] = [
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ];

  const steps: TrueStep[] = [
    {
      image:
        "https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      text: "lorem ipsum dolor fatem si vis pacem para bellum 1",
    },
    {
      image:
        "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
      text: "lorem ipsum dolor fatem si vis pacem para bellum 2",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1666879952402-a53a92b5884f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      text: "lorem ipsum dolor fatem si vis pacem para bellum 3",
    },
    {
      image:
        "https://images.unsplash.com/photo-1682695798256-28a674122872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      text: "lorem ipsum dolor fatem si vis pacem para bellum 4",
    },
  ];

  const { horizontalFocus } = useFocus(buttonRefs);

  const handleNext = (array: FakeStep[]) => {
    const nextStep: number = Math.min(activeStep + 1, array.length - 1);
    setActiveStep(nextStep);
  };

  const handlePrevious = () => {
    const previousStep: number = Math.max(activeStep - 1, 0);
    setActiveStep(previousStep);
  };

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <div className="md:w-[40rem] bg-transparent rounded-lg">
          <div className="flex flex-col items-center ">
            <div className="mb-4 flex ">
              <img src={steps[activeStep].image} alt="" className="scale-75 object-cover" />
              <div className="flex items-center justify-between p-4">
                <RightModalButton buttonText="!" modalContent={t("stepper-right")} style="text-black" />
              </div>
            </div>
            <div>
              <p aria-label={`text ${activeStep + 1}`} className="text-center md:-mt-[2rem]">
                {steps[activeStep].text}
              </p>
            </div>
            <RightModalButton
              buttonText="!"
              modalContent={t("stepper-right")}
              style="md:hidden text-black flex items-center justify-between p-4"
            />
          </div>
          <div className="flex justify-between md:-mt-[2rem]">
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
              className="md:place-self-center  flex items-center buttonClass2 justify-center px-4 py-2 rounded-md hover:-translate-x-1 transform md:transition-transform duration-200 md:mr-[20vw]"
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
              className="md:place-self-center  flex items-center buttonClass2 justify-center px-4 py-2 rounded-md hover:translate-x-1 transform md:transition-transform duration-200 md:ml-[20vw]"
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
