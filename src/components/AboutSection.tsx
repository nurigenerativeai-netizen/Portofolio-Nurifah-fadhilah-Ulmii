import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Prompt Engineering",
  "AI Art",
  "Creative Automation",
  "Visual Branding",
  "Komik AI",
];

export function AboutSection() {
  return (
    <div className="py-8 animate-fade-in delay-200">
      <h2 className="text-3xl font-bold text-charcoal-plum mb-8 border-b pb-2 border-dusty-rose/50">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center">
          <Avatar className="w-32 h-32 mb-4 border-4 border-dusty-rose shadow-lg">
            <AvatarImage src="/placeholder.svg" alt="Nurifah Fadhilah Ulmi" />
            <AvatarFallback className="bg-olive-sage text-cream-mist text-2xl">NF</AvatarFallback>
          </Avatar>
          <Button
            className="bg-dusty-rose hover:bg-dusty-rose/90 text-charcoal-plum transition-all duration-300 group relative overflow-hidden w-full"
            onClick={() => alert("Downloading Resume...")}
          >
            <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-30"></span>
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>
        <div className="md:w-2/3">
          <p className="text-moss-grey leading-relaxed mb-6">
            Halo! Saya Nurifah, seorang AI Creator yang bersemangat dalam menjembatani seni dan kecerdasan buatan. Dengan latar belakang di bidang desain visual dan keahlian mendalam dalam Prompt Engineering, saya membantu klien mewujudkan ide-ide kreatif yang sebelumnya mustahil. Saya percaya pada estetika yang lembut, natural, dan berdampak.
          </p>
          <h3 className="text-xl font-semibold text-olive-sage mb-3 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-gold-sparkle" /> Core Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                className="bg-moss-grey/20 text-charcoal-plum hover:bg-moss-grey/30 transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}