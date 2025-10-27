import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  onViewCaseStudy: () => void;
}

export function ProjectCard({ title, description, tools, onViewCaseStudy }: ProjectCardProps) {
  return (
    <Card className="bg-white/70 border-dusty-rose/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
      <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-5"></span>
      <CardHeader>
        <CardTitle className="text-olive-sage">{title}</CardTitle>
        <CardDescription className="text-moss-grey">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge
              key={tool}
              variant="secondary"
              className="bg-moss-grey/10 text-charcoal-plum border border-moss-grey/30"
            >
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="link"
          className="text-dusty-rose hover:text-olive-sage transition-colors duration-300 p-0 h-auto"
          onClick={onViewCaseStudy}
        >
          Lihat Studi Kasus <ArrowUpRight className="ml-1 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}