import React from "react";
import clsx from "clsx"; // Helps merge Tailwind classes

const variants = {
  h1: "text-3xl sm:text-4xl md:text-5xl font-bold",
  h2: "text-2xl sm:text-3xl md:text-4xl font-semibold",
  h3: "text-xl sm:text-2xl md:text-3xl font-semibold",
  h4: "text-lg sm:text-xl md:text-2xl font-medium",
  body: "text-base sm:text-lg md:text-xl",
  caption: "text-sm sm:text-base",
  small: "text-xs sm:text-sm",
};

const Typography = ({
  as: Tag = "p",
  variant = "body",
  className = "",
  children,
  color,
  ...props
}) => {
  const fontColor = color
    ? color
    : variant === "caption" || variant === "small"
    ? "text-gray-400"
    : "text-white";
  return (
    <Tag
      className={clsx(
        "font-[Inter_Tight]",
        variants[variant],
        fontColor,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Typography;
