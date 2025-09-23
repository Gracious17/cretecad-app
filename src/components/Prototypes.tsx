import React from "react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/Button";
import { ArrowRightIcon } from "lucide-react";

const Prototypes = () => {
  const portfolioCategories = [
    {
      title: "Finance",
      images: [
        "/c124d83499bf682963691bd73ec81e94-1.png",
        "/966d161c6c6b33732e610738d5cf452a-1.png",
      ],
    },
    {
      title: "Media & Creativity",
      images: ["/Card.svg"],
    },
    {
      title: "Business Tools",
      images: [
        "/6d7e199a65b86d29a3c79e82b48cac42-1.png",
        "/f380afe1bee32227ff27fcf51aeaf99c-1.png",
      ],
    },
    {
      title: "Education",
      images: ["/8efac0b3bcd97baeb276f2519219dd89-1.png"],
    },
    {
      title: "Payroll Management System",
      images: [
        "/db6bbc6f7bc00bc7fe825117c11e80bb-1.png",
        "/80104681bc81f4c0608dc239e3102dbd-1.png",
      ],
    },
  ];

  return (
    <>
      <div className="w-full items-start pl-10 pr-4 ">
        <h2 className=" -mt-15  text font-[700] text-[32px] text-[#FFFFFF]">
          Prototypes for Sale
        </h2>
        <div className="w-full pl-4  mt-10 overflow-x-auto hide-scrollbar">
          <div className="flex items-start gap-3 pb-4 ">
            {portfolioCategories.map((category, index) => (
              <Card
                key={index}
                className="h-[475px] inline-flex flex-col items-start gap-1 relative flex-[0_0_auto] rounded-[10px] overflow-hidden border-b border-solid border-[#52525240] bg-transparent"
              >
                <CardContent className="p-0 flex-1 grow inline-flex flex-col items-start relative rounded-lg overflow-hidden group">
                  <ScrollArea className="w-[352px] h-[421px]">
                    <div className="flex flex-col">
                      {category.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          className="relative w-[352px] object-cover"
                          alt="Portfolio item"
                          src={image}
                        />
                      ))}
                    </div>
                    <ScrollBar orientation="vertical" />
                  </ScrollArea>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    <div className="flex items-start justify-center pt-30">
                      <Button
                        disableHover={true}
                        className="glassmorphism border-[1.5px] border-white px-8 py-8 pointer-events-auto bg-gray-800/30 hover:bg-gray-800/40"
                      >
                        <span className="text-[16px] font-[600] flex">
                          Preview
                          <ArrowRightIcon className="w-6 h-6" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>

                <div className="flex items-start gap-2.5  ml-2 self-stretch w-full  flex-[0_0_auto]">
                  <h3 className="flex-1  font-[600] text-[20px] text-[#F2F2F7]">
                    {category.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="w-full flex  mx-auto items-center justify-center ">
          <Button variant="accent" size="lg" className=" mx-auto">
            <span className="text-[16px] font-[600] flex">
              View All Categories
              <ArrowRightIcon className="w-6 h-6" />
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Prototypes;
