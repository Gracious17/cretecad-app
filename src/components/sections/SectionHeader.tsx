

import React from "react";

type Props = {
  text?: string;
  className?: string;
  lineColor?: string;
  variant?: "default" | "centered";
  lineWidth?: string;
  lineHeight?: string;
  headerLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textClassName?: string;
  containerPadding?: string;
  subtitle?:string;
  showLine?:boolean;
};

const SectionHeader = ({ 
  text, 
  className, 
  lineColor = "#FFA1F2",
  variant = "default",
  lineWidth,
  lineHeight,
  headerLevel = "h2",
  textClassName,
  containerPadding,
  subtitle,
  showLine=true
}: Props) => {
  
  //  styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case "centered":
        return {
          container: "flex flex-col items-center gap-2.5 relative w-full",
          line: "w-[60px] h-[7px]",
          text: "section-heading text-primary-dark text-center",
          padding: "px-[210px] py-0"
        };
      case "default":
      default:
        return {
          container: "flex flex-col items-start gap-4 mb-4",
          line: "w-15 h-2",
          text: "section-heading text-(--text-primary)",
          padding: ""
        };
    }
  };

  const styles = getVariantStyles();
  
  const HeaderElement = headerLevel;
  
  return (
    <div className={`${styles.container} ${containerPadding || styles.padding} ${className ?? ""}`}>
      {showLine &&(


      <div 
        className={lineWidth && lineHeight ? `${lineWidth} ${lineHeight}` : styles.line} 
        style={{ backgroundColor: lineColor }} 
      />
      )}
      <HeaderElement className={textClassName || styles.text}>
        {text}
      </HeaderElement>
{subtitle &&(
  <p className="body-text text-[24px]">
{subtitle}
  </p>
)

}

    </div>
  );
};

export default SectionHeader;
