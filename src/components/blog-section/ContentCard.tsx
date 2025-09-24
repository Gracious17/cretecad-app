import React from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/card";
import { ContentItem } from "../../lib/types/blogs-types";

interface ContentCardProps {
  content: ContentItem;
}

export const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  const renderMetadata = () => {
    switch (content.type) {
      case 'insight':
        return content.readTime && (
          <span className="text-xs ">• {content.readTime}</span>
        );
      case 'media':
        return (
          <span className="text-xs text-neutral-2">
            • {content.duration} • {content.mediaType}
          </span>
        );
      case 'research':
        return (
          <span className="text-xs">
            • {new Date(content.publishDate).toLocaleDateString()} • {content.authors.join(', ')}
          </span>
        );
      case 'press':
        return (
          <span className="text-xs text-neutral-2">
            • {new Date(content.publishDate).toLocaleDateString()} • {content.source}
          </span>
        );
      case 'community':
        return (
          <span className="text-xs">
            • {content.eventDate && new Date(content.eventDate).toLocaleDateString()} • {content.location} • {content.eventType}
          </span>
        );
      default:
        return null;
    }
  };

  const getActionText = () => {
    switch (content.type) {
      case 'media':
        return content.mediaType === 'video' ? 'Watch now' : content.mediaType === 'webinar' ? 'Join webinar' : 'Listen now';
      case 'research':
        return 'Download report';
      case 'press':
        return 'Read release';
      case 'community':
        return content.eventType === 'course' ? 'Enroll now' : 'Learn more';
      default:
        return 'Read more';
    }
  };

  return (
    <Card className="flex flex-col rounded-lg overflow-hidden border-0 shadow-none bg-transparent">
      <div className="relative w-full h-56 rounded-lg overflow-hidden">
        <img
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover ${content.imageClasses}`}
          loading="lazy"
          alt={content.title}
          src={content.image}
        />
      </div>

      <CardContent className="flex flex-col w-full max-h-[185px] h-[185px] gap-1 p-0 py-1">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full  text-primaryblue  ">
            {content.category}
            {renderMetadata()}
          </div>

          <h3 className="w-full  text-primarydarkblue  ">
            {content.title}
          </h3>
        </div>

        <div className="flex flex-col items-start gap-2.5 relative flex-1 w-full grow overflow-hidden">
          <p className="w-full ">
            {content.description}
          </p>

          <div className="absolute left-0 bottom-0 w-[332px] h-[40px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
        </div>

        <div className="flex items-center justify-end gap-2.5 px-4 py-0 w-full">
          <Button
            className="h-auto p-0 [font-family:'Segoe_UI-Regular',Helvetica] font-normal  text-[13px] tracking-[0] leading-[13px]"
          >
            <span className="text-[#7d8490] leading-[19.5px] underline">
              {getActionText()}
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};