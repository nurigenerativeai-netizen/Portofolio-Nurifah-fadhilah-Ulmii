import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Nurifah memiliki pemahaman yang luar biasa tentang Prompt Engineering. Hasil AI Art-nya selalu melampaui ekspektasi, dengan sentuhan estetika yang lembut dan profesional.",
    name: "Anya S.",
    title: "Direktur Kreatif, Agensi Digital",
  },
  {
    quote: "Kolaborasi dengan Nurifah dalam proyek Komik AI kami sangat mulus. Dia berhasil menjaga konsistensi visual yang kompleks menggunakan Stable Diffusion.",
    name: "Bima P.",
    title: "Pimpinan Teknologi, Startup Konten",
  },
  {
    quote: "Estetika Earthy Pastel yang ia bawa benar-benar unik. Proyek Visual Branding kami terasa hangat, alami, dan modern sekaligus. Sangat direkomendasikan!",
    name: "Citra M.",
    title: "Pendiri, Merek Fashion Berkelanjutan",
  },
];

export function TestimonialsSection() {
  return (
    <div className="py-8 animate-fade-in delay-400">
      <h2 className="text-3xl font-bold text-charcoal-plum mb-8 border-b pb-2 border-dusty-rose/50 text-center">
        Kata Klien
      </h2>
      <Carousel className="w-full max-w-lg mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-white/70 border-moss-grey/30 shadow-md">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                    <Quote className="w-8 h-8 text-dusty-rose mb-4" />
                    <p className="italic text-moss-grey mb-4">"{testimonial.quote}"</p>
                    <div className="font-semibold text-olive-sage">{testimonial.name}</div>
                    <div className="text-sm text-charcoal-plum/70">{testimonial.title}</div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-olive-sage hover:bg-dusty-rose/20" />
        <CarouselNext className="text-olive-sage hover:bg-dusty-rose/20" />
      </Carousel>
    </div>
  );
}