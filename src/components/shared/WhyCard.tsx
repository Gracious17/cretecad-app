import React from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/card";
import SectionHeader from "../sections/SectionHeader";
import clsx from "clsx";

type Feature = {
  icon: string;
  title?: string;
  description: string;
};

type WhyPartnerWithUsSectionProps = {
  features: Feature[];
  title?: string;
  showButton?: boolean;
  buttonText?: string;
  variant?: "default" | "compact";
  sectionClassName?: string;
  containerClassName?: string;
  cardClassName?: string;
  contentClassName?: string;
  pClassName?: string;
  topTitle?: boolean;
};

export const WhyCard = ({
  features,
  title = "Why Partner with Us?",
  showButton = true,
  buttonText = "More",
  variant = "default",
  sectionClassName,
  containerClassName,
  cardClassName,
  contentClassName,
  pClassName,
  topTitle = true,
}: WhyPartnerWithUsSectionProps) => {
  const cardClass = clsx(
    "w-[250px] bg-white shadow-[-12px_24px_40px_#ababab40] border-0",
    {
      "even:mb-8 rounded-[24px_4px_24px_24px]": variant === "default",
      "rounded-md ": variant === "compact",
    },
    cardClassName
  );

  const containerClass = clsx(
    "flex  gap-10",
    {
      "items-end justify-center flex-wrap": variant === "default",
      "items-start justify-start ": variant === "compact",
    },
    containerClassName
  );
  const contentClass = clsx(
    "flex flex-col  gap-2 ",
    {
      "items-center justify-center p-4": variant === "default",
      "items-start justify-start ": variant === "compact",
    },
    contentClassName
  );

  const pClass = clsx(
    "  body-text text-[#7E8491]",
    {
      "text-center h-[46px]": variant === "default",
      "text-start ": variant === "compact",
    },
    pClassName
  );

  return (
    <section
      className={clsx(
        "flex flex-col w-full items-center gap-12 py-10 ",
        sectionClassName
      )}
    >
      {topTitle && <SectionHeader text={title} variant="centered" />}
      

      <div className={containerClass}>
        {features.map((feature, index) => (
          <Card key={index} className={cardClass}>
            <CardContent className={contentClass}>
              <img className="w-10 h-10" alt="Icon" src={feature.icon} />
              <h2 className="subsection-heading ">{feature.title}</h2>
              <p className={pClass}>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {showButton && (
        <div className="flex w-[500px] gap-3 items-center justify-center">
          <Button variant="accent" className="h-[60px] px-10 py-0">
            <span>{buttonText}</span>
          </Button>
        </div>
      )}
    </section>
  );
};
