import { Button } from "@/components/ui/button";
import { ArrowRight, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <div className="py-12 text-center animate-fade-in delay-100">
      <div className="flex flex-col items-center mb-8">
        <Avatar className="w-32 h-32 mb-4 border-4 border-gold-sparkle shadow-xl">
          {/* Ganti '/placeholder.svg' dengan path foto Anda */}
          <AvatarImage src="/placeholder.svg" alt="Nurifah Fadhilah Ulmi" />
          <AvatarFallback className="bg-olive-sage text-cream-mist text-2xl">NF</AvatarFallback>
        </Avatar>
        <p className="text-xl text-dusty-rose font-semibold mb-1">
          Nurifah Fadhilah Ulmi
        </p>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-olive-sage mb-6 font-serif">
        Membangun Masa Depan Kreativitas dengan AI
      </h1>
      <p className="text-xl text-moss-grey max-w-2xl mx-auto mb-10">
        Seorang Kreator AI visioner yang memadukan seni, teknologi, dan pemikiran strategis untuk menciptakan pengalaman digital yang memukau.
      </p>
      <div className="flex justify-center space-x-4">
        <Button
          className="bg-olive-sage hover:bg-olive-sage/90 text-cream-mist shadow-lg transition-all duration-300 group relative overflow-hidden"
          size="lg"
          onClick={() => document.querySelector('button[value="projects"]')?.click()}
        >
          <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-30"></span>
          Lihat Proyek
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button
          variant="outline"
          className="border-moss-grey text-moss-grey hover:bg-dusty-rose/20 transition-all duration-300 group relative overflow-hidden"
          size="lg"
          onClick={() => document.querySelector('button[value="contact"]')?.click()}
        >
          <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-30"></span>
          Mari Berkolaborasi
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}