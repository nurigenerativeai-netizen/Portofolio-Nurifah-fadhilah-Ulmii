import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[]; // Mengganti 'tags' menjadi 'tools'
  onViewCaseStudy: () => void; // Mengganti 'link' menjadi 'onViewCaseStudy'
}

export function ProjectCard({ title, description, tools, onViewCaseStudy }: ProjectCardProps) {
  return (
    <Card className="bg-white/70 border-dusty-rose/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden flex flex-col">
      <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-5"></span>
      <CardHeader className="flex-grow">
        <CardTitle className="text-olive-sage">{title}</CardTitle>
        <CardDescription className="text-moss-grey">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool) => (
            <Badge key={tool} variant="secondary" className="bg-moss-grey/20 text-charcoal-plum hover:bg-moss-grey/30">
              {tool}
            </Badge>
          ))}
        </div>
        <Button
          onClick={onViewCaseStudy}
          className="w-full bg-dusty-rose hover:bg-dusty-rose/90 text-charcoal-plum transition-all duration-300 relative overflow-hidden"
        >
          Lihat Studi Kasus
          <BookOpen className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}