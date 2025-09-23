import { StarIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"
import { Card, CardContent } from "../ui/card"
// import SectionHeader from "../sections/SectionHeader";

const testimonialData = [
  {
    rating: "5.0",
    title: "The Best Step Ever!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    clientName: "Josh King",
    clientRole: "Founder, Product ONE",
    clientImage: "/43d716925da061a194dc992feb4b34ed-1-2.png",
    quoteImage: "/watermark.svg",
  },
  {
    rating: "5.0",
    title: "The Best Step Ever!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    clientName: "Josh King",
    clientRole: "Founder, Product ONE",
    clientImage: "/43d716925da061a194dc992feb4b34ed-1-2.png",
    quoteImage: "/watermark.svg",
  },
  {
    rating: "5.0",
    title: "The Best Step Ever!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    clientName: "Josh King",
    clientRole: "Founder, Product ONE",
    clientImage: "/43d716925da061a194dc992feb4b34ed-1-2.png",
    quoteImage: "/watermark.svg",
  },
];

export const ClientTestimonialsSection = () => {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-12 px-0 py-12 [background:radial-gradient(50%_50%_at_52%_50%,rgba(0,34,135,1)_0%,rgba(0,13,53,1)_100%)]">
      <header className="flex-col items-start px-20 py-0 flex gap-2.5 w-full flex-[0_0_auto]">
        {/* <SectionHeader
        text="What Our Clients Say About Us"
        /> */}
        <div className=" w-[60px] h-[7px] bg-[#FFA1F2]" />
        <h1 className=" section-heading
           text-white  ">
          What Our Clients Say About Us
        </h1>
      </header>


      <div className="flex w-full items-center gap-6 px-20 py-6 relative flex-[0_0_auto] overflow-hidden overflow-x-scroll hide-scrollbar">
        {testimonialData.map((testimonial, index) => (
          <Card
            key={`testimonial-${index}`}
            className="w-[630px] flex-shrink-0 border border-solid border-[#e3e8f2] bg-white"
          >
            <CardContent className="items-start justify-center gap-3 p-6 flex flex-col relative">
              <div className="inline-flex items-center gap-3  flex-[0_0_auto]">
                {[...Array(5)].map((_, starIndex) => (
                  <StarIcon
                    key={`star-${starIndex}`}
                    className="w-6 h-6 fill-current text-yellow-400"
                  />
                ))}
                <div className="  ">
                  {testimonial.rating}
                </div>
              </div>

              <h3 className="subsection-heading text-[#2d2d2d] ">
                {testimonial.title}
              </h3>

              <p className=" w-full ">
                {testimonial.content}
              </p>

              <div className="flex items-center gap-3 relative w-full flex-[0_0_auto] rounded-lg">
              
                <Avatar className="w-[52px] h-[52px] border border-solid border-[#e3e8f2]">
                  <AvatarImage
                    src={testimonial.clientImage}
                    alt={testimonial.clientName}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-defaultwhite">
                    {testimonial.clientName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
                  <div className="  ">
                   {testimonial.clientName}
                  </div>
                  <div className="">
                    {testimonial.clientRole}
                   </div>
                 </div>
               </div> 

              <img
                className="absolute top-[137px] right-10 w-[109px] h-[81px]"
                alt="Quote decoration"
                src={testimonial.quoteImage}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
