"use client"
import React, { useState } from 'react'
import { InsightsFilterSection } from './blog-section/FilterTab'
import { ResourcesOverviewSection } from './blog-section/ResourcesOverview';

const BlogTabSec = () => {
      const [activeTab, setActiveTab] = useState("featured-insights");


      const handleTabChange = (tabId: string) => {
    console.log('Tab changed to:', tabId);
    setActiveTab(tabId);
  };
  return (
    <div>
<InsightsFilterSection activeTab={activeTab} onTabChange={handleTabChange}/>
<ResourcesOverviewSection activeTab={activeTab}/>

    </div>
  )
}

export default BlogTabSec