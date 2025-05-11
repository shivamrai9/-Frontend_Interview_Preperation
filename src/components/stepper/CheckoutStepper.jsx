import React, { useState } from "react";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIscomplete] = useState(false);

  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev === stepsConfig.length) {
        setIscomplete(true);
        return prev;
      }
      return prev + 1;
    });
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;
  return (
    <div>
      <div className="relative p-4 flex justify-between items-center mb-10">
        <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300">
          <div
            className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
            style={{
              width: `${((currentStep - 1) / (stepsConfig.length - 1) )* 100}%`,
            }}
          />
        </div>



        {stepsConfig.map((step, index) => {
          const isDone = currentStep > index + 1 || isComplete;
          const isActive = currentStep === index + 1;
          return (
            <div
              key={step.name}
              className="flex flex-col justify-center items-center flex-1 z-10"
            >
              <div
                className={`w-8 h-8 flex justify-center items-center rounded-full border-2 mb-2 font-bold ${
                  isDone || isComplete ? "bg-blue-600 text-white" : ""
                } 
                 ${isActive ? "border-blue-600" : ""}
                `}
              >
                {index + 1}
              </div>
              <span className="font-bold text-md">{step.name}</span>
            </div>
          );
        })}
      </div>

      <div>{ActiveComponent && <ActiveComponent />}</div>

      {!isComplete && (
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
            onClick={handleNext}
          >
            {currentStep === stepsConfig.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutStepper;
