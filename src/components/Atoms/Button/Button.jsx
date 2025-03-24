import React from "react";

const Button = ({
  onClick,
  text,
  image,
  variant = "primary",
  className = "",
}) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-hover",
    secondary: "bg-gray-700 text-white hover:bg-gray-600",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded flex items-center cursor-pointer space-x-2 ease-in-out duration-400 transition-all ${variants[variant]} ${className}`}
    >
      <span>{text}</span>
      {image && <img src={image} alt={image} className="w-3.5 h-3.5" />}
    </button>
  );
};

export default Button;
