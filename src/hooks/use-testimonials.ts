import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
}

const fetchTestimonials = async (): Promise<Testimonial[]> => {
  const { data, error } = await supabase
    .from("testimonials")
    .select("id, quote, name, title")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  return data as Testimonial[];
};

export const useTestimonials = () => {
  return useQuery<Testimonial[], Error>({
    queryKey: ["testimonials"],
    queryFn: fetchTestimonials,
  });
};