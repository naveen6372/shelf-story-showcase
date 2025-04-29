
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

interface CaseStudyFormProps {
  initialData?: {
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    overview: string;
    tools: string[];
    mediaGallery: string[];
    timeline: { date: string; title: string; description: string }[];
    outcomes: string;
    testimonials: { name: string; role: string; content: string }[];
  };
  onSubmit: (data: any) => void;
}

export const CaseStudyForm = ({ initialData, onSubmit }: CaseStudyFormProps) => {
  const { user } = useAuth();
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    thumbnail: initialData?.thumbnail || '',
    tags: initialData?.tags?.join(', ') || '',
    overview: initialData?.overview || '',
    tools: initialData?.tools?.join(', ') || '',
    mediaGallery: initialData?.mediaGallery?.join('\n') || '',
    timeline: initialData?.timeline || [{ date: '', title: '', description: '' }],
    outcomes: initialData?.outcomes || '',
    testimonials: initialData?.testimonials || [{ name: '', role: '', content: '' }],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddTimelineItem = () => {
    setFormData((prev) => ({
      ...prev,
      timeline: [...prev.timeline, { date: '', title: '', description: '' }],
    }));
  };

  const handleTimelineChange = (index: number, field: string, value: string) => {
    const newTimeline = [...formData.timeline];
    newTimeline[index] = { ...newTimeline[index], [field]: value };
    
    setFormData((prev) => ({
      ...prev,
      timeline: newTimeline,
    }));
  };

  const handleRemoveTimelineItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      timeline: prev.timeline.filter((_, i) => i !== index),
    }));
  };

  const handleAddTestimonial = () => {
    setFormData((prev) => ({
      ...prev,
      testimonials: [...prev.testimonials, { name: '', role: '', content: '' }],
    }));
  };

  const handleTestimonialChange = (index: number, field: string, value: string) => {
    const newTestimonials = [...formData.testimonials];
    newTestimonials[index] = { ...newTestimonials[index], [field]: value };
    
    setFormData((prev) => ({
      ...prev,
      testimonials: newTestimonials,
    }));
  };

  const handleRemoveTestimonial = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const processedData = {
      ...formData,
      tags: formData.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
      tools: formData.tools.split(',').map((tool) => tool.trim()).filter(Boolean),
      mediaGallery: formData.mediaGallery.split('\n').map((url) => url.trim()).filter(Boolean),
      username: user?.username,
      slug: formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    };
    
    onSubmit(processedData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="mb-6 grid grid-cols-5">
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basics" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project title"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Short Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="A brief description of your project"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="thumbnail">Thumbnail Image URL</Label>
            <Input
              id="thumbnail"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              required
            />
            {formData.thumbnail && (
              <div className="mt-2 aspect-video w-full max-w-md overflow-hidden rounded-md bg-muted">
                <img
                  src={formData.thumbnail}
                  alt="Thumbnail preview"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
                  }}
                />
              </div>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="UI/UX, Web Design, React"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="overview">Project Overview</Label>
            <Textarea
              id="overview"
              name="overview"
              value={formData.overview}
              onChange={handleChange}
              placeholder="Describe your project in detail"
              rows={8}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tools">Tools & Technologies (comma separated)</Label>
            <Input
              id="tools"
              name="tools"
              value={formData.tools}
              onChange={handleChange}
              placeholder="Figma, React, TailwindCSS"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="media" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="mediaGallery">Media Gallery (one URL per line)</Label>
            <Textarea
              id="mediaGallery"
              name="mediaGallery"
              value={formData.mediaGallery}
              onChange={handleChange}
              placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
              rows={6}
            />
          </div>
          
          {formData.mediaGallery && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {formData.mediaGallery.split('\n')
                .filter(url => url.trim())
                .map((url, index) => (
                <div key={index} className="aspect-video overflow-hidden rounded-md bg-muted">
                  <img
                    src={url}
                    alt={`Gallery item ${index + 1}`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b";
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="timeline" className="space-y-6">
          {formData.timeline.map((item, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-1">
                    <Label htmlFor={`timeline-date-${index}`}>Date</Label>
                    <Input
                      id={`timeline-date-${index}`}
                      value={item.date}
                      onChange={(e) => handleTimelineChange(index, 'date', e.target.value)}
                      placeholder="June 2023"
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-3 space-y-2">
                    <div>
                      <Label htmlFor={`timeline-title-${index}`}>Milestone</Label>
                      <Input
                        id={`timeline-title-${index}`}
                        value={item.title}
                        onChange={(e) => handleTimelineChange(index, 'title', e.target.value)}
                        placeholder="Project kickoff"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`timeline-description-${index}`}>Description</Label>
                      <Textarea
                        id={`timeline-description-${index}`}
                        value={item.description}
                        onChange={(e) => handleTimelineChange(index, 'description', e.target.value)}
                        placeholder="Brief description of this milestone"
                        className="mt-1"
                        rows={2}
                      />
                    </div>
                  </div>
                </div>
                {formData.timeline.length > 1 && (
                  <Button 
                    type="button" 
                    variant="destructive" 
                    size="sm" 
                    className="mt-4"
                    onClick={() => handleRemoveTimelineItem(index)}
                  >
                    Remove
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
          
          <Button type="button" variant="outline" onClick={handleAddTimelineItem}>
            Add Timeline Item
          </Button>
        </TabsContent>
        
        <TabsContent value="outcomes" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="outcomes">Project Outcomes</Label>
            <Textarea
              id="outcomes"
              name="outcomes"
              value={formData.outcomes}
              onChange={handleChange}
              placeholder="Describe the results and impact of your project"
              rows={6}
            />
          </div>
          
          <h3 className="text-lg font-medium mt-8 mb-4">Testimonials</h3>
          
          {formData.testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`testimonial-name-${index}`}>Name</Label>
                      <Input
                        id={`testimonial-name-${index}`}
                        value={testimonial.name}
                        onChange={(e) => handleTestimonialChange(index, 'name', e.target.value)}
                        placeholder="John Doe"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`testimonial-role-${index}`}>Role/Company</Label>
                      <Input
                        id={`testimonial-role-${index}`}
                        value={testimonial.role}
                        onChange={(e) => handleTestimonialChange(index, 'role', e.target.value)}
                        placeholder="CEO at Example Inc."
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor={`testimonial-content-${index}`}>Testimonial</Label>
                    <Textarea
                      id={`testimonial-content-${index}`}
                      value={testimonial.content}
                      onChange={(e) => handleTestimonialChange(index, 'content', e.target.value)}
                      placeholder="Their work was exceptional..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </div>
                
                {formData.testimonials.length > 1 && (
                  <Button 
                    type="button" 
                    variant="destructive" 
                    size="sm" 
                    className="mt-4"
                    onClick={() => handleRemoveTestimonial(index)}
                  >
                    Remove
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
          
          <Button type="button" variant="outline" onClick={handleAddTestimonial}>
            Add Testimonial
          </Button>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end">
        <Button type="submit">Save Case Study</Button>
      </div>
    </form>
  );
};
