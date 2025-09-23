export interface BaseContent {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageClasses: string;
}

export interface InsightContent extends BaseContent {
  type: 'insight';
  readTime?: string;
}

export interface MediaContent extends BaseContent {
  type: 'media';
  duration?: string;
  mediaType: 'video' | 'webinar' | 'podcast';
}

export interface ResearchContent extends BaseContent {
  type: 'research';
  publishDate: string;
  authors: string[];
}

export interface PressContent extends BaseContent {
  type: 'press';
  publishDate: string;
  source: string;
}

export interface CommunityContent extends BaseContent {
  type: 'community';
  eventDate?: string;
  location?: string;
  eventType: 'workshop' | 'course' | 'meetup';
}

export type ContentItem = InsightContent | MediaContent | ResearchContent | PressContent | CommunityContent;

export interface TabSection {
  id: string;
  title: string;
  content: ContentItem[];
}