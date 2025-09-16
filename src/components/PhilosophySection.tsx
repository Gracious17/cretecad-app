import React from "react";
import SectionHeader from "./sections/SectionHeader";
import { Quote } from "lucide-react";

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          {/* header here  */}
          <SectionHeader text="Our Philosophy" lineColor="#FFCC29" />
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {philosophyCards.map((card, index) => (
            <div
              key={index}
              className="bg-(--background-light) rounded-lg p-8 space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1 space-y-3">
                  <h3 className="subsection-heading text-(--text-secondary) leading-9">
                    <Quote className=" text-(--border-light)  " />

                    {card.quote}
                    <Quote className="  text-(--border-light)" />
                  </h3>
                  <div className="space-y-2">
                    <p className="body-text text-(--text-secondary)">
                      {card.content}
                    </p>
                    <button className="text-sm text-(--text-primary) underline hover:no-underline transition-all">
                      {card.link}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
