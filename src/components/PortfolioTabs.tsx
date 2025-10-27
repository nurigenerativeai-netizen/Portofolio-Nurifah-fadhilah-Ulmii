import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, MessageSquare, Mail } from "lucide-react";
import { MadeWithDyad } from "./made-with-dyad";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ContactSection } from "./ContactSection";

const tabs = [
  { value: "home", label: "Beranda", icon: Home, component: HeroSection },
  { value: "about", label: "Tentang", icon: User, component: AboutSection },
  { value: "projects", label: "Proyek", icon: Briefcase, component: ProjectsSection },
  { value: "testimonials", label: "Testimoni", icon: MessageSquare, component: TestimonialsSection },
  { value: "contact", label: "Kontak", icon: Mail, component: ContactSection },
];

export function PortfolioTabs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-cream-mist text-charcoal-plum">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl rounded-xl p-6 md:p-10 transition-all duration-500 animate-fade-in">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-5 h-auto bg-moss-grey/10 p-1 rounded-lg mb-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className={cn(
                  "flex flex-col md:flex-row items-center justify-center gap-1 py-2 px-1 md:px-4 text-sm font-medium transition-all duration-300",
                  "data-[state=active]:bg-olive-sage data-[state=active]:text-cream-mist data-[state=active]:shadow-md rounded-md",
                  "hover:bg-moss-grey/20 hover:text-charcoal-plum",
                  // Gold Sparkle Hover Effect
                  "relative overflow-hidden group"
                )}
              >
                <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
                <tab.icon className="w-4 h-4" />
                <span className="hidden md:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-0">
              <tab.component />
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <div className="mt-4 text-sm text-charcoal-plum/70">
        Dibuat dengan ✨ dan Generative AI
      </div>
      <MadeWithDyad />
    </div>
  );
}