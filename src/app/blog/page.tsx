import BlogTabSec from '@/components/BlogTabSec';
import HeroSection from '@/components/HeroSection';
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection bgImage='/svg.png' highlightedText='Resources &'>

      </HeroSection>

      <BlogTabSec/>
    </div>
  )
}

export default page;