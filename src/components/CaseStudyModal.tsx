import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tag } from "./Tag";

interface CaseStudy {
  title: string;
  objective: string;
  process: string;
  outcome: string;
  learnings: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  coverImage: string;
  galleryImages: string[]; // Tambahkan galleryImages
  caseStudy: CaseStudy;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  const { caseStudy, tools, coverImage, galleryImages } = project;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[800px] lg:max-w-[1000px] max-h-[90vh] overflow-y-auto p-0">
        {/* Cover Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={coverImage}
            alt={`Cover image for ${project.title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-plum/20"></div>
        </div>

        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-3xl text-olive-sage">{caseStudy.title}</DialogTitle>
            <DialogDescription className="text-moss-grey">
              Studi Kasus: {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-8">
            {/* Gallery Section */}
            {galleryImages && galleryImages.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-charcoal-plum mb-4 border-b pb-1">Galeri Visual</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={image}
                        alt={`${project.title} visual ${index + 1}`}
                        className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                        // Di sini Anda bisa menambahkan fungsionalitas lightbox/zoom jika diperlukan
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools/Tags */}
            <div>
              <h3 className="text-xl font-semibold text-charcoal-plum mb-2">Alat yang Digunakan</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Tag key={index}>{tool}</Tag>
                ))}
              </div>
            </div>

            {/* Objective */}
            <div>
              <h3 className="text-xl font-semibold text-charcoal-plum mb-2">Tujuan (Objective)</h3>
              <p className="text-moss-grey">{caseStudy.objective}</p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl font-semibold text-charcoal-plum mb-2">Proses</h3>
              <p className="text-moss-grey">{caseStudy.process}</p>
            </div>

            {/* Outcome */}
            <div>
              <h3 className="text-xl font-semibold text-charcoal-plum mb-2">Hasil (Outcome)</h3>
              <p className="text-moss-grey">{caseStudy.outcome}</p>
            </div>

            {/* Learnings */}
            <div>
              <h3 className="text-xl font-semibold text-charcoal-plum mb-2">Pembelajaran</h3>
              <p className="text-moss-grey">{caseStudy.learnings}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}