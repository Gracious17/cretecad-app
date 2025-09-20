import React from "react";
import { Button } from "../ui/Button"
import SectionHeader from "../sections/SectionHeader";
import { WhyCard } from "../shared/WhyCard";
import SectionBlock from "../sections/SectionBlock";

const partnershipFeatures = [
  {
    icon: "/icon-1.svg",
    title: "Revenue Growth",
    description: "Earn more through our platforms",
  },
  {
    icon: "/icon-2.svg",
    title: "Innovation Access",
    description: "Leverage our tech, AI, and business systems",
  },
  {
    icon: "/icon.svg",
    title: "Shared Success",
    description: "Cheers to long-term win–win model",
  },
];

export const WhyPartnerWithUsSection = () => {
  return (
    <section className="flex flex-col w-full items-center   py-12  gray-gradient-section ">
<SectionHeader
text="Why Partner with Us?"
variant="centered"
/>
<SectionBlock
variant="centered"
text={`We believe in shared growth. CRETECAD empowers  individuals, businesses, and institutions to \n innovate, scale, and  thrive through `}
highlight="collaboration"
underline={false}
/>


      <WhyCard topTitle={false}  features={partnershipFeatures} />
      
    </section>
  );
};



