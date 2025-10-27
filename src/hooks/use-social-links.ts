import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon_name: string;
  color_class: string;
}

const fetchSocialLinks = async (): Promise<SocialLink[]> => {
  const { data, error } = await supabase
    .from("social_links")
    .select("id, label, href, icon_name, color_class")
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }
  return data as SocialLink[];
};

export const useSocialLinks = () => {
  return useQuery<SocialLink[], Error>({
    queryKey: ["socialLinks"],
    queryFn: fetchSocialLinks,
  });
};