import React from "react";

export type ImpactCardProps = {
  images: string[];
  variant: "twoTopOneBottom" | "oneTopTwoBottom";
  bgColor: string;
};

const ImpactCard: React.FC<ImpactCardProps> = ({ images, variant, bgColor }) => {
  return (
    <div className={`flex flex-col gap-4 ${bgColor} p-2 h-[600px] rounded`}>
      {variant === "twoTopOneBottom" ? (
        <>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {images.slice(0, 2).map((src, idx) => (
              <div key={idx} className="h-full overflow-hidden rounded">
                <img src={src} alt={`Business impact ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className=" overflow-hidden rounded flex-1">
            <img src={images[2]} alt="Business impact" className="w-full h-full object-cover" />
          </div>
        </>
      ) : (
        <>
          <div className=" overflow-hidden rounded flex-1">
            <img src={images[0]} alt="Business impact" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4 flex-1">
            {images.slice(1).map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded ">
                <img src={src} alt={`Business impact ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default ImpactCard