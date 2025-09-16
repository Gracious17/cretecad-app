// import React from 'react';
// import { Button } from './ui/Button';
// import InnovationIcon from './icons/InnovationIcon';
// import IndependenceIcon from './icons/IndependenceIcon';
// import ArrowRightIcon from './icons/ArrowRightIcon';
// import { Shield } from 'lucide-react';

// const ValuesSection: React.FC = () => {
//   const values = [
//     {
//       title: 'African Innovation',
//       icon: <InnovationIcon width={14} height={16} color="#ffffff" />
//     },
//     {
//       title: 'African Discipline', 
//       icon: <Shield size={16} color="#ffffff" />
//     },
//     {
//       title: 'African Independence',
//       icon: <IndependenceIcon width={14} height={14} color="#ffffff" />
//     }
//   ];

//   return (
//     <section className="py-20 gradient-footer">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Values Cards */}
//         <div className="flex flex-wrap justify-center gap-24 mb-16">
//           {values.map((value, index) => (
//             <div
//               key={index}
//               className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center min-w-[280px] border border-white border-opacity-20"
//             >
//               <div className="w-12 h-12 bg-(--accent-yellow) rounded-full flex items-center justify-center mx-auto mb-4">
//                 {value.icon}
//               </div>
//               <h3 className="subsection-heading text-(--text-white)">
//                 {value.title}
//               </h3>
//             </div>
//           ))}
//         </div>

//         {/* Explore Solutions Button */}
//         <div className="flex justify-center">
//           <Button variant="accent" size="lg" className="gap-2">
//             Explore Our Solutions
//             <ArrowRightIcon width={18} height={14} color="#000d35" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ValuesSection;


import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/card";
import GradientBg from "./sections/GradientBg";

const ValuesSection: React.FC = () => {
  const innovationCards = [
    {
      icon: "/icon3.svg",
      title: "African Innovation",
    },
    {
      icon: "/icon2.svg",
      title: "African Discipline",
    },
    {
      icon: "/icon1.svg",
      title: "African Independence",
    },
  ];

  return (
    <GradientBg>


      <div className="flex flex-wrap max-w-[1300px] mx-auto items-start justify-center gap-[100px] px-[70px]">
        {innovationCards.map((card, index) => (
          <Card
          key={index}
          className="w-[310px] rounded-[24px_4px_24px_4px]! border-[#bbfbb34c]  glassmorphism! h-[134px] gap-[20px]  "
          >
            <CardContent className="flex flex-col items-start gap-5 ">
              <div className="flex items-center justify-center w-full flex-col gap-2.5">
                <img className="w-10 h-10" alt="Frame" src={card.icon} />
                <h3 className="font-[segoe ui] font-[700] text-[24px] leading-[150%] text-[#FFFFFF]">
                  {card.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button variant="accent" size="lg" className="">
          <span className="text-[16px] font-[600] flex">Explore Our Solutions

          <ArrowRightIcon className="w-6 h-6" />
          </span>
        </Button>
      </div>
        </GradientBg>
  );
};
export default ValuesSection
