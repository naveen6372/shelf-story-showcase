import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { getUserByUsername } from '@/data/mockUsers';
import { getCaseStudiesByUsername } from '@/data/mockCaseStudies';
import { PortfolioLayout } from './PortfolioLayout';
import { CaseStudyCard } from '@/components/casestudy/CaseStudyCard';

const PortfolioHome = () => {
  const { username } = useParams<{ username: string }>();
  const [portfolioUser, setPortfolioUser] = useState<any>(null);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  
  useEffect(() => {
    const loadPortfolioData = async () => {
      if (username) {
        console.log("Loading portfolio for username:", username);
        // Use auth user data if viewing own portfolio
        if (user && user.username === username) {
          console.log("Using authenticated user data for portfolio");
          setPortfolioUser(user);
          const studies = getCaseStudiesByUsername(username);
          setCaseStudies(studies);
        } else {
          // Otherwise load from mock data
          const portfolioData = getUserByUsername(username);
          setPortfolioUser(portfolioData);
          
          if (portfolioData) {
            const studies = getCaseStudiesByUsername(username);
            setCaseStudies(studies);
            console.log("Found case studies:", studies.length);
          }
        }
        setLoading(false);
      }
    };
    
    loadPortfolioData();
  }, [username, user]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading portfolio...</p>
      </div>
    );
  }
  
  if (!portfolioUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Portfolio Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The portfolio you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <PortfolioLayout>
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {portfolioUser.displayName || portfolioUser.username}
            </h1>
            <p className="text-xl">
              {portfolioUser.bio || "Welcome to my portfolio."}
            </p>
          </div>
          
          {caseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-medium mb-4">No case studies yet</h2>
              <p className="text-muted-foreground">
                This portfolio doesn't have any case studies yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </PortfolioLayout>
  );
};

export default PortfolioHome;
