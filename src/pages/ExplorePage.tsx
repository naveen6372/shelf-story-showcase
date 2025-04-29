
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CaseStudyCard } from '@/components/casestudy/CaseStudyCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getRecentCaseStudies } from '@/data/mockCaseStudies';
import { useAuth } from '@/contexts/AuthContext';

const ExplorePage = () => {
  const { isAuthenticated, user } = useAuth();
  const caseStudies = getRecentCaseStudies();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(
    new Set(caseStudies.flatMap(study => study.tags))
  );
  
  // Filter case studies based on search query and selected tag
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag === null || study.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedIn={isAuthenticated} username={user?.username} />
      
      <main className="flex-1 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h1 className="text-4xl font-bold mb-4">Explore Projects</h1>
            <p className="text-xl text-muted-foreground">
              Discover case studies and portfolios from talented creators
            </p>
          </div>
          
          <div className="mb-12">
            <Input
              type="search"
              placeholder="Search projects..."
              className="max-w-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedTag === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Badge>
              {allTags.map(tag => (
                <Badge 
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
            {filteredCaseStudies.length === 0 && (
              <div className="col-span-full text-center py-12">
                <h2 className="text-2xl font-medium mb-2">No results found</h2>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExplorePage;
