import React from "react";
import Image from "next/image";
import LightbulbIcon from "./icons/LightbulbIcon";
import TechShapeIcon from "./icons/TechShapeIcon";
import InnovationCards from "./ui/InnovationCards";
import SearchBar from "./ui/SearchBar";
import { Button } from "./ui/Button";
import { SearchIcon } from "lucide-react";

type HeroSectionProps = {
  bgImage: string;
  title?: string;
  titleParts?: string;
  highlightedText?: string;
  titleImage?: string;
  titleImageClassName?: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  showIcons?: boolean;
  showSearchBar?: boolean;
};
const HeroSection = ({
  bgImage,
  title,
  highlightedText,
  titleImage,
  titleImageClassName,
  titleParts,
  subtitle,
  children,
  className,
  showIcons = false,
  showSearchBar = false,
}: HeroSectionProps) => {
  return (
    <section
      className={` min-h-screen w-full pt-20  overflow-hidden ${
        className || ""
      }`}
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-10 -mt-4">
            <div className="space-y-4">
              <h1 className="hero-heading text-(--text-primary)">
                <div className="flex ">
                  <span className="  z-20 ">
                    {highlightedText}
                  </span>

                  <span>
                    {titleImage && (
                      <Image
                        src={titleImage || ""}
                        alt="Hero background shape"
                        width={327}
                        height={92}
                        className={`absolute object-contain top-26 left-[405px] ${
                          titleImageClassName || ""
                        }`}
                      />
                    )}
                  </span>
                </div>
                {titleParts}
              </h1>
              <p className="text-xl text-(--text-secondary) max-w-lg">
                {subtitle}
              </p>
            </div>

            {children}
            {showSearchBar && (
              <>
                {/* Search Bar */}
                <SearchBar placeholder="Search  solutions">
                  <Button  className="px-[40px] py-8 gap-8 rounded-full">
                    <SearchIcon />
                  </Button>
                </SearchBar>
              </>
            )}
          </div>
          {showIcons && (
            <>
              {/* Right Content - Overlay Cards */}
              <div className="relative flex flex-col  gap-4 left-20 bottom-20">
                {/* Innovation Card */}
                <InnovationCards
                  icons={
                    <LightbulbIcon width={32} height={32} color="#ffffff" />
                  }
                  paragraph="Reimagining & creating solutions that shape Africa's tomorrow"
                />
                {/* Technology Card */}
                <InnovationCards
                  icons={
                    <TechShapeIcon width={32} height={32} color="#ffffff" />
                  }
                  paragraph="Shaping Africa's Transformation Through Bold Technology"
                  className="ml-65 mt-2 "
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
