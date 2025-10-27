import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/Tag";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  coverImage: string;
  onViewCaseStudy: () => void;
}

export function ProjectCard({ title, description, tools, coverImage, onViewCaseStudy }: ProjectCardProps) {
  return (
    <Card className="bg-white/70 border-dusty-rose/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden flex flex-col">
      {/* Cover Image Section */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={coverImage}
          alt={`Cover image for ${title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-charcoal-plum/10 group-hover:bg-charcoal-plum/5 transition-colors"></div>
      </div>
      
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
        <Button
          variant="link"
          onClick={onViewCaseStudy}
          className="p-0 h-auto text-dusty-rose hover:text-charcoal-plum font-medium transition-colors"
        >
          Lihat Detail
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </Button>
      </CardContent>
    </Card>
  );
}