
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { ThemeSelector } from '@/components/theme/ThemeSelector';
import { useAuth } from '@/contexts/AuthContext';
import { mockUsers } from '@/data/mockUsers';

const DashboardTheme = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Find the user's theme from mock data
  const userDetails = mockUsers.find(u => u.username === user?.username);
  const [selectedTheme, setSelectedTheme] = useState(userDetails?.portfolioTheme || 'minimal');
  
  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };
  
  const handleSave = () => {
    // In a real app, this would make an API call to save the theme preference
    console.log('Saving theme preference:', selectedTheme);
    
    // Update the mock user data (this is just for demo purposes)
    if (userDetails) {
      userDetails.portfolioTheme = selectedTheme;
    }
    
    toast({
      title: 'Theme Updated',
      description: 'Your portfolio theme has been updated successfully.',
    });
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Portfolio Theme</h1>
        <p className="text-muted-foreground">Customize the look and feel of your portfolio</p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <ThemeSelector selectedTheme={selectedTheme} onThemeChange={handleThemeChange} />
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className={`border rounded-md p-8 ${selectedTheme === 'minimal' ? 'bg-white' : selectedTheme === 'bold' ? 'bg-navy text-white' : 'bg-teal-light'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className={`text-2xl font-bold ${selectedTheme === 'bold' ? 'text-white' : ''}`}>Your Portfolio Preview</h3>
              <p className={`mt-2 ${selectedTheme === 'bold' ? 'text-white/80' : 'text-muted-foreground'}`}>
                This is how your portfolio will look with the selected theme.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`rounded-md overflow-hidden ${selectedTheme === 'bold' ? 'bg-navy-light' : selectedTheme === 'minimal' ? 'bg-gray-50' : 'bg-teal/10'}`}>
                <div className="aspect-video bg-muted"></div>
                <div className="p-4">
                  <h4 className={`font-medium ${selectedTheme === 'bold' ? 'text-white' : ''}`}>Sample Project</h4>
                  <p className={`text-sm mt-1 ${selectedTheme === 'bold' ? 'text-white/70' : 'text-muted-foreground'}`}>
                    Short project description
                  </p>
                </div>
              </div>
              
              <div className={`rounded-md overflow-hidden ${selectedTheme === 'bold' ? 'bg-navy-light' : selectedTheme === 'minimal' ? 'bg-gray-50' : 'bg-teal/10'}`}>
                <div className="aspect-video bg-muted"></div>
                <div className="p-4">
                  <h4 className={`font-medium ${selectedTheme === 'bold' ? 'text-white' : ''}`}>Another Project</h4>
                  <p className={`text-sm mt-1 ${selectedTheme === 'bold' ? 'text-white/70' : 'text-muted-foreground'}`}>
                    Short project description
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button onClick={handleSave}>
          Save Theme
        </Button>
      </div>
    </div>
  );
};

export default DashboardTheme;
