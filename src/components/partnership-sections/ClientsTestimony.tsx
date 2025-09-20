import { StarIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonialData = [
  {
    rating: 5.0,
    title: "The Best Step Ever!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    clientName: "Josh King",
    clientRole: "Founder, Product ONE",
    clientImage: "/43d716925da061a194dc992feb4b34ed-1-2.png",
    quoteImage: "/-.svg",
  },
  {
    rating: 5.0,
    title: "The Best Step Ever!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    clientName: "Josh King",
    clientRole: "Founder, Product ONE",
    clientImage: "/43d716925da061a194dc992feb4b34ed-1-2.png",
    quoteImage: "/-.svg",
  },
  {
    rating: 5.0,
    title: "The Best Step Ever!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    clientName: "Josh King",
    clientRole: "Founder, Product ONE",
    clientImage: "/43d716925da061a194dc992feb4b34ed-1-2.png",
    quoteImage: "/-.svg",
  },
];

export const ClientTestimonialsSection = () => {
  return (
    <section className="flex flex-col w-full items-start justify-center gap-12 px-0 py-12 relative [background:radial-gradient(50%_50%_at_52%_50%,rgba(0,34,135,1)_0%,rgba(0,13,53,1)_100%)]">
      <header className="flex-col items-start px-20 py-0 flex gap-2.5 relative w-full flex-[0_0_auto]">
        <div className="relative w-[60px] h-[7px] bg-secondarylilac" />
        <h1 className="relative w-full font-header-h1-large-40px-bold font-[number:var(--header-h1-large-40px-bold-font-weight)] text-defaultwhite text-[length:var(--header-h1-large-40px-bold-font-size)] tracking-[var(--header-h1-large-40px-bold-letter-spacing)] leading-[var(--header-h1-large-40px-bold-line-height)] [font-style:var(--header-h1-large-40px-bold-font-style)]">
          What Our Clients Say About Us
        </h1>
      </header>

      <div className="flex w-full items-center gap-6 px-20 py-6 relative flex-[0_0_auto] overflow-hidden overflow-x-scroll">
        {testimonialData.map((testimonial, index) => (
          <Card
            key={`testimonial-${index}`}
            className="w-[650px] flex-shrink-0 border border-solid border-[#e3e8f2] bg-defaultwhite"
          >
            <CardContent className="items-start justify-center gap-3 p-6 flex flex-col relative">
              <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
                {[...Array(5)].map((_, starIndex) => (
                  <StarIcon
                    key={`star-${starIndex}`}
                    className="w-6 h-6 fill-current text-yellow-400"
                  />
                ))}
                <div className="relative w-fit mt-[-1.00px] font-header-h4-small-16px-semibold font-[number:var(--header-h4-small-16px-semibold-font-weight)] text-defaultblack text-[length:var(--header-h4-small-16px-semibold-font-size)] tracking-[var(--header-h4-small-16px-semibold-letter-spacing)] leading-[var(--header-h4-small-16px-semibold-line-height)] whitespace-nowrap [font-style:var(--header-h4-small-16px-semibold-font-style)]">
                  {testimonial.rating}
                </div>
              </div>

              <h3 className="relative w-fit font-header-h3-large-24px-bold font-[number:var(--header-h3-large-24px-bold-font-weight)] text-[#2d2d2d] text-[length:var(--header-h3-large-24px-bold-font-size)] tracking-[var(--header-h3-large-24px-bold-letter-spacing)] leading-[var(--header-h3-large-24px-bold-line-height)] whitespace-nowrap [font-style:var(--header-h3-large-24px-bold-font-style)]">
                {testimonial.title}
              </h3>

              <p className="relative w-full font-body-20px-regular font-[number:var(--body-20px-regular-font-weight)] text-neutral-1 text-[length:var(--body-20px-regular-font-size)] tracking-[var(--body-20px-regular-letter-spacing)] leading-[var(--body-20px-regular-line-height)] [font-style:var(--body-20px-regular-font-style)]">
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
                  <div className="relative w-fit mt-[-1.00px] font-header-h4-small-16px-semibold font-[number:var(--header-h4-small-16px-semibold-font-weight)] text-defaultblack text-[length:var(--header-h4-small-16px-semibold-font-size)] tracking-[var(--header-h4-small-16px-semibold-letter-spacing)] leading-[var(--header-h4-small-16px-semibold-line-height)] whitespace-nowrap [font-style:var(--header-h4-small-16px-semibold-font-style)]">
                    {testimonial.clientName}
                  </div>
                  <div className="relative w-fit font-caption-12px-regular font-[number:var(--caption-12px-regular-font-weight)] text-neutral-1 text-[length:var(--caption-12px-regular-font-size)] tracking-[var(--caption-12px-regular-letter-spacing)] leading-[var(--caption-12px-regular-line-height)] whitespace-nowrap [font-style:var(--caption-12px-regular-font-style)]">
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
