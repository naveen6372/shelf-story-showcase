import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByUsername } from '@/data/mockUsers';
import { useAuth } from '@/contexts/AuthContext';
import { PortfolioLayout } from './PortfolioLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const PortfolioAbout = () => {
  const { username } = useParams<{ username: string }>();
  const [portfolioUser, setPortfolioUser] = useState<any>(null);
  const { user } = useAuth();
  
  useEffect(() => {
    if (username) {
      // If viewing own portfolio, use authenticated user data
      if (user && user.username === username) {
        setPortfolioUser(user);
      } else {
        // Otherwise load from mock data
        const userData = getUserByUsername(username);
        setPortfolioUser(userData);
      }
    }
  }, [username, user]);
  
  if (!portfolioUser) {
    return null;  // PortfolioLayout will handle this case
  }

  return (
    <PortfolioLayout>
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
            <Avatar className="h-32 w-32">
              <AvatarImage src={portfolioUser.avatar} alt={portfolioUser.displayName || portfolioUser.username} />
              <AvatarFallback>{(portfolioUser.displayName || portfolioUser.username).charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                About {portfolioUser.displayName || portfolioUser.username}
              </h1>
              <p className="text-xl">
                {portfolioUser.bio || "Welcome to my portfolio."}
              </p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at magna ut sem pulvinar 
              interdum. Praesent feugiat, erat sit amet commodo venenatis, ex turpis accumsan dolor, 
              sed elementum nunc ligula ut felis. Morbi quis consequat nulla. Sed eleifend commodo massa, 
              nec tincidunt urna volutpat et.
            </p>
            
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
              Nulla facilisi. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et 
              netus et malesuada fames ac turpis egestas.
            </p>
            
            <h2>Experience</h2>
            
            <div className="space-y-6">
              <div>
                <h3>Senior Designer at Company Name</h3>
                <p className="text-muted-foreground">2020 - Present</p>
                <p>
                  Led design projects for major clients, including brand identity development, 
                  web design, and user experience improvements.
                </p>
              </div>
              
              <div>
                <h3>UX Designer at Previous Company</h3>
                <p className="text-muted-foreground">2017 - 2020</p>
                <p>
                  Designed user interfaces for web and mobile applications, conducted user research, 
                  and created wireframes and prototypes.
                </p>
              </div>
              
              <div>
                <h3>Junior Designer at First Company</h3>
                <p className="text-muted-foreground">2015 - 2017</p>
                <p>
                  Assisted with various design tasks, including creating marketing materials, 
                  website graphics, and social media content.
                </p>
              </div>
            </div>
            
            <h2>Skills</h2>
            
            <ul>
              <li>User Interface Design</li>
              <li>User Experience Design</li>
              <li>Wireframing and Prototyping</li>
              <li>Design Systems</li>
              <li>Front-end Development</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Adobe Creative Suite</li>
              <li>Figma</li>
            </ul>
            
            <h2>Education</h2>
            
            <p>
              <strong>Bachelor of Design</strong><br />
              University Name<br />
              2011 - 2015
            </p>
            
            <h2>Get in Touch</h2>
            
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <p>
              Email: {portfolioUser.username}@example.com<br />
              {portfolioUser.socialLinks?.website && (
                <>Website: <a href={portfolioUser.socialLinks.website} target="_blank" rel="noopener noreferrer">{portfolioUser.socialLinks.website}</a><br /></>
              )}
            </p>
          </div>
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default PortfolioAbout;
