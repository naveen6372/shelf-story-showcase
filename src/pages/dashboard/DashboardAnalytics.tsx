
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/contexts/AuthContext';
import { getCaseStudiesByUsername } from '@/data/mockCaseStudies';

const DashboardAnalytics = () => {
  const { user } = useAuth();
  const caseStudies = getCaseStudiesByUsername(user?.username || '');
  
  // Mock data for charts
  const viewsData = [
    { name: 'Jan', views: 42 },
    { name: 'Feb', views: 53 },
    { name: 'Mar', views: 95 },
    { name: 'Apr', views: 128 },
    { name: 'May', views: 246 },
    { name: 'Jun', views: 321 },
    { name: 'Jul', views: 402 },
  ];
  
  const engagementData = [
    { name: 'Jan', engagement: 28 },
    { name: 'Feb', engagement: 32 },
    { name: 'Mar', engagement: 47 },
    { name: 'Apr', engagement: 55 },
    { name: 'May', engagement: 65 },
    { name: 'Jun', engagement: 78 },
    { name: 'Jul', engagement: 81 },
  ];
  
  const caseStudyPerformance = caseStudies.map(study => ({
    name: study.title,
    views: Math.floor(Math.random() * 500) + 100,
    engagement: Math.floor(Math.random() * 90) + 10,
    averageTime: (Math.random() * 3 + 1).toFixed(1),
  }));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">Track the performance of your portfolio</p>
      </div>
      
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          <TabsTrigger value="traffic">Traffic Sources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,243</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">↑12%</span> from previous period
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Avg. Session Duration</CardTitle>
                <CardDescription>Time spent on your portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2m 34s</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">↑8%</span> from previous period
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
                <CardDescription>Case study interactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">↑5%</span> from previous period
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Views</CardTitle>
              <CardDescription>Views over the last 7 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={viewsData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="views"
                      stroke="#38B2AC"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Engagement Rate</CardTitle>
              <CardDescription>Percentage of visitors who interact with case studies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={engagementData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="engagement"
                      stroke="#FC8181"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="case-studies" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Case Study Performance</CardTitle>
              <CardDescription>Performance metrics for each case study</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Case Study</th>
                      <th scope="col" className="px-6 py-3">Views</th>
                      <th scope="col" className="px-6 py-3">Engagement</th>
                      <th scope="col" className="px-6 py-3">Avg. Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {caseStudyPerformance.map((study, index) => (
                      <tr key={index} className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">{study.name}</td>
                        <td className="px-6 py-4">{study.views}</td>
                        <td className="px-6 py-4">{study.engagement}%</td>
                        <td className="px-6 py-4">{study.averageTime} min</td>
                      </tr>
                    ))}
                    {caseStudyPerformance.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                          No case studies to display
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="traffic" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Source</th>
                      <th scope="col" className="px-6 py-3">Visitors</th>
                      <th scope="col" className="px-6 py-3">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium">Direct</td>
                      <td className="px-6 py-4">423</td>
                      <td className="px-6 py-4">34%</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium">Google</td>
                      <td className="px-6 py-4">352</td>
                      <td className="px-6 py-4">28%</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium">LinkedIn</td>
                      <td className="px-6 py-4">287</td>
                      <td className="px-6 py-4">23%</td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 font-medium">Twitter</td>
                      <td className="px-6 py-4">106</td>
                      <td className="px-6 py-4">9%</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium">Other</td>
                      <td className="px-6 py-4">75</td>
                      <td className="px-6 py-4">6%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardAnalytics;
