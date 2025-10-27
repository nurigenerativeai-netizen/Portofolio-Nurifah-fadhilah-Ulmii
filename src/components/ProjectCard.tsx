import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "./Tag";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  link: string;
}

export function ProjectCard({ title, description, tools, link }: ProjectCardProps) {
  return (
    <Card className="bg-white/70 border-dusty-rose/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden flex flex-col">
      <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-5"></span>
      <CardHeader className="flex-grow">
        <CardTitle className="text-olive-sage">{title}</CardTitle>
        <CardDescription className="text-moss-grey">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool, index) => (
            <Tag key={index}>{tool}</Tag>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-dusty-rose hover:text-charcoal-plum font-medium transition-colors"
        >
          Lihat Detail
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
      </CardContent>
    </Card>
  );
}