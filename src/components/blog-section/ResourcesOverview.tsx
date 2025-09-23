import React from "react";
import { ContentGrid } from "../blog-section/ContentGrid";
import { tabSections } from "../../lib/data/tabsContents";

interface ResourcesOverviewSectionProps {
  activeTab: string;
}

export const ResourcesOverviewSection: React.FC<ResourcesOverviewSectionProps> = ({ activeTab }) => {
  const currentSection = tabSections.find(section => section.id === activeTab);
  
  if (!currentSection) {
    // Fallback to first section if activeTab not found
    const fallbackSection = tabSections[0];
    return (
      <ContentGrid 
        content={fallbackSection.content} 
        title={fallbackSection.title} 
      />
    );
  }
  
  return (
    <ContentGrid 
      content={currentSection.content} 
      title={currentSection.title} 
    />
  );
};
