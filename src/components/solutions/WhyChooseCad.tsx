import React from "react";
import { WhyCard } from "../shared/WhyCard";
const featuresItem = [
  {
    icon: "icon-1.svg",
    title: "Built for African Businesses",
    description:
      "Tailored solutions that understand Africa’s unique challenges.",
  },
  {
    icon: "/iconCard.svg",
    title: "Fast deployment",
    description:
      "Tailored solutions that understand Africa’s unique challenges.",
  },
  {
    icon: "/iconCard.svg",
    title: "Affordable pricing",
    description:
      "Tailored solutions that understand Africa’s unique challenges.",
  },
  {
    icon: "/iconCard.svg",
    title: "Scalable and secure solutions",
    description:
      "Tailored solutions that understand Africa’s unique challenges.",
  },
  {
    icon: "/iconCard.svg",
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
