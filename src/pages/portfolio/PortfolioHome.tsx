
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserByUsername } from '@/data/mockUsers';
import { getCaseStudiesByUsername } from '@/data/mockCaseStudies';
import { PortfolioLayout } from './PortfolioLayout';
import { CaseStudyCard } from '@/components/casestudy/CaseStudyCard';

const PortfolioHome = () => {
  const { username } = useParams<{ username: string }>();
  const [portfolioUser, setPortfolioUser] = useState<any>(null);
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  
  useEffect(() => {
    if (username) {
      const user = getUserByUsername(username);
      setPortfolioUser(user);
      
      const studies = getCaseStudiesByUsername(username);
      setCaseStudies(studies);
    }
  }, [username]);
  
  if (!portfolioUser) {
    return null;  // PortfolioLayout will handle this case
  }

  return (
    <PortfolioLayout>
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {portfolioUser.displayName}
            </h1>
            <p className="text-xl">
              {portfolioUser.bio}
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
