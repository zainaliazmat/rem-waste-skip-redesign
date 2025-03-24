import React from "react";
import Typography from "../Typography";

const BadgeLabel = ({
  text,
  isSelected,
  position,
  bgColor = "bg-primary",
  textColor,
  image,
}) => {
  // Mapping position to Tailwind classes
  const positionClasses =
    {
      "top-right": "top-4 right-0",
      "bottom-right": "bottom-4 right-0",
      "top-left": "top-4 left-0",
      "bottom-left": "bottom-4 left-0",
    }[position] || "top-4 right-0"; // Default: top-right

  // Determine translation direction based on position
  const translateClasses =
    {
      "top-right": "translate-x-[calc(100%-4px)]",
      "bottom-right": "translate-x-[calc(100%-4px)]",
      "top-left": "-translate-x-[calc(100%-4px)]",
      "bottom-left": "-translate-x-[calc(100%-4px)]",
    }[position] || "translate-x-[calc(100%-4px)]"; // Default: top-right

  return (
    <Typography
      variant="small"
      color={textColor}
      className={`absolute flex items-center gap-1 ${bgColor} ${positionClasses} px-3 py-1 
        rounded-sm font-semibold duration-600 transition-all ${
          isSelected
            ? "translate-x-0"
            : `${translateClasses} group-hover:translate-x-0`
        }`}
    >
      {image && <img src={image} alt={image} className="w-3.5 h-3.5" />}
      {text}
    </Typography>
  );
};

export default BadgeLabel;
