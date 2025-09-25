// import React, { useState } from "react";
// import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

// export const InsightsFilterSection = (): JSX.Element => {
//   const [activeTab, setActiveTab] = useState("featured-insights");

//   const tabItems = [
//     { id: "featured-insights", label: "Featured Insights" },
//     { id: "knowledge-hub", label: "Knowledge Hub" },
//     { id: "media-webinar", label: "Media & Webinar" },
//     { id: "thought-leadership", label: "Thought Leadership" },
//     { id: "research-innovation", label: "Research & Innovation Reports" },
//     { id: "press-media", label: "Press & Media Centre" },
//     { id: "community-learning", label: "Community & Learning" },
//   ];

//   return (
//     <section className="flex w-full items-center px-20 py-0 bg-defaultwhite border-b [border-bottom-style:solid] border-[#0022871a]">
//       <div className="flex items-center gap-2.5 pl-0 pr-12 py-0 flex-1 overflow-x-auto">
//         <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//           <TabsList className="h-20 bg-transparent p-0 gap-0 justify-start">
//             {tabItems.map((item) => (
//               <TabsTrigger
//                 key={item.id}
//                 value={item.id}
//                 className={`
//                   inline-flex flex-col h-20 items-start justify-center gap-1 pt-2.5 pb-0 px-4
//                   flex-[0_0_auto] rounded-[100px] bg-transparent border-0 shadow-none
//                   data-[state=active]:bg-transparent data-[state=active]:shadow-none
//                   hover:bg-transparent
//                   ${
//                     activeTab === item.id
//                       ? "text-primaryblue font-header-h4-small-16px-semibold font-[number:var(--header-h4-small-16px-semibold-font-weight)] text-[length:var(--header-h4-small-16px-semibold-font-size)] leading-[var(--header-h4-small-16px-semibold-line-height)] tracking-[var(--header-h4-small-16px-semibold-letter-spacing)] [font-style:var(--header-h4-small-16px-semibold-font-style)]"
//                       : "text-neutral-1 font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]"
//                   }
//                 `}
//               >
//                 <div className="inline-flex items-center justify-center gap-2.5 flex-1">
//                   <div
//                     className={`whitespace-nowrap ${item.id === "featured-insights" ? "w-[126px]" : "w-fit"}`}
//                   >
//                     {item.label}
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center gap-2.5 self-stretch w-full flex-[0_0_auto] rounded-sm overflow-hidden">
//                   {activeTab === item.id && (
//                     <div className="self-stretch w-full h-px bg-primaryblue" />
//                   )}
//                 </div>
//               </TabsTrigger>
//             ))}
//           </TabsList>
//         </Tabs>
//       </div>
//     </section>
//   );
// };

"use client";
import React, { useMemo, useCallback } from "react";
import { tabSections } from "../../lib/data/tabsContents";

interface InsightsFilterSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

 const InsightsFilterSectionComponent: React.FC<InsightsFilterSectionProps> =({ activeTab, onTabChange }) => {
    const tabItems = useMemo(
      () =>
        tabSections.map((section) => ({
          id: section.id,
          label: section.title,
        })),
      []
    );

    const handleTabClick = useCallback(
      (tabId: string) => {
        console.log("Tab clicked:", tabId);
        onTabChange(tabId);
      },
      [onTabChange]
    );

    return (
      <section className="flex w-full items-center px-20 py-0 bg-defaultwhite border-b [border-bottom-style:solid] border-[#0022871a]">
        <div className="flex items-center gap-2.5 pl-0 pr-12 py-0 flex-1 overflow-x-auto hide-scrollbar">
          <div className="flex h-20 bg-transparent p-0 gap-0 justify-start">
            {tabItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`
              inline-flex flex-col h-20 items-start justify-center gap-1 pt-2.5 pb-0 px-4 
              flex-[0_0_auto] rounded-[100px] bg-transparent border-0 shadow-none
              hover:bg-transparent
              cursor-pointer transition-colors duration-200
              ${
                activeTab === item.id
                  ? "text-primary-blue  "
                  : "text-neutral-1   "
              }
              `}
              >
                <div className="inline-flex items-center justify-center gap-2.5 flex-1">
                  <div className="whitespace-nowrap w-fit">{item.label}</div>
                </div>
                <div className="flex flex-col items-center gap-2.5 self-stretch w-full flex-[0_0_auto] rounded-sm overflow-hidden">
                  {activeTab === item.id && (
                    <div className="self-stretch w-full h-px bg-primary-blue" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  };
export const InsightsFilterSection=React.memo(InsightsFilterSectionComponent);