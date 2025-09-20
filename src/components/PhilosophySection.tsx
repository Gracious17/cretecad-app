import React from "react";
import SectionHeader from "./sections/SectionHeader";
import { Quote } from "lucide-react";
import { Card } from "./ui/card";

const PhilosophySection: React.FC = () => {
  const philosophyCards = [
    {
      quote: "Convenience is the death of Civilization",
      content:
        "Africa, rich in resources, has become too dependent on consuming rather than creating. Unlike nations that balance innovation with production...",
      link: "View more",
    },
    {
      quote: "Convenience is the death of Civilization",
      content:
        "Africa, rich in resources, has become too dependent on consuming rather than creating. Unlike nations that balance innovation with production...",
      link: "View more",
    },
    {
      quote: "Convenience is the death of Civilization",
      content:
        "Africa, rich in resources, has become too dependent on consuming rather than creating. Unlike nations that balance innovation with production...",
      link: "View more",
    },
  ];

  return (
    <section className="py-20 gray-gradient-section! w-full">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Section Header */}
        <div className="mb-12">
          {/* header here  */}
          <SectionHeader text="Our Philosophy" lineColor="#FFCC29" />
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {philosophyCards.map((card, index) => (
            <Card
              key={index}
              className="bg-[#FFFFFF] border-none rounded-lg space-y-4 px-4 group"
            >
                <div className="flex-1 space-y-3">
                  <h3 className="subsection-heading text-(--text-secondary) font-[700] leading-9 group-hover:text-gray-600">
                    <Quote size={30} className="inline text-(--border-light)  rotate-180 " />

                    {card.quote}
                    <Quote size={30} className=" inline text-(--border-light)" />
                  </h3>
                  <div className="space-y-2 px-4  ">
                    <p className=" body-text text-(--text-secondary) group-hover:text-gray-600">
                      {card.content}
                    </p>
                    <button className="float-end cursor-pointer text-sm text-(--text-primary) underline hover:no-underline transition-all">
                      {card.link}
                    </button>
                  </div>
                </div>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
