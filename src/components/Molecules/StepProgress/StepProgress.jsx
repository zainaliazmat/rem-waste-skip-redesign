import React from "react";
import {
  Postcode,
  ChooseDate,
  Payment,
  PermitCheck,
  SelectSkip,
  WasteType,
} from "../../../assets/StepProgressIcons";

const steps = [
  { label: "Postcode", icon: <Postcode /> },
  { label: "Waste Type", icon: <WasteType /> },
  { label: "Select Skip", icon: <SelectSkip /> },
  { label: "Permit Check", icon: <PermitCheck /> },
  { label: "Choose Date", icon: <ChooseDate /> },
  { label: "Payment", icon: <Payment /> },
];

const StepProgress = ({ currentStep, setCurrentStep }) => {
  const currentStepIndex = steps.findIndex(
    (step) => step.label === currentStep
  );

  return (
    <div className="w-[calc(100%-4px)] lg:w-full flex items-center justify-center mt-2 mb-10 text-white overflow-x-scroll">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <button
            onClick={() =>
              index <= currentStepIndex && setCurrentStep(step.label)
            }
            disabled={index > currentStepIndex}
            className={`flex items-center space-x-2 ${
              index <= currentStepIndex ? "text-primary" : "text-gray-500"
            } disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer`}
          >
            <span className="text-lg">{step.icon}</span>
            <span className="text-sm text-nowrap">{step.label}</span>
          </button>
          {index < steps.length - 1 && (
            <span className="mx-2 text-gray-500">—————</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepProgress;
