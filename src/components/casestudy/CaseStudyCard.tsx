
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  slug: string;
  username: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  variant?: 'default' | 'compact';
}

export const CaseStudyCard = ({ caseStudy, variant = 'default' }: CaseStudyCardProps) => {
  const { id, title, description, thumbnail, tags, slug, username } = caseStudy;

  return (
    <Link to={`/${username}/${slug}`}>
      <Card className="overflow-hidden case-study-card h-full flex flex-col">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className={cn("flex-1", variant === 'compact' ? "p-4" : "p-6")}>
          <h3 className={cn("font-semibold text-foreground", 
            variant === 'compact' ? "text-base mb-1" : "text-xl mb-2"
          )}>
            {title}
          </h3>
          {variant === 'default' && (
            <p className="text-muted-foreground line-clamp-2 mb-4">{description}</p>
          )}
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.slice(0, variant === 'compact' ? 2 : 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > (variant === 'compact' ? 2 : 4) && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - (variant === 'compact' ? 2 : 4)}
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

import { cn } from '@/lib/utils';
