import BlogTabSec from '@/components/BlogTabSec';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/sections/SectionHeader';
import { Button } from '@/components/ui/Button';
import SearchBar from '@/components/ui/SearchBar';
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection className='!h-[442px]' titleImageClassName='!left-88' titleImage='/africa.png' bgImage='/blogHero.svg' highlightedText='Resources &'>

      </HeroSection>

      <BlogTabSec/>

      <div className='flex flex-col py-12 gap-4'>
        <SectionHeader variant='centered'
         text="Subscribe & Stay Updated"/>
         <SearchBar className='mx-auto  gap-20'  placeholder='Subscribe'>
          <Button className=''>
            Subscribe
          </Button>
         </SearchBar>
      </div>
    </div>
  )
}

export default page;