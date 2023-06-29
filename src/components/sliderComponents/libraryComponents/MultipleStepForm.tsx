import { useEffect, useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [ariaMessage, setAriaMessage] = useState<string>(`étape ${step}`);

  const handleNext = (): void => {
    event.preventDefault();
    if (step === 1 && name.trim() === "") {
      setNameError("Please enter your name");
      return;
    } else if (step === 2 && email.trim() === "") {
      setEmailError("Please enter your email");
      return;
    } else if (step === 2 && !email.includes("@")) {
      setEmailError("Enter a valid email");
      return;
    }

    setNameError("");
    setEmailError("");
    setStep(step + 1);
  };

  const handlePrevious = () => {
    event.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = () => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    setEmail("");
    setName("");
    setStep(1);
  };

  useEffect(() => {
    setAriaMessage(`step ${step}`);
  }, [step]);

  useEffect(() => {
    console.log(ariaMessage);
  }, [ariaMessage]);

  return (
    <form className="max-w-lg mx-auto bg-white p-4 shadow" tabIndex={0}>
      {step === 1 && (
        <div className="h-full">
          <h2 className="text-lg font-bold mb-4">Name</h2>
          <label className="sr-only" htmlFor="nameInput">
            Enter your name:
          </label>
          <input
            type="text"
            id="nameInput"
            placeholder="Enter your name"
            className="border border-gray-300 p-2 rounded mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={nameError ? "true" : "false"}
          />
          {nameError && <p className="text-red-500 mb-4 text-sm">{nameError}</p>}
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="h-full">
          <h2 className="text-lg font-bold mb-4">Email</h2>
          <label className="sr-only" htmlFor="emailInput">
            Enter your email:
          </label>
          <input
            tabIndex={0}
            type="email"
            id="emailInput"
            placeholder="Enter your email"
            className="border border-gray-300 p-2 rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={emailError ? "true" : "false"}
          />
          {emailError && <p className="text-red-500 mb-4 text-sm">{emailError}</p>}
          <div>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="h-full">
          <h2 className="text-lg font-bold mb-4">Step 3</h2>
          <p className="mb-2 h-12">Thank you for your time!</p>
          <div>
            <button
              tabIndex={0}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              aria-label="submit"
              onClick={handleSubmit}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
      <div className="sr-only" aria-live="assertive" role="status">
        {ariaMessage}
      </div>
    </form>
  );
};

export default MultiStepForm;
