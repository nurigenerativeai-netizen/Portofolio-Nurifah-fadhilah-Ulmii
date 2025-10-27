import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { CaseStudyModal } from "./CaseStudyModal";

const projectsData = [
  {
    id: 1,
    title: "Generator Identitas Merek Natural",
    description: "Menciptakan 100+ logo dan palet warna bertema natural menggunakan model generatif.",
    tools: ["Midjourney", "GPT-4", "Visual Branding"],
    caseStudy: {
      title: "Generator Identitas Merek Natural",
      objective: "Mengotomatisasi pembuatan aset branding awal untuk startup yang berfokus pada keberlanjutan.",
      process: "Menggunakan GPT-4 untuk menghasilkan konsep dan prompt Midjourney yang detail. Melakukan iterasi cepat pada gaya visual dan mengkurasi hasil terbaik. Mengintegrasikan palet warna kustom.",
      outcome: "Pengurangan waktu desain awal sebesar 80% dan menghasilkan identitas visual yang kohesif dan lembut.",
      learnings: "Pentingnya prompt negatif yang spesifik untuk mempertahankan estetika pastel dan menghindari warna jenuh."
    }
  },
  {
    id: 2,
    title: "Serial Webtoon",
    description: "Produksi serial webtoon mingguan yang cepat dan efisien menggunakan kombinasi alat AI untuk alur cerita, visual, dan penyuntingan.",
    tools: ["Canva AI", "Gemini AI", "Chat GPT"],
    caseStudy: {
      title: "Serial Webtoon",
      objective: "Membuat konten serial yang konsisten dan menarik dengan biaya produksi minimal.",
      process: "Menggunakan Gemini AI dan Chat GPT untuk mengelola alur cerita dan dialog. Canva AI digunakan untuk rendering panel dan penyesuaian visual. Proses pasca-produksi minimal untuk penambahan teks.",
      outcome: "Berhasil meluncurkan 12 episode dalam 3 bulan, meningkatkan engagement audiens sebesar 40%.",
      learnings: "Mempertahankan konsistensi karakter visual antar panel adalah tantangan terbesar, memerlukan teknik 'seed' dan 'controlnet' yang canggih."
    }
  },
  {
    id: 3,
    title: "Pustaka Prompt Kreatif",
    description: "Pengembangan basis data prompt yang terstruktur untuk seniman AI.",
    tools: ["GPT-4", "Prompt Engineering"],
    caseStudy: {
      title: "Pustaka Prompt Kreatif",
      objective: "Menciptakan sumber daya yang dapat diskalakan untuk meningkatkan kualitas output AI art.",
      process: "Menganalisis ribuan prompt sukses dan mengkategorikannya berdasarkan gaya, subjek, dan teknik. Menggunakan GPT-4 untuk menyempurnakan sintaksis prompt.",
      outcome: "Menciptakan library dengan lebih dari 500 prompt yang teruji, meningkatkan efisiensi kerja tim kreatif.",
      learnings: "Struktur prompt yang modular (gaya, subjek, pencahayaan, kamera) memberikan hasil yang paling fleksibel dan dapat diprediksi."
    }
  },
  {
    id: 4,
    title: "Emulasi Fotografi Fokus Lembut",
    description: "Model AI yang dilatih untuk meniru gaya fotografi film pastel dengan fokus lembut.",
    tools: ["Stable Diffusion", "AI Art"],
    caseStudy: {
      title: "Emulasi Fotografi Fokus Lembut",
      objective: "Menyediakan alat bagi fotografer untuk menambahkan sentuhan vintage dan lembut pada gambar digital.",
      process: "Fine-tuning model Stable Diffusion menggunakan dataset gambar film pastel resolusi tinggi. Fokus pada tekstur butiran dan kedalaman warna.",
      outcome: "Model yang sangat akurat dalam meniru estetika film, digunakan dalam kampanye pemasaran klien fashion.",
      learnings: "Kualitas data pelatihan sangat krusial; gambar dengan noise yang tepat menghasilkan efek yang lebih otentik."
    }
  },
  {
    id: 5,
    title: "Konten Media Sosial Otomatis",
    description: "Sistem otomatisasi untuk menghasilkan visual dan caption media sosial harian.",
    tools: ["GPT-4", "Creative Automation"],
    caseStudy: {
      title: "Konten Media Sosial Otomatis",
      objective: "Mempertahankan kehadiran media sosial yang aktif dan visual yang menarik tanpa intervensi manual harian.",
      process: "Menggunakan GPT-4 untuk membuat caption yang sesuai dengan tone brand, dan Midjourney untuk visual yang konsisten. Menjadwalkan postingan secara otomatis.",
      outcome: "Peningkatan konsistensi postingan dan penghematan waktu tim marketing hingga 15 jam per minggu.",
      learnings: "Membuat 'persona' AI yang kuat dalam prompt GPT-4 memastikan tone of voice yang konsisten."
    }
  },
  {
    id: 6,
    title: "Generasi Lanskap Ethereal",
    description: "Eksplorasi visual lanskap fantasi dengan nuansa warna Earthy Pastel.",
    tools: ["Midjourney", "AI Art"],
    caseStudy: {
      title: "Generasi Lanskap Ethereal",
      objective: "Menciptakan aset latar belakang unik untuk proyek animasi dan game.",
      process: "Eksperimen dengan parameter pencahayaan dan atmosfer di Midjourney untuk mencapai efek 'ethereal' dan 'shimmering gold'.",
      outcome: "Menghasilkan koleksi 50+ latar belakang resolusi tinggi yang digunakan dalam proyek film pendek independen.",
      learnings: "Menggunakan rasio aspek non-standar (misalnya 21:9) dapat meningkatkan rasa sinematik pada output AI."
    }
  },
];

export function ProjectsSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<typeof projectsData[0]['caseStudy'] | null>(null);

  const handleViewCaseStudy = (caseStudy: typeof projectsData[0]['caseStudy']) => {
    setSelectedCaseStudy(caseStudy);
  };

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
            onViewCaseStudy={() => handleViewCaseStudy(project.caseStudy)}
          />
        ))}
      </div>

      {selectedCaseStudy && (
        <CaseStudyModal
          isOpen={!!selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          caseStudy={selectedCaseStudy}
        />
      )}
    </div>
  );
}