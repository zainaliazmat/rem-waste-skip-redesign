import React from "react";
import BadgeLabel from "../../Atoms/BadgeLabel";
import WarningSign from "../../../assets/warningSign.svg";

const SkipTagedImage = ({ size, isSelected, allowed_on_road }) => {
  return (
    <div className=" relative ">
      <BadgeLabel isSelected={isSelected} text={`${size} Yard`} />
      {!allowed_on_road && (
        <BadgeLabel
          isSelected={isSelected}
          text={"Private Property Only"}
          position={"bottom-left"}
          bgColor={"bg-yellow-500"}
          textColor={"text-black"}
          image={WarningSign}
        />
      )}
      <img
        src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
        alt="conainers-image"
      />
    </div>
  );
};

export default SkipTagedImage;
