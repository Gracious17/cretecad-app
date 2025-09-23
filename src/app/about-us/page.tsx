import SectionBlock from "@/components/sections/SectionBlock";
import SectionHeader from "@/components/sections/SectionHeader";
import React from "react";

const page = () => {
  return (
    <>
      <div className="px-16 py-[50px]">
        <SectionHeader subtitleClassName="text-[#000D35B2]"
          text="We challenge outdated business models"
          subtitle={<>
          We exist to challenge the outdated business centre model and  transform it into a modern ecosystem powered by software, smart  machines, and bold ideas.

          <span>
            From a single vision, we&apos;ve built companies, products, and platforms  that cut across printing, education, travel, real estate, media, and  commerce. Each one is connected by our commitment to technology,  intelligence, and African empowerment.
          </span>
          </>  
            
                }
        />
      </div>
      <div>
        <SectionHeader
          variant="centered"
          text={
            <>
              We are <span className="text-[#FF3B30]">not a </span> service
              provider.
            </>
          }
        />
        <SectionBlock
          variant="centered"
          underline={false}
          text={`We are a movement. A new standard.
A relentless force driving businesses and individuals`}
          highlight="into the future."
        />
      </div>
    </>
  );
};

export default page;
