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
            Halo, aku Nurifah Fadhilah Ulmi — seorang AI Creator & Prompt Engineer yang menjadikan kecerdasan buatan sebagai ruang eksplorasi tanpa batas.
            Bagiku, AI bukan sekadar alat, tapi media kreatif masa depan yang membuka jalan baru bagi imajinasi dan ekspresi visual.
            <br /><br />
            Dengan perpaduan seni visual, logika, dan teknologi, aku mengeksplor cara baru menciptakan ide — dari visual eksperimental, desain konseptual, hingga karya yang memadukan emosi manusia dengan kecerdasan mesin.
            Aku percaya, masa depan kreatif lahir dari keberanian untuk terus bereksperimen, beradaptasi, dan bermimpi lebih jauh dari yang terlihat. 🌿✨
          </p>
          <h3 className="text-xl font-semibold text-olive-sage mb-3 flex items-center">
            <Leaf className="w-5 h-5 mr-2 text-dusty-rose" />
            Filosofi Kreatif
          </h3>
          <p className="text-moss-grey leading-relaxed mb-6">
            Saya berfokus pada estetika Earthy Pastel, menciptakan visual yang lembut, organik, dan menenangkan. Setiap proyek adalah upaya untuk menemukan harmoni antara teknologi canggih dan keindahan alam yang abadi.
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