import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface CaseStudy {
  title: string;
  objective: string;
  process: string;
  outcome: string;
  learnings: string;
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy;
}

export function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-cream-mist/95 backdrop-blur-md text-charcoal-plum">
        <DialogHeader>
          <DialogTitle className="text-3xl text-olive-sage">{caseStudy.title}</DialogTitle>
          <DialogDescription className="text-moss-grey">
            In-depth look at the project execution and results.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4 max-h-[70vh] overflow-y-auto pr-4">
          
          <div>
            <h3 className="font-bold text-dusty-rose mb-1">Objective</h3>
            <p className="text-sm">{caseStudy.objective}</p>
          </div>
          <Separator className="bg-moss-grey/30" />
          
          <div>
            <h3 className="font-bold text-dusty-rose mb-1">Process</h3>
            <p className="text-sm whitespace-pre-line">{caseStudy.process}</p>
          </div>
          <Separator className="bg-moss-grey/30" />

          <div>
            <h3 className="font-bold text-dusty-rose mb-1">Outcome</h3>
            <p className="text-sm">{caseStudy.outcome}</p>
          </div>
          <Separator className="bg-moss-grey/30" />

          <div>
            <h3 className="font-bold text-dusty-rose mb-1">Learnings</h3>
            <p className="text-sm">{caseStudy.learnings}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}