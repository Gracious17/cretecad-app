import SectionBlock from "@/components/sections/SectionBlock";
import SectionHeader from "@/components/sections/SectionHeader";
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
<SectionHeader variant="centered"
text="Career Tracks"
/>
<SectionBlock variant="centered"
text={`Choose your path: the Academy Track for fresh graduates starting their journey, or the \n Professional Track for experienced talents ready to advance their careers`}
/>
    </>
  );
};

export default page;
