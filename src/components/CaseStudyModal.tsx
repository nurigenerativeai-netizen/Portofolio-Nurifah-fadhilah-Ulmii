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
  caseStudy: CaseStudy;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  const { caseStudy, tools, coverImage } = project;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto p-0">
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

          <div className="space-y-6">
            {/* Tools/Tags */}
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Tag key={index}>{tool}</Tag>
              ))}
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