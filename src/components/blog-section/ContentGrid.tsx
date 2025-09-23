import React from "react";
import { ContentCard } from "../blog-section/ContentCard";
import { ContentItem } from "../../lib/types/blogs-types";

interface ContentGridProps {
  content: ContentItem[];
  title: string;
}

export const ContentGrid: React.FC<ContentGridProps> = ({ content, title }) => {
  return (
    <section className="w-full py-[60px] bg-defaultwhite">
      <div className="max-w-[1440px] mx-auto px-20">
        <header className="mb-[42px]">
          <h2 className="font-header-h2-large-32px-bold font-[number:var(--header-h2-large-32px-bold-font-weight)] text-primarydarkblue text-[length:var(--header-h2-large-32px-bold-font-size)] leading-[var(--header-h2-large-32px-bold-line-height)] tracking-[var(--header-h2-large-32px-bold-letter-spacing)] [font-style:var(--header-h2-large-32px-bold-font-style)]">
            {title}
          </h2>
        </header>

        <div className="grid grid-cols-3 gap-12">
          {content.map((item) => (
            <ContentCard key={item.id} content={item} />
          ))}
        </div>
      </div>
    </section>
  );
};