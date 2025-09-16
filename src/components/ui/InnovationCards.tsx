import React from "react";
type Props = {
  className?: string;
  icons?: React.ReactNode |any;
  paragraph?: string;
};
const InnovationCards = ({ className, paragraph, icons }: Props) => {
  return (
    <div className={`glassmorphism p-4 flex items-center   w-[250px] h-[64px] rounded-[4px] gap-[24px] ${className}`}>
      {icons}
      <div>
        <p className="small-text text-(--text-white)">{paragraph}</p>
      </div>
    </div>
  );
};

export default InnovationCards;
