import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface CaseStudy {
  title: string;
  objective: string;
  process: string;
  outcome: string;
  learnings: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  cover_image: string;
  gallery_images: string[];
  case_study: CaseStudy;
}

const fetchProjects = async (): Promise<Project[]> => {
  const { data, error } = await supabase
    .from("projects")
    .select("id, title, description, tools, cover_image, gallery_images, case_study")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  
  // Supabase returns case_study as JSONB, which is automatically parsed.
  // We map the keys to camelCase for consistency in the frontend.
  return data.map(p => ({
    id: p.id,
    title: p.title,
    description: p.description,
    tools: p.tools,
    cover_image: p.cover_image,
    gallery_images: p.gallery_images,
    case_study: p.case_study as CaseStudy,
  })) as Project[];
};

export const useProjects = () => {
  return useQuery<Project[], Error>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};