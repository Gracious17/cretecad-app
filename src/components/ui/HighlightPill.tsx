import React from "react";

type HighlightPillProps = {
  width?: string;
  height?: string;
  gradient?: string;
  className?: string;
};

const HighlightPill = ({
  width = "w-[52px]",
  height = "h-[7px]",
  gradient = "bg-[linear-gradient(180deg,rgba(255,204,41,1)_0%,rgba(253,169,8,1)_100%)]",
  className = "",
}: HighlightPillProps) => {
  return (
    <div
      className={`absolute left-1/2 -bottom-1 -translate-x-1/2 ${width} ${height} overflow-hidden ${className}`}
    >
      <div className={`w-full h-[15px] rounded-[26px/7.5px] ${gradient}`} />
    </div>
  );
};

export default HighlightPill;
