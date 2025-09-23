import HeroSection from "@/components/HeroSection";
import { ImpactSnapshotSection } from "@/components/portfolio-sections/ImpactSection";
import SectionBlock from "@/components/sections/SectionBlock";
import SectionHeader from "@/components/sections/SectionHeader";
import { OurEcosystemSection } from "@/components/portfolio-sections/Test";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "lucide-react";
// import { EcosystemSection } from '@/components/portfolio-sections/OurEcosystem';
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection
        bgImage="/hero-bg.jpg"
        highlightedText="Our Company"
        titleImage="/africa.png"
        titleParts="Our Impact"
        subtitle="Redefining Africa's Business Industry, One Step at a Time"
      />
      {/* <EcosystemSection/> */}
      <OurEcosystemSection />
      <ImpactSnapshotSection />
      <div className="flex flex-col items-center py-10">
        <SectionHeader variant="centered" text="What are you waiting for?" />
        <SectionBlock
          underline={false}
          variant="centered"
          text={`Discover the ecosystem built to redefine and transform the
        future of `}
          highlight="Africa’s business."
        />

        <Button>
          <span className="flex items-center">
            Explore Solutions
            <ArrowRightIcon />
          </span>
        </Button>
      </div>
    </>
  );
};

export default page;
