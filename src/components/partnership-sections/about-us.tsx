import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/card";
import SectionHeader from "../sections/SectionHeader";

type ProductInfoProps = {
  title: string;
  description: string[];
  buttonLabel: string;
};

const ProductInfo = ({ title, description, buttonLabel }: ProductInfoProps) => (
  <div className="flex flex-col gap-6 flex-1">
    <div className="flex flex-col gap-4">
      <h2 className="subsection-heading whitespace-nowrap">{title}</h2>
      <div className="space-y-4  leading-relaxed">
        {description.map((para, idx) => (
          <p key={idx} className="body-text">
            {para}
          </p>
        ))}
      </div>
    </div>

    <div className="flex w-fit pt-20">
      <Button className="h-[60px] gap-2 px-10 rounded-full">
        <span className="text-[16px] font-[600] flex items-center">
          {buttonLabel}
          <ArrowRightIcon className="w-6 h-6 ml-2" />
        </span>
      </Button>
    </div>
  </div>
);

type ProductCardProps = {
  imageSrc: string;
  bgColor?: string;
};

const ProductCard = ({ imageSrc, bgColor = "#cfffe9" }: ProductCardProps) => (
  <Card className="w-[600px] h-[442px] rounded overflow-hidden" style={{ backgroundColor: bgColor }}>
    <CardContent className="flex flex-col items-center justify-center gap-9 p-3 h-full overflow-y-scroll hide-scrollbar">
      <img src={imageSrc} loading="lazy" alt="Frame" className="w-full h-[517.4px]" />
    </CardContent>
  </Card>
);

export const AboutUsSection = () => {
  const product = {
    title: "Product ONE",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    ],
    buttonLabel: "Visit",
    imageSrc: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto gap-12 px-0 py-12 flex flex-col">
      <SectionHeader lineColor="#FDA908"

        text="Our Success Story"
        subtitle="Explore our showcase of featured works"
      />

      <div className="flex w-full gap-12">
        <ProductInfo
          title={product.title}
          description={product.description}
          buttonLabel={product.buttonLabel}
        />
        <ProductCard imageSrc={product.imageSrc} />
      </div>

      <div className="flex justify-center">
        <Button variant="accent" className="h-[60px] px-10 rounded-full">
          Load More
        </Button>
      </div>
    </section>
  );
};
