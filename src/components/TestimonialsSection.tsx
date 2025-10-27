import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import { useTestimonials } from "@/hooks/use-testimonials";
import { Skeleton } from "@/components/ui/skeleton";

export function TestimonialsSection() {
  const { data: testimonials, isLoading, isError } = useTestimonials();

  if (isLoading) {
    return (
      <div className="py-8 animate-fade-in delay-400">
        <h2 className="text-3xl font-bold text-charcoal-plum mb-8 border-b pb-2 border-dusty-rose/50 text-center">
          Kata Klien
        </h2>
        <div className="w-full max-w-lg mx-auto">
          <Skeleton className="h-64 w-full bg-moss-grey/10" />
        </div>
      </div>
    );
  }

  if (isError || !testimonials || testimonials.length === 0) {
    return (
      <div className="py-8 text-center text-moss-grey">
        Belum ada testimoni yang tersedia.
      </div>
    );
  }

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