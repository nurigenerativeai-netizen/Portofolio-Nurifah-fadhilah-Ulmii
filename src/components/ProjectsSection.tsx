import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Prompt Engineering & AI Art",
    description: "Eksplorasi visual menggunakan Midjourney dan Stable Diffusion untuk menciptakan karya seni konseptual, ilustrasi, dan desain eksperimental. Fokus pada penguasaan bahasa prompt untuk hasil yang presisi dan artistik.",
    tools: ["Midjourney", "Stable Diffusion", "Adobe Photoshop", "Blender"],
    link: "#",
  },
  {
    title: "Visual Branding & Desain Konseptual",
    description: "Menciptakan identitas visual yang kohesif dan berkesan, mulai dari logo, palet warna, hingga panduan gaya. Menggunakan AI sebagai alat bantu untuk eksplorasi konsep awal dan moodboard.",
    tools: ["Adobe Illustrator", "Figma", "Adobe InDesign", "AI Tools"],
    link: "#",
  },
  {
    title: "AI Workflow Automation",
    description: "Mengintegrasikan kecerdasan buatan ke dalam alur kerja kreatif untuk efisiensi. Menciptakan sistem yang mengotomatisasi tugas repetitif, dari generasi aset hingga variasi desain cepat.",
    tools: ["Zapier", "Integromat", "Custom Scripts", "API Integration"],
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <div className="py-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-charcoal-plum mb-8 border-b pb-2 border-dusty-rose/50">
        Proyek Pilihan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tools={project.tools}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}