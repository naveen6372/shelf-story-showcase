
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getUserByUsername } from '@/data/mockUsers';

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  const { username } = useParams<{ username: string }>();
  const [portfolioUser, setPortfolioUser] = useState<any>(null);
  const [theme, setTheme] = useState('minimal');
  
  useEffect(() => {
    if (username) {
      const user = getUserByUsername(username);
      setPortfolioUser(user);
      if (user?.portfolioTheme) {
        setTheme(user.portfolioTheme);
      }
    }
  }, [username]);
  
  if (!portfolioUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Portfolio Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The portfolio you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getThemeClasses = () => {
    switch (theme) {
      case 'bold':
        return 'theme-bold bg-black text-white';
      case 'colorful':
        return 'theme-colorful bg-teal-light';
      default:
        return 'theme-minimal bg-white';
    }
  };

  return (
    <div className={`min-h-screen ${getThemeClasses()}`}>
      <header className="py-6 px-6 md:px-12 border-b border-opacity-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to={`/${username}`} className="text-xl font-bold">
            {portfolioUser.displayName}
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to={`/${username}`} className="text-current hover:opacity-80 transition-opacity">
              Work
            </Link>
            <Link to={`/${username}/about`} className="text-current hover:opacity-80 transition-opacity">
              About
            </Link>
            <Link to="/" className="text-current hover:opacity-80 transition-opacity text-sm">
              ProjectShelf
            </Link>
          </nav>
          
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button className="text-current p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12h16M4 6h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <main>
        {children}
      </main>
      
      <footer className="py-8 px-6 md:px-12 border-t border-opacity-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              {portfolioUser.socialLinks?.website && (
                <a href={portfolioUser.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-current hover:opacity-80 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
              )}
              {portfolioUser.socialLinks?.twitter && (
                <a href={`https://twitter.com/${portfolioUser.socialLinks.twitter}`} target="_blank" rel="noopener noreferrer" className="text-current hover:opacity-80 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              )}
              {portfolioUser.socialLinks?.linkedin && (
                <a href={`https://linkedin.com/in/${portfolioUser.socialLinks.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-current hover:opacity-80 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <path d="M2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              )}
              {portfolioUser.socialLinks?.github && (
                <a href={`https://github.com/${portfolioUser.socialLinks.github}`} target="_blank" rel="noopener noreferrer" className="text-current hover:opacity-80 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
              )}
            </div>
            
            <p className="text-sm opacity-70">
              &copy; {new Date().getFullYear()} {portfolioUser.displayName}. Powered by <Link to="/" className="hover:opacity-100">ProjectShelf</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
