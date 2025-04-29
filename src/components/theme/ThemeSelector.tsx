
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface ThemeSelectorProps {
  selectedTheme: string;
  onThemeChange: (theme: string) => void;
}

export const ThemeSelector = ({ selectedTheme, onThemeChange }: ThemeSelectorProps) => {
  const themes = [
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Clean, simple design with focus on your work',
      preview: 'bg-white text-black'
    },
    {
      id: 'bold',
      name: 'Bold',
      description: 'High-contrast design with striking visuals',
      preview: 'bg-navy text-white'
    },
    {
      id: 'colorful',
      name: 'Colorful',
      description: 'Vibrant, creative design with playful elements',
      preview: 'bg-teal-light text-navy'
    }
  ];

  return (
    <RadioGroup value={selectedTheme} onValueChange={onThemeChange}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <div key={theme.id} className="relative">
            <RadioGroupItem
              value={theme.id}
              id={theme.id}
              className="sr-only"
            />
            <Label
              htmlFor={theme.id}
              className="cursor-pointer"
            >
              <Card className={cn(
                "h-full transition-all border-2",
                selectedTheme === theme.id ? "border-primary" : "border-border"
              )}>
                <CardContent className="pt-6">
                  <div className={cn(
                    "mb-4 h-28 rounded-md flex items-center justify-center",
                    theme.preview
                  )}>
                    <span className="font-medium">Theme Preview</span>
                  </div>
                  <h3 className="font-medium text-lg">{theme.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {theme.description}
                  </p>
                </CardContent>
              </Card>
              {selectedTheme === theme.id && (
                <div className="absolute top-3 right-3 h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                    <path d="M10 4l-5.5 5.5L2 7" />
                  </svg>
                </div>
              )}
            </Label>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
};
