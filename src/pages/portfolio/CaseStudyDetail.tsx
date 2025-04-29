
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PortfolioLayout } from './PortfolioLayout';
import { getCaseStudyBySlug } from '@/data/mockCaseStudies';

const CaseStudyDetail = () => {
  const { username, slug } = useParams<{ username: string, slug: string }>();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  
  useEffect(() => {
    if (username && slug) {
      const study = getCaseStudyBySlug(username, slug);
      setCaseStudy(study);
    }
  }, [username, slug]);
  
  if (!caseStudy) {
    return (
      <PortfolioLayout>
        <div className="py-16 px-6 md:px-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground">
            The case study you're looking for doesn't exist or has been removed.
          </p>
        </div>
      </PortfolioLayout>
    );
  }

  return (
    <PortfolioLayout>
      <article className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {caseStudy.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-xl">
              {caseStudy.description}
            </p>
          </header>
          
          <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden mb-12">
            <img
              src={caseStudy.thumbnail}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="prose max-w-none">
              {caseStudy.overview.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </section>
          
          {caseStudy.tools && caseStudy.tools.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {caseStudy.tools.map((tool: string) => (
                  <Badge key={tool} variant="outline" className="text-sm py-1 px-3">
                    {tool}
                  </Badge>
                ))}
              </div>
            </section>
          )}
          
          {caseStudy.mediaGallery && caseStudy.mediaGallery.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Media Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.mediaGallery.map((media: string, index: number) => (
                  <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={media}
                      alt={`${caseStudy.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {caseStudy.timeline && caseStudy.timeline.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Project Timeline</h2>
              <div className="relative border-l-2 border-muted pl-8 space-y-12">
                {caseStudy.timeline.map((item: any, index: number) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-10 mt-1 h-5 w-5 rounded-full bg-primary"></div>
                    <div>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                      <h3 className="text-xl font-medium mt-1 mb-2">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {caseStudy.outcomes && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Outcomes & Results</h2>
              <div className="prose max-w-none">
                {caseStudy.outcomes.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>
          )}
          
          {caseStudy.testimonials && caseStudy.testimonials.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
              <div className="space-y-8">
                {caseStudy.testimonials.map((testimonial: any, index: number) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <blockquote className="text-lg italic mb-4">"{testimonial.content}"</blockquote>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </PortfolioLayout>
  );
};

export default CaseStudyDetail;
