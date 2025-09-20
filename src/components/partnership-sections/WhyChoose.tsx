import React from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/card";
import SectionHeader from "../sections/SectionHeader";
import { Partnership,PartnershipSectionData } from "@/lib/types/partnership-types";
import { partnershipSections} from "@/lib/partnership-data"

const THEMES = {
  business: {
    lineColor: "#FFCC29",
    accentColor: "bg-primaryyellow",
    titleColor: "text-primaryblue",
    cardBg: "bg-[#e4ebff]",
    headerAlign: "items-start",
  },
  individual: {
    lineColor: "#FFA1F2",
    accentColor: "bg-secondarylilac",
    titleColor: "text-primarydarkblue",
    cardBg: "bg-[#f7dbff]",
    headerAlign: "items-end",
  },
  global: {
    lineColor: "#35CC5B",
    accentColor: "bg-accentgreen",
    titleColor: "text-primarydarkblue",
    cardBg: "bg-[#cfffe9]",
    headerAlign: "items-start",
  },
} as const;

const STYLES = {
  section: "gap-6  w-full flex flex-col items-start",
  header: "flex flex-col gap-2  w-full",
  accent: "relative w-[60px] h-[7px]",
  titleWrapper: "flex flex-col gap-10  w-full",
  title: "relative mt-[-1.00px] ",
  content: "flex w-full items-start gap-12 ",
  partnerships: "items-start gap-4 flex-1 flex flex-col ",
  partnership:
    "flex flex-col items-start justify-center gap-1 sw-full rounded-[10px]",
  partnershipTitle: " w-fit mt-[-1.00px] subsection-heading ",
  partnershipDescription: " w-full   text-neutral-1  text-justify body-text  ",
  buttonWrapper: "flex w-full items-start gap-3 pt-6 pb-0 px-0 ",
  button:
    "h-[60px] px-10 py-0      ",
  card: "flex flex-col w-[800px] items-center justify-center gap-9 p-3 relative rounded overflow-hidden",
  cardContent: " w-full h-[517.4px] overflow-hidden p-0",
  imageDefault: "w-full h-full rounded object-cover",
} as const;



// Components
const PartnershipItem: React.FC<{ partnership: Partnership }> = ({
  partnership,
}) => (
  <div className={STYLES.partnership}>
    <h3 className={STYLES.partnershipTitle}>{partnership.title}</h3>

    <p className={STYLES.partnershipDescription}>{partnership.description}</p>
  </div>
);

const PartnershipImage: React.FC<{
  section: PartnershipSectionData;
  theme: (typeof THEMES)[keyof typeof THEMES];
}> = ({ section, theme }) => (
  <Card className={`${STYLES.card} ${theme.cardBg}`}>
    <CardContent className={STYLES.cardContent}>
      <img
        className={section.imageStyle || STYLES.imageDefault}
        alt={section.imageAlt}
        src={section.imageSrc}
      />
    </CardContent>
  </Card>
);

const PartnershipContent: React.FC<{ section: PartnershipSectionData }> = ({
  section,
}) => (
  <div className={STYLES.partnerships}>
    {section.partnerships.map((partnership: Partnership, index: number) => (
      <PartnershipItem key={index} partnership={partnership} />
    ))}

    <div className={STYLES.buttonWrapper}>
      <Button className={STYLES.button}>{section.buttonText}</Button>
    </div>
  </div>
);

const PartnershipSection: React.FC<{ section: PartnershipSectionData }> = ({
  section,
}) => {
  const theme = THEMES[section.theme];

  const content = <PartnershipContent section={section} />;
  const image = <PartnershipImage section={section} theme={theme} />;

  return (
    <div className={STYLES.section}>
      <div className={`${STYLES.header} ${theme.headerAlign}`}>
        <div className={`${STYLES.accent} ${theme.accentColor}`} />

        <div className={`${STYLES.titleWrapper} ${theme.headerAlign} `}>
          <div className="inline-flex flex-col items-start relative">
            <SectionHeader
              text={section.title}
              className={`${STYLES.title} ${theme.titleColor}`}
              lineColor={theme.lineColor}
            />
          </div>
        </div>
      </div>

      <div className={STYLES.content}>
        {section.imagePosition === "left" ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {content}
            {image}
          </>
        )}
      </div>
    </div>
  );
};

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="flex px-12 flex-col w-full items-center gap-[72px]">
      {partnershipSections.map((section: PartnershipSectionData) => (
        <PartnershipSection key={section.id} section={section} />
      ))}
    </section>
  );
};
