import { Sparkles, Leaf, Code } from "lucide-react";

export function AboutSection() {
  return (
    <div className="py-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-charcoal-plum mb-8 border-b pb-2 border-dusty-rose/50">
        Tentang Saya
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <p className="text-moss-grey leading-relaxed mb-6">
            Halo, Saya Nurifah Fadhilah Ulmi — seorang AI Creator & Prompt Engineer yang menjadikan kecerdasan buatan sebagai ruang eksplorasi tanpa batas.
            Bagi Saya, AI bukan sekadar alat, tapi media kreatif masa depan yang membuka jalan baru bagi imajinasi dan ekspresi visual.
            <br /><br />
            Dengan perpaduan seni visual, logika, dan teknologi, Saya mengeksplor cara baru menciptakan ide — dari visual eksperimental, desain konseptual, hingga karya yang memadukan emosi manusia dengan kecerdasan mesin.
            Saya percaya, masa depan kreatif lahir dari keberanian untuk terus bereksperimen, beradaptasi, dan bermimpi lebih jauh dari yang terlihat. 🌿✨
          </p>
          <h3 className="text-xl font-semibold text-olive-sage mb-3 flex items-center">
            <Leaf className="w-5 h-5 mr-2 text-dusty-rose" />
            Filosofi Kreatif
          </h3>
          <p className="text-moss-grey leading-relaxed mb-6">
            Setiap prompt adalah percakapan dengan masa depan.
            Melalui satu baris kata, Saya tidak hanya memerintah mesin, tetapi menanam benih imajinasi yang tumbuh menjadi bentuk-bentuk baru — visual, ide, dan emosi.
            Di dunia yang bergerak cepat, Prompt Engineering bukan sekadar keahlian, tapi bahasa kreatif baru yang menjembatani manusia dengan kemungkinan tanpa batas dari kecerdasan buatan
          </p>
        </div>
        <div className="md:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md border border-dusty-rose/50">
            <h3 className="text-xl font-semibold text-olive-sage mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2 text-dusty-rose" />
              Keahlian Utama
            </h3>
            <ul className="space-y-3 text-moss-grey">
              <li className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-gold-sparkle" />
                Prompt Engineering
              </li>
              <li className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-gold-sparkle" />
                Visual Storytelling & Konsep
              </li>
              <li className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-gold-sparkle" />
                AI Workflow Automation
              </li>
              <li className="flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-gold-sparkle" />
                Desain Grafis & Branding
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}