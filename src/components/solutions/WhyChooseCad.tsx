import React, { Fragment } from "react";
import { WhyPartnerWithUsSection } from "../partnership-sections/WhyPartner";
import { WhyCard } from "../shared/WhyCard";
const featuresItem = [
  {
    icon: "icon-1.svg",
    title: "Built for African Businesses",
    description:
      "Tailored solutions that understand Africa’s unique challenges.",
  },
  {
    icon: "icon-1.svg",
    title: "Fast deployment",
    description:
      "Tailored solutions that understand Africa’s unique challenges.",
  },
  {
    icon: "icon-1.svg",
    title: "Affordable pricing",
    description:
      "Tailored solutions that understand Africa’s unique challenges.",
  },
  {
    icon: "icon-1.svg",
    title: "Scalable and secure solutions",
    description:
      "Tailored solutions that understand Africa’s unique challenges.",
  },
  {
    icon: "icon-1.svg",
    title: "Integrated with CRETECAD ecosystem",
    description:
      "Tailored solutions that understand Africa’s unique challenges.",
  },
];
const WhyChooseCad = () => {
  return (
    <WhyCard
      features={featuresItem}
      topTitle={false}
      variant="compact"
      sectionClassName=" px-8!"
      containerClassName="gap-4! flex flex-row! "
      cardClassName="h-[250px] w-[230px] flex"
      contentClassName=""
      showButton={false}
    />
  );
};

export default WhyChooseCad;
