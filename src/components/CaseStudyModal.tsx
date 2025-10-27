import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tag } from "./Tag";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    tools: string[];
    galleryImages: string[];
    caseStudy: {
      title: string;
      objective: string;
      process: string;
      outcome: string;
      learnings: string;
    };
  };
}

export function CaseStudyModal({ isOpen, onClose, project }: CaseStudyModalProps) {
  const { title, tools, galleryImages, caseStudy } = project;
  
  // Logika untuk mendeteksi apakah ini adalah Webtoon
  const isWebtoon = title.toLowerCase().includes("webtoon");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-3xl font-bold text-olive-sage">{caseStudy.title}</DialogTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {tools.map((tool, index) => (
              <Tag key={index}>{tool}</Tag>
            ))}
          </div>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Gallery/Carousel */}
          {galleryImages && galleryImages.length > 0 && (
            <div className="bg-dusty-rose/10 p-4 rounded-lg">
              {isWebtoon ? (
                // Tampilan Vertikal untuk Webtoon
                <div className="space-y-4">
                  {galleryImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Webtoon panel ${index + 1}`}
                      className="w-full h-auto object-contain rounded-md shadow-md"
                    />
                  ))}
                </div>
              ) : (
                // Tampilan Carousel untuk Proyek Biasa
                <Carousel className="w-full">
                  <CarouselContent>
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-auto max-h-[400px] object-contain rounded-md"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              )}
            </div>
          )}

          {/* Objective */}
          <div>
            <h3 className="text-xl font-semibold text-charcoal-plum mb-2">Tujuan</h3>
            <p className="text-moss-grey">{caseStudy.objective}</p>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-xl font-semibold text-charcoal-plum mb-2">Proses</h3>
            <p className="text-moss-grey">{caseStudy.process}</p>
          </div>

          {/* Outcome */}
          <div>
            <h3 className="text-xl font-semibold text-charcoal-plum mb-2">Hasil</h3>
            <p className="text-moss-grey">{caseStudy.outcome}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}