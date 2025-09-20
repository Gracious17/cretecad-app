import React from "react";

type SectionBlockProps = {
  variant?: "centered" | "default"; 
  showLine?: boolean;
  lineColor?: string;
  text: string;
  highlight?: string;
  highlightColor?: string;
  underline?: boolean;
  highlightHref?: string; 
  className?: string;
};

const SectionBlock = ({
  variant = "default",

  text,
  highlight,
  highlightColor = "text-[#FDA908]",
  underline = true,
  highlightHref,
  className,
}: SectionBlockProps) => {
  const highlightClasses = `${highlightColor} ${
    underline ? "underline decoration-2" : ""
  }`;
  const lines = text.split("\n");

  return (
    <div className={`flex flex-col gap-6 py-4 ${className}`}>
      {/* Text */}
      <p
        className={`body-text text-[#7E8491] leading-7 ${
          variant === "centered" ? "text-center pt-0" : "text-left"
        }`}
      >
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        ))}{" "}
        {highlight &&
          (highlightHref ? (
            <a href={highlightHref} className={highlightClasses}>
              {highlight}
            </a>
          ) : (
            <span className={highlightClasses}>{highlight}</span>
          ))}
      </p>
    </div>
  );
};

export default SectionBlock;
