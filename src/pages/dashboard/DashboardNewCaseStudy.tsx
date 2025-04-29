
import { useNavigate } from 'react-router-dom';
import { CaseStudyForm } from '@/components/casestudy/CaseStudyForm';
import { useToast } from '@/components/ui/use-toast';
import { mockCaseStudies } from '@/data/mockCaseStudies';

const DashboardNewCaseStudy = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (data: any) => {
    // In a real app, this would make an API call to create a new case study
    console.log('Creating new case study:', data);
    
    // Add the case study to mockCaseStudies (this is just for demo purposes)
    const newCaseStudy = {
      id: (mockCaseStudies.length + 1).toString(),
      ...data,
    };
    
    // Add to mock data
    mockCaseStudies.push(newCaseStudy);
    
    toast({
      title: 'Success',
      description: 'Your case study has been created!',
    });
    
    navigate('/dashboard/case-studies');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Create New Case Study</h1>
        <p className="text-muted-foreground">Showcase your work with a detailed case study</p>
      </div>
      
      <CaseStudyForm onSubmit={handleSubmit} />
    </div>
  );
};

export default DashboardNewCaseStudy;
