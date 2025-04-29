
export const mockCaseStudies = [
  {
    id: '1',
    title: 'E-Commerce Redesign',
    description: 'A complete redesign of the shopping experience for a major fashion retailer.',
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    tags: ['UI/UX', 'E-Commerce', 'Responsive Design'],
    slug: 'e-commerce-redesign',
    username: 'sarahdesigner',
    overview: `This project involved reimagining the online shopping experience for a major fashion retailer with over 2 million monthly visitors. The goal was to increase conversion rates by 25% while improving overall user satisfaction.

I worked closely with the product team to identify pain points in the existing user journey and crafted solutions that balanced business requirements with user needs. The result was a simplified, mobile-first design that put the products front and center.`,
    tools: ['Figma', 'Shopify', 'React', 'TailwindCSS'],
    mediaGallery: [
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    ],
    timeline: [
      {
        date: 'January 2023',
        title: 'Project Kickoff',
        description: 'Began with stakeholder interviews and competitive analysis'
      },
      {
        date: 'February 2023',
        title: 'User Research',
        description: 'Conducted user interviews and created user personas'
      },
      {
        date: 'March 2023',
        title: 'Design Phase',
        description: 'Created wireframes and high-fidelity mockups'
      },
      {
        date: 'May 2023',
        title: 'Development',
        description: 'Frontend implementation of the new design system'
      },
      {
        date: 'June 2023',
        title: 'Launch',
        description: 'Successfully launched the redesigned website'
      }
    ],
    outcomes: `The redesign resulted in a 32% increase in conversion rates, exceeding our initial goal of 25%. Mobile engagement improved by 47%, and cart abandonment decreased by 18%.

User satisfaction scores, measured through post-purchase surveys, increased from 7.2 to 8.9 out of 10. The client was extremely satisfied with the outcomes and has engaged us for ongoing optimization work.`,
    testimonials: [
      {
        name: 'Jessica Moore',
        role: 'Head of Digital, FashionCo',
        content: 'The redesign exceeded our expectations in every way. Not only did we see impressive metrics improvements, but our customers have been sending us positive feedback about how much easier it is to find and purchase products they love.'
      },
      {
        name: 'Michael Chen',
        role: 'CEO, FashionCo',
        content: 'Working with this team was one of the best decisions we made. They truly understood our brand and created a digital experience that reflects our values while driving business results.'
      }
    ]
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'A modern banking application focused on financial wellness and easy money management.',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
    tags: ['Mobile', 'UI/UX', 'Fintech'],
    slug: 'mobile-banking-app',
    username: 'mikecoder',
    overview: 'A comprehensive redesign of a banking application with over 500,000 users.',
    tools: ['Swift', 'Kotlin', 'Figma', 'Firebase'],
    mediaGallery: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f'
    ],
    timeline: [
      {
        date: 'March 2023',
        title: 'Project Start',
        description: 'Initial planning and research'
      },
      {
        date: 'July 2023',
        title: 'Beta Release',
        description: 'Limited user testing with key customers'
      },
      {
        date: 'September 2023',
        title: 'Public Launch',
        description: 'Full rollout to all users'
      }
    ],
    outcomes: 'Increased user engagement by 45% and received a 4.8/5 rating on app stores.',
    testimonials: [
      {
        name: 'Robert Johnson',
        role: 'CTO, SecureBank',
        content: 'The app has transformed how our customers interact with their finances. User feedback has been overwhelmingly positive.'
      }
    ]
  },
  {
    id: '3',
    title: 'Healthcare Dashboard',
    description: 'A comprehensive dashboard for healthcare providers to monitor patient data and outcomes.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    tags: ['Dashboard', 'Healthcare', 'Data Visualization'],
    slug: 'healthcare-dashboard',
    username: 'sarahdesigner',
    overview: 'A data visualization platform for healthcare professionals to track patient outcomes and treatment efficacy.',
    tools: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    mediaGallery: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    ],
    timeline: [
      {
        date: 'May 2022',
        title: 'Requirements Gathering',
        description: 'Worked with healthcare professionals to understand their needs'
      },
      {
        date: 'August 2022',
        title: 'MVP Development',
        description: 'Created core functionality and initial visualizations'
      },
      {
        date: 'December 2022',
        title: 'Full Deployment',
        description: 'Rolled out to all departments in the hospital network'
      }
    ],
    outcomes: 'Reduced report generation time by 70% and improved treatment decision making through better data visibility.',
    testimonials: [
      {
        name: 'Dr. Emily Chen',
        role: 'Chief Medical Officer, Memorial Hospital',
        content: 'This dashboard has revolutionized how we track patient outcomes. We can now identify trends and make data-driven decisions much more efficiently.'
      }
    ]
  }
];

export const getTrendingCaseStudies = () => {
  return mockCaseStudies.slice(0, 3);
};

export const getCaseStudiesByUsername = (username: string) => {
  return mockCaseStudies.filter(study => study.username === username);
};

export const getCaseStudyBySlug = (username: string, slug: string) => {
  return mockCaseStudies.find(study => study.username === username && study.slug === slug);
};

export const getRecentCaseStudies = () => {
  return [...mockCaseStudies].sort(() => Math.random() - 0.5).slice(0, 6);
};
