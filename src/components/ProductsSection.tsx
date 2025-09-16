"use client";
import React from "react";
import { Button } from "./ui/Button";
import { ProductCard } from "./Card2";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";
import ArrowRightIcon from "./icons/ArrowRightIcon";
import { ProductCardProps } from "./Card2";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { GradientSection } from "./GradientSection";
import { Card, CardContent } from "./ui/card";
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
    // navigation logic here
  };
  
  const handleonNext = () => {
    console.log(`Learn more clicked for `);
    // navigation logic here
  };

  const handleoPrev=() => {
    console.log(`Learn more clicked for`);
    // navigation logic here
  };

  return (
    
    <div className="flex items-center gap-6 ">

<GradientSection title="Our Products" 
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
//        <ScrollArea className="w-[1440px] ">

//       {productData.map((product, index) => (
//           <ProductCard
//             key={product.title}
//            {...product}
//           onLearnMore={() => handleLearnMore(product.title)}
//       />
//      ))}


// <ScrollBar orientation="horizontal" />
//         </ScrollArea>

    //     <header className="flex w-[1278px] items-start absolute top-[841px] left-[431px] flex-col gap-2.5">
    //       <div className="w-[60px] h-[7px] bg-primarydarkblue" />
    //       <h2 className="w-[585px] font-header-h1-large-40px-bold font-[number:var(--header-h1-large-40px-bold-font-weight)] text-primarydarkblue text-[length:var(--header-h1-large-40px-bold-font-size)] tracking-[var(--header-h1-large-40px-bold-letter-spacing)] leading-[var(--header-h1-large-40px-bold-line-height)] [font-style:var(--header-h1-large-40px-bold-font-style)]">
    //         Our Products
    //       </h2>

    //      <button className="w-12 h-12 rounded-full border border-(--border-light) flex items-center justify-center hover:bg-(--background-light) transition-colors">
    //           <ArrowLeftIcon width={19} height={14} color="#7e8491" />
    //         </button>

    //        <button className="w-12 h-12 rounded-full border border-(--border-light) flex items-center justify-center hover:bg-(--background-light) transition-colors">
    //           <ArrowRightIcon width={18} height={14} color="#7e8491" />
    //         </button>
    //     </header> 
    //   </div>
    // </section>

);
};

export default ProductsSection;
{/* <ScrollArea className="w-[1440px]  ">
        </ScrollArea>  */}
