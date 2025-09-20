import HeroSection from '@/components/HeroSection';
import { AboutUsSection } from '@/components/partnership-sections/about-us';
import { PartnershipSection } from '@/components/partnership-sections/Partnership';
import { WhyChooseUsSection } from '@/components/partnership-sections/WhyChoose';
import { WhyPartnerWithUsSection } from '@/components/partnership-sections/WhyPartner';
import React from 'react'

const page = () => {
  return (
    <div>

        <HeroSection
        bgImage="/hero-bg.jpg"
          highlightedText="Stronger Together"
          titleParts="Smarter Tomorrow"
          subtitle="Redefining Africa's Business Industry, One Step at a Time"
      
      />
      <WhyPartnerWithUsSection/>
      <WhyChooseUsSection/>
      <AboutUsSection/>
      <PartnershipSection/>
    </div>
  )
}

export default page;