import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

export interface ProductCardProps {
  title: string;
  description: string;
  gradient: string;
  barWidth: string;
  barColor?: string;
  imageUrl?: string;
  onLearnMore?: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  gradient,
  barWidth,
  barColor = "bg-accent-yellow",
  imageUrl = "/sectionlogo.png",
  onLearnMore,
}) => {
  return (
    <Card className=" w-[300px] h-[350px] flex-shrink-0 bg-white border-[1.5px] border-[#e3e8f280] rounded hover:shadow-lg shadow-gray-500 z-20 transition-shadow">
      <CardContent className="p-0 h-full">
        <div className="relative w-full h-[200px] overflow-hidden">
          <div
            className="relative w-[298px] h-[298px] -top-20 left-px bg-cover bg-[50%_50%]"          > 

          <div className="absolute inset-0 h-[200px] mt-12">
            <Image

   src={imageUrl}
   fill
    alt={title}
            />
          </div>
            <div
              className="flex flex-col w-[284px] items-start gap-[4px] p-[10px] relative top-[210px] left-[8px] rounded-[8px] h-[58px]"
              style={{ background: gradient }}
            >
              <h3 className="relative text-subsection-header text-white font-semibold leading-[22px] ">
                {title}
              </h3>
              <div
                className={`relative h-1 ${barColor} rounded-[4.08px] ${barWidth}`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[130px] items-start gap-[10px] p-[10px]">
          <p className="relative self-stretch h-[72px] mt-[-1.00px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[#000d35b2] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
            {description}
          </p>
          <div className="flex items-center justify-end gap-2.5 relative self-stretch w-full">
            <button
              className="relative w-fit mt-[-1.00px] [font-family:'Segoe_UI-Regular',Helvetica] font-[400] text-primary-dark text-[13px] tracking-[0] leading-[13px] cursor-pointer hover:opacity-80 transition-opacity"
              onClick={onLearnMore}
              type="button"
            >
              <span className="leading-[19.5px] underline">Learn more</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
