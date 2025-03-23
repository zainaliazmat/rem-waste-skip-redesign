import React from "react";
import clsx from "clsx"; // Helps merge Tailwind classes

const variants = {
  h1: "text-3xl sm:text-4xl md:text-5xl  font-bold text-white",
  h2: "text-2xl sm:text-3xl md:text-4xl  font-semibold text-white",
  h3: "text-xl sm:text-2xl md:text-3xl  font-semibold text-white",
  h4: "text-lg sm:text-xl md:text-2xl  font-medium text-white",
  body: "text-base sm:text-lg md:text-xl text-white",
  caption: "text-sm sm:text-base text-gray-400",
  small: "text-xs sm:text-sm text-gray-300",
};

const Typography = ({
  as: Tag = "p",
  variant = "body",
  className = "",
  children,
  ...props
}) => {
  return (
    <Tag
      className={clsx("font-[Inter_Tight]", variants[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Typography;
