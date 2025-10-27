import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tag } from "@/components/Tag";
import { ArrowUpRight } from "lucide-react";
import * as React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  coverImage: string;
  onViewCaseStudy?: () => void; // Dibuat opsional
  externalLink?: string; // Properti baru
}

export function ProjectCard({ title, description, tools, coverImage, onViewCaseStudy, externalLink }: ProjectCardProps) {
  
  const handleClick = () => {
    if (externalLink) {
      window.open(externalLink, '_blank');
    } else if (onViewCaseStudy) {
      onViewCaseStudy();
    }
  };

  // Tentukan teks aksi untuk ditampilkan di kartu
  const actionLabel = externalLink ? "Lihat Video" : "Lihat Studi Kasus";
  const showActionLabel = externalLink || onViewCaseStudy;

  return (
    <Card 
      className="bg-white/70 border-dusty-rose/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col cursor-pointer"
      onClick={handleClick}
    >
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
      <CardContent className="pt-0 flex justify-between items-center">
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <Tag key={index}>{tool}</Tag>
          ))}
        </div>
        {/* Menambahkan indikator visual yang lebih jelas */}
        {showActionLabel && (
          <div className="flex items-center text-dusty-rose group-hover:text-charcoal-plum transition-colors text-sm font-medium whitespace-nowrap">
            {actionLabel}
            <ArrowUpRight className="w-6 h-6 ml-1" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}