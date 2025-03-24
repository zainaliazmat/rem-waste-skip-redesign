import React from "react";
import Typography from "../Typography";
import ArrowRight from "../../../assets/arrowRight.svg";

const SkipButton = ({ skipId, selectedSkip }) => {
  const isSelected = selectedSkip === skipId;

  return (
    <button className=" relative overflow-hidden h-16 ">
      <span
        className={`w-full h-full rounded bg-primary absolute bottom-0 left-0 ease-in-out duration-600 transition-all ${
          isSelected ? "" : "translate-y-full group-hover:translate-y-0"
        } `}
      ></span>
      <span
        className={`absolute flex justify-between items-center inset-8 ease-in-out duration-400 transition-all ${
          isSelected ? " translate-x-[calc(100%+50px)] " : ""
        } `}
      >
        <Typography variant="body">Select This Skip</Typography>
        <img src={ArrowRight} alt="arrow-right" className="w-3.5 h-3.5 " />
      </span>
      <span
        className={`absolute flex justify-center items-center inset-8 ease-in-out duration-600 transition-all ${
          isSelected ? " translate-x-0" : " -translate-x-[calc(100%+40px)] "
        } `}
      >
        <Typography variant="body">Selected</Typography>
      </span>
    </button>
  );
};

export default SkipButton;
