import React from "react";
import { ArrowLeftIcon, ArrowRightIcon, } from "lucide-react";
import SectionHeader from "./sections/SectionHeader";

interface GradientSectionProps {
  title: string;
  onPrev?: () => void;
  onNext?: () => void;
  children?: React.ReactNode; 
  className?: string;
  scrollable?: boolean;
}

export const GradientSection: React.FC<GradientSectionProps> = ({
  title,
  onPrev,
  onNext,
  children,
  className,
  scrollable = false,
}) => {
  return (
    <section
      className={`relative w-full h-[771px] overflow-hidden  ${className ?? ""}`}>
      {/* Background shapes */}
      <div className="relative w-[2179px] h-[2280px] -top-[751px] -left-[349px]">
        <div className="absolute w-[1055px] h-[1040px] top-0 left-0 bg-primaryyellow2 rounded-[527.5px/520px] opacity-20" />
        <div className="absolute w-[1055px] h-[1040px] top-[1240px] left-[1124px] bg-primaryyellow2 rounded-[527.5px/520px] opacity-20" />

        {/* Header + Arrows */}
        <div className="absolute top-[841px] left-[431px] w-[1278px]">
          <div className="flex flex-row items-start gap-2.5">
            <div className="flex items-center justify-between w-full">
                <SectionHeader text={title} lineColor="#000D35"/>

<div className="flex items-center gap-4 mr-4">
                {onPrev && (
<button className="w-[60px] h-[60px] rounded-full border border-[#002287] flex items-center justify-center hover:bg-(--background-light) transition-colors">
              <ArrowLeftIcon width={19} height={14} color="#002287" />
            </button>
                )}
                {onNext && (
                  <button className="w-[60px] h-[60px] rounded-full border border-[#002287] flex items-center justify-center hover:bg-(--background-light) transition-colors">
              <ArrowRightIcon width={18} height={14} color="#002287"  />
            </button>
                )}

            
          </div>

            </div>
          </div>

          {/* Extra content */}
          {children && (
            <div className="mt-6">
              {scrollable ? (
                <div className="overflow-x-auto hide-scrollbar">
                  <div className="flex gap-4">
                    {children}
                  </div>
                </div>
              ) : (
                children
              )}
              </div>
          )}

        </div>

      </div>
    </section>
  );
};
