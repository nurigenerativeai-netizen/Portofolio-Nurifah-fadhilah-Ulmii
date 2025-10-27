import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export function ProjectCard({ title, description, tags, imageUrl, link }: ProjectCardProps) {
  return (
    <Card className="bg-white/70 border-dusty-rose/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
      <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-5"></span>
      <CardHeader>
        <CardTitle className="text-olive-sage">{title}</CardTitle>
        <CardDescription className="text-moss-grey">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-between h-full">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-dusty-rose/20 text-dusty-rose hover:bg-dusty-rose/30">
              {tag}
            </Badge>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm font-medium text-dusty-rose hover:text-olive-sage transition-colors mt-auto"
        >
          Lihat Detail
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
}