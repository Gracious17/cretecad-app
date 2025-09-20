import React from "react";
import { Card, CardContent } from "../ui/card";

export const PartnershipSection = () => {
  const sectionData = [
    {
      title: "The Challenge",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      title: "The Solution",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "The Impact",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
  ];

  return (
    <section className="flex flex-wrap w-full items-start gap-12 px-20 py-12 gray-gradient-section">
      {sectionData.map((item, index) => (
        <Card
          key={index}
          className={`flex-1 min-w-[300px] max-w-[600px] border-none shadow-none bg-transparent ${
            index === 2 ? "basis-full" : ""
          }`}
        >
          <CardContent className="flex flex-col items-start justify-center gap-6 p-0 subsection-heading text-[24px]!">
            <h3 className="  text-[#2d2d2d]  ">{item.title}</h3>
            <p className=" text-[#000d35b2] subsection-heading ">
              {item.content}
            </p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
