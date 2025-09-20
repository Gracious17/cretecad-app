"use client";
import React from "react";
import { ProductCard } from "./Card2";
import { ProductCardProps } from "./Card2";
import { GradientSection } from "./GradientSection";
const productData: ProductCardProps[] = [
  {
    title: "CRETESPACE",
    description:
      "About cretespace and what lorem iosum de lorem lorem ipdum de lorem lorem orem lorem ipdum de.",
    gradient:
      "radial-gradient(51.87% 239.18% at 51.88% 50%, #3FBC28 0%, #0082B3 100%)",
    barWidth: "w-9",
  },
  {
    title: "CRETECADEMY",
    description:
      "About cretespace and what lorem iosum de lorem lorem ipdum de lorem lorem orem lorem ipdum de.",
    gradient:
      "radial-gradient(51.87% 239.18% at 51.88% 50%, #3C22E8 0%, #BE0EAC 100%)",
    barWidth: "w-[34px]",
  },
  {
    title: "CRETER",
    description:
      "About cretespace and what lorem iosum de lorem lorem ipdum de lorem lorem orem lorem ipdum de.",
    gradient:
      "radial-gradient(51.87% 239.18% at 51.88% 50%, #002287 0%, #000D35 100%)",
    barWidth: "w-[34px]",
  },
  {
    title: "CRETEFLY",
    description:
      "About cretespace and what lorem iosum de lorem lorem ipdum de lorem lorem orem lorem ipdum de.",
    gradient: "linear-gradient(180deg, #FFCC29 0%, #FDA908 100%)",

    barWidth: "w-[42px]",
    barColor: "bg-primary-blue",
  },
  {
    title: "CRETESTUDIOS",
    description:
      "About cretespace and what lorem iosum de lorem lorem ipdum de lorem lorem orem lorem ipdum de.",
    gradient:
      "radial-gradient(51.87% 239.18% at 51.88% 50%, #002287 0%, #000D35 100%)",
    barWidth: "w-[32px]",
  },
  {
    title: "CRETEHUB",
    description:
      "About cretespace and what lorem iosum de lorem lorem ipdum de lorem lorem orem lorem ipdum de.",
    gradient:
      "radial-gradient(51.87% 239.18% at 51.88% 50%, #002287 0%, #000D35 100%)",
    barWidth: "w-[32px]",
  },
  {
    title: "CRETESTATE",
    description:
      "About cretespace and what lorem iosum de lorem lorem ipdum de lorem lorem orem lorem ipdum de.",
    gradient:
      "radial-gradient(51.87% 239.18% at 51.88% 50%, #002287 0%, #000D35 100%)",
    barWidth: "w-[32px]",
  },
];
const ProductsSection: React.FC = () => {
  const handleLearnMore = (productTitle: string) => {
    console.log(`Learn more clicked for ${productTitle}`);
  };
  
  const handleonNext = () => {
    console.log(`Learn more clicked for `);
  };

  const handleoPrev=() => {
    console.log(`Learn more clicked for`);
    
  };

  return (
    
    <div className="flex items-center gap-6 ">

<GradientSection title="Our Products" className="z-0"
onNext={handleonNext}
onPrev={handleoPrev}

scrollable={true}>
{productData.map((product) => (
  <ProductCard
  key={product.title}
  {...product}
  onLearnMore={() => handleLearnMore(product.title)}
  />

))}
</GradientSection>
          </div>
);
};

export default ProductsSection;

