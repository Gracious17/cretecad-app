
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
