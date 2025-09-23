import React from "react";
import { ArrowRight, ChevronUp } from "lucide-react";
import { Button } from "./Button";
import { cn } from "../../lib/utils";

interface DropdownProps {
  title: string;
  description: string;
  howWeScaledIt: string;
  ctaText: string;
  ctaLink: string;
  headerBackground: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  description,
  howWeScaledIt,
  ctaText,
  ctaLink,
  headerBackground,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full bg-[#F8F9FA]  shadow-[0_4px_12px_rgba(0,0,0,0.1)] z-10 overflow-hidden transition-all duration-300 ease-in-out",
        isOpen ? "opacity-100 " : "opacity-0 max-h-0"
      )}
    >
      <div className="pt-2 p-4">
        <div
          className="flex items-center justify-between p-3 rounded-lg mb-4"
          style={{ background: headerBackground }}
        >
          <h3 className="font-header-h2-small-24px-bold font-[number:var(--header-h2-small-24px-bold-font-weight)] text-white text-[length:var(--header-h2-small-24px-bold-font-size)] tracking-[var(--header-h2-small-24px-bold-letter-spacing)] leading-[var(--header-h2-small-24px-bold-line-height)] [font-style:var(--header-h2-small-24px-bold-font-style)]">
            {title}
          </h3>
          <ChevronUp
            className="w-8 h-8 text-white cursor-pointer"
            onClick={onToggle}
          />
        </div>

        <div className="space-y-4 pb-16 bg-[#00228733] px-2">
          <div>
            <h4 className="subsection-heading  text-[#000D35] mb-2">
              Description
            </h4>
            <p className="text-[#000D35B2] text-[18.67px] font-[400] text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div>
            <h4 className="subsection-heading text-[#000D35]  mb-2">
              How we scaled it
            </h4>
            <p className="text-[#000D35B2] text-[18.67px] font-[400] text-sm leading-relaxed">
              {howWeScaledIt}
            </p>
          </div>

          <Button
            variant="primary"
            className=" px-10 body-text  py-7     float-end"
            onClick={() => window.open(ctaLink, "_blank")}
          >
            <span className="flex items-center gap-2">
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
