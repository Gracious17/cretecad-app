import { TabSection } from '../types/blogs-types';

export const tabSections: TabSection[] = [
  {
    id: 'featured-insights',
    title: 'Featured Insights',
    content: [
      {
        id: '1',
        type: 'insight',
        title: 'AI in Africa\'s Business Evolution',
        category: 'CRETECAD Whitepaper',
        description: 'AI is reshaping Africa\'s business landscape, driving smarter decisions and unlocking new opportunities across industries. From financial services to agriculture, it accelerates growth, efficiency, and innovation.',
        image: '/966d161c6c6b33732e610738d5cf452a-1-1.png',
        imageClasses: 'w-[352px] h-[255px]',
        readTime: '8 min read'
      },
      {
        id: '2',
        type: 'insight',
        title: 'How CRETESPACE is Redefining the Business Centre',
        category: 'BLUMBERG',
        description: 'Discover how modern business centers are evolving to meet the needs of today\'s entrepreneurs and remote workers through innovative technology and flexible solutions.',
        image: '/de5eaf740b8b64661130b9352c9f7fef-1-1.png',
        imageClasses: 'w-[401px] h-[225px]',
        readTime: '12 min read'
      },
      {
        id: '3',
        type: 'insight',
        title: 'The Future of Digital Learning: Inside CRETECADEMY',
        category: 'CRETECAD Whitepaper',
        description: 'Exploring the transformation of education through digital platforms and how CRETECADEMY is pioneering new approaches to skill development and professional growth.',
        image: '/9697b1b6ff9906fb77686bc60830b814-1.png',
        imageClasses: 'w-[369px] h-[277px]',
        readTime: '10 min read'
      }
    ]
  },
  {
    id: 'knowledge-hub',
    title: 'Knowledge Hub',
    content: [
      {
        id: '4',
        type: 'insight',
        title: 'Digital Transformation Strategies for SMEs',
        category: 'Business Strategy',
        description: 'A comprehensive guide to implementing digital transformation in small and medium enterprises, covering technology adoption, change management, and ROI optimization.',
        image: '/966d161c6c6b33732e610738d5cf452a-1-1.png',
        imageClasses: 'w-[352px] h-[255px]',
        readTime: '15 min read'
      },
      {
        id: '5',
        type: 'insight',
        title: 'Cloud Computing Best Practices',
        category: 'Technology',
        description: 'Essential practices for successful cloud migration and management, including security considerations, cost optimization, and performance monitoring.',
        image: '/de5eaf740b8b64661130b9352c9f7fef-1-1.png',
        imageClasses: 'w-[401px] h-[225px]',
        readTime: '12 min read'
      },
      {
        id: '6',
        type: 'insight',
        title: 'Data Analytics for Business Growth',
        category: 'Analytics',
        description: 'Learn how to leverage data analytics to drive business decisions, improve customer experience, and identify new growth opportunities.',
        image: '/9697b1b6ff9906fb77686bc60830b814-1.png',
        imageClasses: 'w-[369px] h-[277px]',
        readTime: '18 min read'
      }
    ]
  },
  {
    id: 'media-webinar',
    title: 'Media & Webinar',
    content: [
      {
        id: '7',
        type: 'media',
        title: 'Future of Work: Remote Collaboration Tools',
        category: 'Webinar Series',
        description: 'Join our expert panel discussion on the latest remote collaboration tools and how they\'re shaping the future of work in the digital age.',
        image: '/966d161c6c6b33732e610738d5cf452a-1-1.png',
        imageClasses: 'w-[352px] h-[255px]',
        duration: '45 min',
        mediaType: 'webinar'
      },
      {
        id: '8',
        type: 'media',
        title: 'AI Implementation Success Stories',
        category: 'Video Series',
        description: 'Watch real-world case studies of successful AI implementations across different industries and learn from their experiences.',
        image: '/de5eaf740b8b64661130b9352c9f7fef-1-1.png',
        imageClasses: 'w-[401px] h-[225px]',
        duration: '32 min',
        mediaType: 'video'
      },
      {
        id: '9',
        type: 'media',
        title: 'Startup Funding Strategies Podcast',
        category: 'Podcast',
        description: 'Listen to successful entrepreneurs and investors share their insights on funding strategies, pitch preparation, and investor relations.',
        image: '/9697b1b6ff9906fb77686bc60830b814-1.png',
        imageClasses: 'w-[369px] h-[277px]',
        duration: '28 min',
        mediaType: 'podcast'
      }
    ]
  },
  {
    id: 'thought-leadership',
    title: 'Thought Leadership',
    content: [
      {
        id: '10',
        type: 'insight',
        title: 'The Next Decade of African Tech Innovation',
        category: 'Leadership Perspective',
        description: 'Our CEO shares insights on the emerging trends and opportunities that will define Africa\'s technology landscape over the next decade.',
        image: '/966d161c6c6b33732e610738d5cf452a-1-1.png',
        imageClasses: 'w-[352px] h-[255px]',
        readTime: '20 min read'
      },
      {
        id: '11',
        type: 'insight',
        title: 'Building Sustainable Tech Ecosystems',
        category: 'Industry Analysis',
        description: 'Exploring the key components needed to build thriving, sustainable technology ecosystems that benefit all stakeholders.',
        image: '/de5eaf740b8b64661130b9352c9f7fef-1-1.png',
        imageClasses: 'w-[401px] h-[225px]',
        readTime: '16 min read'
      },
      {
        id: '12',
        type: 'insight',
        title: 'Leadership in the Digital Age',
        category: 'Management',
        description: 'How traditional leadership principles are evolving to meet the challenges of digital transformation and remote work environments.',
        image: '/9697b1b6ff9906fb77686bc60830b814-1.png',
        imageClasses: 'w-[369px] h-[277px]',
        readTime: '14 min read'
      }
    ]
  },
  {
    id: 'research-innovation',
    title: 'Research & Innovation Reports',
    content: [
      {
        id: '13',
        type: 'research',
        title: 'African Fintech Market Analysis 2024',
        category: 'Market Research',
        description: 'Comprehensive analysis of the African fintech landscape, including market size, key players, regulatory environment, and growth projections.',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
        imageClasses: 'w-[352px] h-[255px]',
        publishDate: '2024-01-15',
        authors: ['Dr. Sarah Johnson', 'Michael Chen']
      },
      {
        id: '14',
        type: 'research',
        title: 'Blockchain Adoption in Supply Chain Management',
        category: 'Technology Research',
        description: 'In-depth study on blockchain implementation in supply chain management, covering benefits, challenges, and real-world applications.',
        image: '/de5eaf740b8b64661130b9352c9f7fef-1-1.png',
        imageClasses: 'w-[401px] h-[225px]',
        publishDate: '2024-01-10',
        authors: ['Prof. David Williams', 'Lisa Rodriguez']
      },
      {
        id: '15',
        type: 'research',
        title: 'Sustainable Energy Solutions for Data Centers',
        category: 'Innovation Report',
        description: 'Research on innovative sustainable energy solutions for data centers, including renewable energy integration and efficiency optimization.',
        image: '/9697b1b6ff9906fb77686bc60830b814-1.png',
        imageClasses: 'w-[369px] h-[277px]',
        publishDate: '2024-01-05',
        authors: ['Dr. Emma Thompson', 'James Park', 'Maria Garcia']
      }
    ]
  },
  {
    id: 'press-media',
    title: 'Press & Media Centre',
    content: [
      {
        id: '16',
        type: 'press',
        title: 'CRETECAD Announces Strategic Partnership with Global Tech Leader',
        category: 'Press Release',
        description: 'CRETECAD today announced a strategic partnership that will accelerate digital transformation initiatives across Africa.',
        image: '/966d161c6c6b33732e610738d5cf452a-1-1.png',
        imageClasses: 'w-[352px] h-[255px]',
        publishDate: '2024-01-20',
        source: 'CRETECAD Press Office'
      },
      {
        id: '17',
        type: 'press',
        title: 'Industry Recognition: CRETECAD Named Top Innovation Company',
        category: 'Awards & Recognition',
        description: 'CRETECAD has been recognized as one of the top innovation companies in Africa by leading industry publication.',
        image: '/de5eaf740b8b64661130b9352c9f7fef-1-1.png',
        imageClasses: 'w-[401px] h-[225px]',
        publishDate: '2024-01-18',
        source: 'Tech Africa Today'
      },
      {
        id: '18',
        type: 'press',
        title: 'New Product Launch: CRETESPACE 2.0',
        category: 'Product News',
        description: 'CRETECAD launches the next generation of its flagship business center platform with enhanced AI capabilities.',
        image: '/9697b1b6ff9906fb77686bc60830b814-1.png',
        imageClasses: 'w-[369px] h-[277px]',
        publishDate: '2024-01-12',
        source: 'CRETECAD Press Office'
      }
    ]
  },
  {
    id: 'community-learning',
    title: 'Community & Learning',
    content: [
      {
        id: '19',
        type: 'community',
        title: 'AI Workshop: Building Your First Machine Learning Model',
        category: 'Workshop',
        description: 'Hands-on workshop for beginners to learn the fundamentals of machine learning and build their first predictive model.',
        image: '/966d161c6c6b33732e610738d5cf452a-1-1.png',
        imageClasses: 'w-[352px] h-[255px]',
        eventDate: '2024-02-15',
        location: 'Lagos, Nigeria',
        eventType: 'workshop'
      },
      {
        id: '20',
        type: 'community',
        title: 'Digital Marketing Masterclass',
        category: 'Course',
        description: 'Comprehensive course covering modern digital marketing strategies, social media marketing, and analytics.',
        image: '/de5eaf740b8b64661130b9352c9f7fef-1-1.png',
        imageClasses: 'w-[401px] h-[225px]',
        eventDate: '2024-02-20',
        location: 'Online',
        eventType: 'course'
      },
      {
        id: '21',
        type: 'community',
        title: 'Tech Entrepreneurs Meetup',
        category: 'Networking',
        description: 'Monthly meetup for tech entrepreneurs to network, share experiences, and explore collaboration opportunities.',
        image: '/9697b1b6ff9906fb77686bc60830b814-1.png',
        imageClasses: 'w-[369px] h-[277px]',
        eventDate: '2024-02-10',
        location: 'Nairobi, Kenya',
        eventType: 'meetup'
      }
    ]
  }
];