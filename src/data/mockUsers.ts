
export const mockUsers = [
  {
    id: '1',
    username: 'sarahdesigner',
    displayName: 'Sarah Johnson',
    bio: 'UI/UX Designer with 8+ years of experience creating beautiful, functional interfaces.',
    avatar: 'https://i.pravatar.cc/150?img=1',
    portfolioTheme: 'minimal',
    socialLinks: {
      website: 'https://sarahjohnson.design',
      twitter: 'sarahdesigns',
      linkedin: 'sarahjohnsondesign',
      github: 'sarahj'
    }
  },
  {
    id: '2',
    username: 'mikecoder',
    displayName: 'Mike Rodriguez',
    bio: 'Full-stack developer passionate about building accessible, performant web applications.',
    avatar: 'https://i.pravatar.cc/150?img=11',
    portfolioTheme: 'bold',
    socialLinks: {
      website: 'https://mikerodriguez.dev',
      twitter: 'mikecodes',
      linkedin: 'mikerodriguezdev',
      github: 'miker'
    }
  },
  {
    id: '3',
    username: 'alexwriter',
    displayName: 'Alex Chen',
    bio: 'Content strategist and copywriter helping brands find their voice and tell their story.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    portfolioTheme: 'colorful',
    socialLinks: {
      website: 'https://alexchen.writes',
      twitter: 'alexwrites',
      linkedin: 'alexchenwriter',
      github: null
    }
  },
  {
    id: '4',
    username: 'aaduupadhyay35',
    displayName: 'Aadu Upadhyay',
    bio: 'Creative professional showcasing a portfolio of innovative work and designs.',
    avatar: 'https://i.pravatar.cc/150?img=7',
    portfolioTheme: 'minimal',
    socialLinks: {
      twitter: 'aaduupadhyay',
      github: 'aaduupadhyay35'
    }
  }
];

export const getUserByUsername = (username: string) => {
  return mockUsers.find(user => user.username === username);
};
