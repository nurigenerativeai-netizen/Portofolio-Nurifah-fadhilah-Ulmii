import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";
import { useProjects, Project } from "@/hooks/use-projects";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectsSection() {
  const { data: projectsData, isLoading, isError } = useProjects();
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const handleViewCaseStudy = (project: Project) => {
    setSelectedProject(project);
  };

  if (isLoading) {
    return (
      <div className="py-8 animate-fade-in delay-300">
        <h2 className="text-3xl font-bold text-charcoal-plum mb-8 border-b pb-2 border-dusty-rose/50">
          Proyek Pilihan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-64 w-full bg-moss-grey/10" />
          ))}
        </div>
      </div>
    );
  }

  if (isError || !projectsData) {
    return (
      <div className="py-8 text-center text-destructive">
        Gagal memuat data proyek. Silakan coba lagi nanti.
      </div>
    );
  }

  return (
    <div className="py-8 animate-fade-in delay-300">
      <h2 className="text-3xl font-bold text-charcoal-plum mb-8 border-b pb-2 border-dusty-rose/50">
        Proyek Pilihan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tools={project.tools}
            coverImage={project.cover_image}
            onViewCaseStudy={() => handleViewCaseStudy(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <CaseStudyModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
}