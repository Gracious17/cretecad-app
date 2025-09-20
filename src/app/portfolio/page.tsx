import HeroSection from '@/components/HeroSection';
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection
        bgImage="/hero-bg.jpg"
          highlightedText="Our Company"
          titleImage="/africa.png"
          titleParts="Our Impact"
          subtitle="Redefining Africa's Business Industry, One Step at a Time"
      
      />
    </div>
  )
}

export default page;