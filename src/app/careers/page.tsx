import WhyCareer from "@/components/careers-sections/WhyCareer";
import SectionBlock from "@/components/sections/SectionBlock";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowRightIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <SectionHeader
          text="At CRETECAD,"
          subtitle="We don’t just offer jobs — we build futures. Every  career path here begins with growth, learning, and impact. Whether 
           you’re an ambitious graduate or an experienced professional, your  journey with us starts through CRETECADEMY, 
           our innovation-driven  academy."
        />
      </div>
      <div>
        <SectionHeader variant="centered" text="Career Tracks" />
        <SectionBlock
          variant="centered"
          text={`Choose your path: the Academy Track for fresh graduates starting their journey, or the \n Professional Track for experienced talents ready to advance their careers`}
        />
      </div>

      <div>
        <WhyCareer />
      </div>

      <div className="px-16">
        <SectionHeader lineColor="#FFCC29" text="Our Career Menu" />
      </div>

      <div className="flex flex-col  items-center py-8 ">
        <SectionHeader variant="centered" text="Your Journey, Your Way" />
        <SectionBlock
          variant="centered"
          underline={false}
          text={`Whether you’re here to learn, to grow, or to lead
CRETECAD is `}
          highlight="where it begins"
        />

        <div className="flex gap-4 ">
          <Button>Explore Openings</Button>
          <Button variant="accent">
            <span className="flex">
              Apply to CRETECADEMY

              <ArrowRightIcon/>
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default page;
