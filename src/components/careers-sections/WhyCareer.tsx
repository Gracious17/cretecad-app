import React from "react";
import GradientBg from "../sections/GradientBg";
import { WhyCard } from "../shared/WhyCard";
import SectionHeader from "../sections/SectionHeader";
import { Button } from "../ui/Button";
import { ArrowRightIcon } from "lucide-react";

const careerData = [
  {
    icon: "/icon.svg",
    description:
      "Be part of a tech-first ecosystem redefining work, education,  and business in Africa.",
  },
  {
    icon: "/icon.svg",
    description:
      "Work across industries: software, education, travel, real  estate, design, AI, and more.",
  },
  {
    icon: "/icon.svg",
    description: " Learn continuously through CRETECADEMY’s evolving programs.",
  },
  {
    icon: "/icon.svg",
    description:
      "Grow with a company that invests in both your skills and your  future.",
  },

  {
    icon: "/icon.svg",
    description:
      "Grow with a company that invests in both your skills and your  future.",
  },
];
const WhyCareer = () => {
  return (
    <GradientBg>
      <div className="px-8">
        <SectionHeader
          lineColor="#FFCC29"
          textClassName="text-white! subsection-heading"
          text="Why Careers at CRETECAD?"
        />
        <WhyCard
          sectionClassName="px-8! bg-transparent!"
          containerClassName="gap-2! flex flex-row! "
          cardClassName="glassmorphism! w-[250px] h-[250px] shadow-none "
          pClassName="text-white "
          contentClassName="items-center"
          showButton={false}
          topTitle={false}
          variant="compact"
          features={careerData}
        />
      </div>
      <div className="flex  justify-center pt-4">
        <Button variant="accent">
            <span className="flex">
                Join Now 
                <ArrowRightIcon/>
            </span>
        </Button>
      </div>
    </GradientBg>
  );
};

export default WhyCareer;
