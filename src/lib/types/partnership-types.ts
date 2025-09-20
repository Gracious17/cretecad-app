export interface Partnership {
  title: string;
  description: string;
}

export interface PartnershipSectionData {
  id: string;
  title: string;
  theme: "business" | "individual" | "global";
  buttonText: string;
  imagePosition: "left" | "right";
  imageSrc: string;
  imageAlt: string;
  imageStyle?: string;
  partnerships: Partnership[];
  lineColor?: string;
}
