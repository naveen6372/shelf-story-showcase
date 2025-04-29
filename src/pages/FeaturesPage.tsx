import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const FeaturesPage = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 px-6 md:py-24 md:px-12 bg-navy text-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Features That Elevate Your Portfolio
              </h1>
              <p className="text-xl text-white/90 mb-8">
                ProjectShelf provides all the tools you need to create stunning case studies that showcase your skills and impress potential clients or employers.
              </p>
              <Button size="lg" asChild className="bg-teal hover:bg-teal-dark text-navy font-medium">
                <Link to={isAuthenticated ? "/dashboard" : "/register"}>
                  {isAuthenticated ? "Go to Dashboard" : "Get Started"}
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 md:py-24 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Core Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <div className="aspect-video bg-muted rounded-lg mb-8"></div>
                <h3 className="text-2xl font-semibold mb-4">Modular Case Studies</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Build comprehensive case studies with flexible sections including project overview, media gallery, timeline, tools used, and outcome metrics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Customizable section order</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Media-rich galleries with images and videos</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Detailed project timelines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Client testimonial integration</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="aspect-video bg-muted rounded-lg mb-8"></div>
                <h3 className="text-2xl font-semibold mb-4">Beautiful Themes</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Choose from professionally designed themes that make your portfolio stand out with minimal effort.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Multiple design options</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time theme preview</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mobile-optimized layouts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional typography</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="aspect-video bg-muted rounded-lg mb-8"></div>
                <h3 className="text-2xl font-semibold mb-4">Custom Portfolio URL</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Get your own personalized URL that's easy to share with clients, recruiters, and your network.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Unique username-based URL</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Easy to remember and share</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Professional online presence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Social media profile integration</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="aspect-video bg-muted rounded-lg mb-8"></div>
                <h3 className="text-2xl font-semibold mb-4">Analytics Dashboard</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Track portfolio traffic and measure engagement to understand which projects resonate with visitors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Visitor traffic analytics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Engagement metrics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Case study performance comparison</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Traffic source tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 md:py-24 md:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Portfolio?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of designers, developers, and creative professionals showcasing their work on ProjectShelf.
            </p>
            <Button size="lg" asChild>
              <Link to={isAuthenticated ? "/dashboard" : "/register"}>
                {isAuthenticated ? "Go to Dashboard" : "Create Your Portfolio"}
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FeaturesPage;
