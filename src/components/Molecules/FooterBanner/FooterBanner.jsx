import React from "react";
import Button from "../../Atoms/Button";
import ArrowRight from "../../../assets/arrowRight.svg";
import NumberRoll from "../../Atoms/NumberRoll";

const FooterBanner = ({ selectedSkip, data, onBack, onContinue }) => {
  const selectedData = data?.find((item) => selectedSkip === item?.id);
  return (
    <div
      className={`fixed bottom-0 left-0 w-full flex justify-center bg-gray-700 text-white ease-in-out duration-600 transition-all  ${
        selectedSkip
          ? "  translate-y-0 visible "
          : " translate-y-full invisible "
      }`}
    >
      <div className="w-full flex items-center justify-between p-4 sm:px-10 2xl:w-[1440px]">
        {/* Pricing Details */}
        <div className="flex items-center space-x-2 text-gray-300">
          <NumberRoll number={selectedData?.size} className=" mr-6" />
          <span className="text-primary font-bold text-2xl">£</span>
          <span className="text-sm ">7 day hire</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <Button onClick={onBack} variant="secondary" text={"Back"} />

          <Button
            onClick={onContinue}
            variant="primary"
            image={ArrowRight}
            text={"Continue"}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
