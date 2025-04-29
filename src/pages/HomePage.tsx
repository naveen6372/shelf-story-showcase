
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CaseStudyCard } from '@/components/casestudy/CaseStudyCard';
import { getTrendingCaseStudies } from '@/data/mockCaseStudies';
import { useAuth } from '@/contexts/AuthContext';

const HomePage = () => {
  const { isAuthenticated, user } = useAuth();
  const trendingCaseStudies = getTrendingCaseStudies();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={isAuthenticated} username={user?.username} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-6 md:py-32 md:px-12 bg-gradient-to-br from-navy/95 to-navy-dark/95 text-white overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Showcase Your Creative Work Like Never Before
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              ProjectShelf helps designers, developers, and writers create stunning portfolios with immersive case studies that tell your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-teal hover:bg-teal-dark text-navy font-medium">
                <Link to="/register">Create Your Portfolio</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/explore">Explore Portfolios</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 md:py-24 md:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Everything You Need To Showcase Your Work
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M3 15h18" />
                    <path d="M9 3v18" />
                    <path d="M15 3v18" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Modular Case Studies</h3>
                <p className="text-muted-foreground">
                  Create detailed case studies with project overviews, media galleries, timelines, and outcome metrics.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                    <path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z" />
                    <path d="M19.071 19.071c-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142 3.905-3.905 10.237-3.905 14.142 0 1.953 1.953 2.929 4.512 2.929 7.071s-.976 5.118-2.929 7.071z" />
                    <path d="M12 5v1" />
                    <path d="M12 18v1" />
                    <path d="M5 12h1" />
                    <path d="M18 12h1" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Beautiful Themes</h3>
                <p className="text-muted-foreground">
                  Choose from professionally designed themes that make your portfolio stand out with minimal effort.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M12 2v20" />
                    <path d="M2 5h20" />
                    <path d="M7 11h10" />
                    <path d="M4 17h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-3">Engagement Analytics</h3>
                <p className="text-muted-foreground">
                  Track portfolio traffic and measure engagement to understand which projects resonate with visitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Case Studies */}
        <section className="py-16 px-6 md:py-24 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Trending Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trendingCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild>
                <Link to="/explore">Explore More Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 md:py-24 md:px-12 bg-navy text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Portfolio?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of creatives showcasing their best work with ProjectShelf.
            </p>
            <Button size="lg" asChild className="bg-teal hover:bg-teal-dark text-navy font-medium">
              <Link to="/register">Get Started - It's Free</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
