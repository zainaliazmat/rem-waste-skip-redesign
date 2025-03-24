import React from "react";

const NumberRoll = ({ number, className }) => {
  return (
    <div className={`h-6 overflow-hidden relative ${className}`}>
      <div
        className="grid grid-cols-1 transition-transform duration-300"
        style={{ transform: `translateY(-${number * 24 - 24}px)` }}
      >
        {Array.from({ length: 40 }, (_, i) => (
          <div key={i} className="text-center">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberRoll;
