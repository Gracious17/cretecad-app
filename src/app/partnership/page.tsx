import HeroSection from "@/components/HeroSection";
import { AboutUsSection } from "@/components/partnership-sections/about-us";
import { ClientTestimonialsSection } from "@/components/partnership-sections/ClientsTestimony";
import { PartnershipSection } from "@/components/partnership-sections/Partnership";
import { WhyChooseUsSection } from "@/components/partnership-sections/WhyChoose";
import { WhyPartnerWithUsSection } from "@/components/partnership-sections/WhyPartner";
import SectionBlock from "@/components/sections/SectionBlock";
import SectionHeader from "@/components/sections/SectionHeader";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection
        bgImage="/hero-bg.jpg"
        highlightedText="Stronger Together"
        titleParts="Smarter Tomorrow"
        subtitle="Redefining Africa's Business Industry, One Step at a Time"
      />
      <WhyPartnerWithUsSection />
      <WhyChooseUsSection />
      <AboutUsSection />
      <PartnershipSection />
      <ClientTestimonialsSection />
      <div className="py-12">
        <SectionHeader
          variant="centered"
          text="Let’s Build the Future Together"
        />
        <SectionBlock
        underline={false}
          variant="centered"
          text={`Together, we redefine business.\n Let’s build the future `}
          highlight="One  Partnership at a time"
        />
      </div>
    </>
  );
};

export default page;
