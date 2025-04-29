
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { getCaseStudiesByUsername } from '@/data/mockCaseStudies';
import { CaseStudyCard } from '@/components/casestudy/CaseStudyCard';

const DashboardOverview = () => {
  const { user } = useAuth();
  const caseStudies = getCaseStudiesByUsername(user?.username || '');
  
  // Mock analytics data
  const totalViews = 1243;
  const totalEngagement = 78;
  const recentIncrease = 12;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your portfolio.</p>
        </div>
        <Button asChild>
          <Link to="/dashboard/case-studies/new">Create New Case Study</Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Portfolio Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalViews}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-500">↑{recentIncrease}%</span> from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Engagement Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalEngagement}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Based on case study clicks & time spent
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Case Studies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{caseStudies.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Published on your portfolio
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Your Case Studies</h2>
          <Button variant="outline" asChild size="sm">
            <Link to="/dashboard/case-studies">View All</Link>
          </Button>
        </div>
        
        {caseStudies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-10">
              <div className="text-center">
                <h3 className="text-lg font-medium mb-2">No case studies yet</h3>
                <p className="text-muted-foreground mb-6">
                  Create your first case study to showcase your work
                </p>
                <Button asChild>
                  <Link to="/dashboard/case-studies/new">Create Case Study</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DashboardOverview;
