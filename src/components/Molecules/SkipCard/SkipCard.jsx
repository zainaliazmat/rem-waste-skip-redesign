import React from "react";

import SkipButton from "../../Atoms/SkipButton";
import Typography from "../../Atoms/Typography";
import SkipTagedImage from "../../Molecules/SkipTagedImage";

const SkipCard = ({ data, selectedSkip, setSelectedSkip }) => {
  const { id, size, hire_period_days, price_before_vat, vat, allowed_on_road } =
    data;
  const isSelected = selectedSkip === id;

  return (
    <div
      className={`flex flex-col w-full group bg-gray-700 duration-600 transition-all ${
        isSelected ? " ring-3 ring-primary " : ""
      } overflow-hidden rounded-lg max-w-[500px] mx-auto cursor-pointer`}
      onClick={() => {
        setSelectedSkip(id);
      }}
    >
      <SkipTagedImage
        size={size}
        isSelected={isSelected}
        allowed_on_road={allowed_on_road}
      />
      <div className="flex justify-between items-center py-3 px-6 lg:px-8 lg:py-5">
        <div>
          <Typography variant="h4">{`${size} Yard Skip`}</Typography>
          <Typography variant="caption">{`${hire_period_days} days hire period`}</Typography>
        </div>
        <div className="flex">
          <Typography variant="caption" className="mr-2">
            per week
          </Typography>
          <Typography variant="h2" className="mr-1">
            {price_before_vat + vat}
          </Typography>
          <Typography variant="body">£</Typography>
        </div>
      </div>
      <div className=" border border-gray-500" />
      <SkipButton skipId={id} selectedSkip={selectedSkip} />
    </div>
  );
};

export default SkipCard;
