import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Prototypes from "@/components/Prototypes";
import GradientBg from "@/components/sections/GradientBg";
import SectionBlock from "@/components/sections/SectionBlock";
import SectionHeader from "@/components/sections/SectionHeader";
import WhyChooseCad from "@/components/solutions/WhyChooseCad";
import { Button } from "@/components/ui/Button";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection
        className=" "
        bgImage="/hero-bg.jpg"
        highlightedText="Stronger Together"
        titleParts="Smarter Tomorrow"
        subtitle="Redefining Africa's Business Industry, One Step at a Time"
      />

      <div>
        <SectionHeader
          text="Get inspired by our solutions or share your needs with us to get started"
          variant="centered"
          className="pt-10 pb-20  px-[420px]"
        />
      </div>
      <GradientBg>
        <Prototypes />
      </GradientBg>

      <div className="p-20 pb-10 flex flex-col items-center">
        <div className=" text-center leading-7 gap-8">
          <SectionHeader text="Need Something Unique?" variant="centered" className="gap-8"/>
          <SectionBlock
    
          highlightColor="text-[#FDA908]"
          variant="centered"
          text={`Tell us your vision, and our team will design, build, and deploy\n a solution for you.`}
highlight="We're here to help."
          />

          <Button className="mr-2 ">Start a Project</Button>
          <Button
            disableHover={true}
            className="bg-transparent border  border-[#002287]"
          >
            <span className="text-[#002287]">Request a Template</span>
          </Button>
        </div>
      </div>
      <HowItWorks />

      <div className="gray-gradient-section px-16 py-8">
        <SectionHeader
          text="Why Choose Cretecad?"
          subtitle="We go beyond service, we build futures"
          lineColor="#FFCC29"
        />


        <WhyChooseCad />

<div className="w-full  justify-center flex">
        <Button>
Get Started Today
        </Button>
</div>
      </div>
    </>
  );
};

export default page;
