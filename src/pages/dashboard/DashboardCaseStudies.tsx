
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CaseStudyCard } from '@/components/casestudy/CaseStudyCard';
import { useAuth } from '@/contexts/AuthContext';
import { getCaseStudiesByUsername } from '@/data/mockCaseStudies';

const DashboardCaseStudies = () => {
  const { user } = useAuth();
  const allCaseStudies = getCaseStudiesByUsername(user?.username || '');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCaseStudies = allCaseStudies.filter((study) => 
    study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    study.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Case Studies</h1>
          <p className="text-muted-foreground">Manage your projects and case studies</p>
        </div>
        <Button asChild>
          <Link to="/dashboard/case-studies/new">Create New Case Study</Link>
        </Button>
      </div>
      
      <div className="flex items-center">
        <Input
          placeholder="Search case studies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>
      
      {filteredCaseStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-10">
            <div className="text-center">
              {searchQuery ? (
                <>
                  <h3 className="text-lg font-medium mb-2">No case studies found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search query
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-medium mb-2">No case studies yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Create your first case study to showcase your work
                  </p>
                  <Button asChild>
                    <Link to="/dashboard/case-studies/new">Create Case Study</Link>
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DashboardCaseStudies;
