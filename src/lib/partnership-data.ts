import { PartnershipSectionData } from "./types/partnership-types";
export const partnershipSections: PartnershipSectionData[] = [
  {
    id: "business",
    title: "Business Partnerships",
    theme: "business",
    buttonText: "Apply as a Business Partner",
    imagePosition: "right",
    imageSrc:
      "/business-objects-with-executives-discussing-blueprint-meeting-1.png",
    imageAlt: "Business objects",
    partnerships: [
      {
        title: "Corporate Collaborations",
        description:
          "Co-build products, scale business centres, or integrate with our platforms",
      },
      {
        title: "Resellers & Distributors",
        description:
          "Sell our solutions (CRETER machines, CRETESPACE subscriptions, etc.) for commissions.",
      },
      {
        title: "Affiliate Partners",
        description: "Earn commissions by referring clients.",
      },
      {
        title: "Strategic Alliances",
        description:
          "Partnerships with telcos, banks, real estate firms, governments.",
      },
    ],
  },
  {
    id: "individual",
    title: "Individual Partnerships",
    theme: "individual",
    buttonText: "Apply as an Individual Partner",
    imagePosition: "left",
    imageSrc: "/black-businesswoman-smiling-1.png",
    imageAlt: "Black businesswoman",
    imageStyle:
      "absolute top-[calc(50.00%_-_300px)] left-[calc(50.00%_-_450px)] w-[900px] h-[600px] object-cover",
    partnerships: [
      {
        title: "Student Ambassadors",
        description:
          "Young advocates from CRETECADEMY who promote our ecosystem.",
      },
      {
        title: "Community Influencers",
        description: "Individuals who spread the word and earn rewards.",
      },
      {
        title: "Freelancers & Creators",
        description: "Join our marketplace of service providers",
      },
      {
        title: "Investors",
        description:
          "Partner through Akonam Capital & CRETEX for startup growth.",
      },
    ],
  },
  {
    id: "global",
    title: "Global Partnerships",
    theme: "global",
    buttonText: "Partner Now",
    imagePosition: "right",
    imageSrc: "/c88635788a2f0e4bc4073656742c00f6-1.png",
    imageAlt: "Global partnerships",
    imageStyle:
      "absolute top-[calc(50.00%_-_263px)] left-[calc(50.00%_-_469px)] w-[937px] h-[526px] object-cover",
    partnerships: [
      {
        title: "International expansion opportunities",
        description:
          "Young advocates from CRETECADEMY who promote our ecosystem.",
      },
      {
        title: "Cross-border collaborations",
        description: "Individuals who spread the word and earn rewards.",
      },
      {
        title: "International Invitations",
        description: "Join our marketplace of service providers",
      },
    ],
  },
];