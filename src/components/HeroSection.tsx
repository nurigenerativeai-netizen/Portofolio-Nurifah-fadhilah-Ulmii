import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";

export function HeroSection() {
  return (
    <div className="py-12 text-center animate-fade-in delay-100">
      <p className="text-lg text-dusty-rose font-semibold mb-2">
        Nurifah Fadhilah Ulmi
      </p>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-olive-sage mb-6 font-serif">
        Building the Future of Creativity with AI
      </h1>
      <p className="text-xl text-moss-grey max-w-2xl mx-auto mb-10">
        A visionary AI Creator blending art, technology, and strategic thinking to craft compelling digital experiences.
      </p>
      <div className="flex justify-center space-x-4">
        <Button
          className="bg-olive-sage hover:bg-olive-sage/90 text-cream-mist shadow-lg transition-all duration-300 group relative overflow-hidden"
          size="lg"
          onClick={() => document.querySelector('button[value="projects"]')?.click()}
        >
          <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-30"></span>
          View Projects
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button
          variant="outline"
          className="border-moss-grey text-moss-grey hover:bg-dusty-rose/20 transition-all duration-300 group relative overflow-hidden"
          size="lg"
          onClick={() => document.querySelector('button[value="contact"]')?.click()}
        >
          <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-30"></span>
          Let’s Collaborate
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}