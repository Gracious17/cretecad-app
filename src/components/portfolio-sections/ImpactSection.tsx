import React from "react";
import SectionHeader from "../sections/SectionHeader";
import ImpactCard, { ImpactCardProps } from "./ImpactCard";

export const ImpactSnapshotSection = () => {
  const impactImages : ImpactCardProps[]= [
  {

    images: [
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800", 
      "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    variant: "twoTopOneBottom",
      bgColor: "bg-blue-200",
  },
    {
    images: [
      "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    variant: "oneTopTwoBottom",
      bgColor: "bg-yellow-100",
  },
    {
    images: [
      "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    variant: "twoTopOneBottom",
      bgColor: "bg-pink-200",
  },
]

  return (
    <section className="flex flex-col w-full items-start gap-12 py-20 px-20">
      <SectionHeader
      text="Impact Snapshot"
      subtitle="Scaling Businesses, Scaling Africa"
      />
        <div className="grid grid-cols-1  md:grid-cols-3  gap-2 w-full">
          {impactImages.map((card,idx)=>(
            <ImpactCard key={idx} {...card}/>
          ))}
      </div>
    </section>
  );
};
