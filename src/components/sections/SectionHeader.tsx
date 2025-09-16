import React from "react";
type Props = {
  text?: string;
  className?:string;
  lineColor?:string;
};
const SectionHeader = ({ text,className,lineColor }: Props) => {
  return (
    <div className={`flex flex-col items-start gap-4 mb-4 ${className}`}>
      <div className={`w-15 h-2 `} 
      style={{ backgroundColor: lineColor }}
      />
      <h2 className="section-heading text-(--text-primary)">
        {/* Our Philosophy */}

        {text}
      </h2>
    </div>
  );
};

export default SectionHeader;
