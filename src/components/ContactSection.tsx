import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useSocialLinks } from "@/hooks/use-social-links";
import { getIconComponent } from "@/utils/icon-map";
import { Skeleton } from "@/components/ui/skeleton";

export function ContactSection() {
  const { data: socialLinks, isLoading: isLoadingLinks, isError: isErrorLinks } = useSocialLinks();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan terkirim! (Fungsionalitas form perlu diimplementasikan di backend)");
  };

  return (
    <div className="py-8 animate-fade-in delay-500">
      <h2 className="text-3xl font-bold text-charcoal-plum mb-8 border-b pb-2 border-dusty-rose/50">
        Hubungi Saya
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border border-moss-grey/20 rounded-lg bg-white/50">
          <div>
            <Label htmlFor="name" className="text-olive-sage">Nama</Label>
            <Input id="name" placeholder="Nama Anda" required className="bg-cream-mist border-dusty-rose/50 focus:border-olive-sage" />
          </div>
          <div>
            <Label htmlFor="email" className="text-olive-sage">Email</Label>
            <Input id="email" type="email" placeholder="email@anda.com" required className="bg-cream-mist border-dusty-rose/50 focus:border-olive-sage" />
          </div>
          <div>
            <Label htmlFor="message" className="text-olive-sage">Pesan</Label>
            <Textarea id="message" placeholder="Bagaimana kita bisa berkolaborasi?" required className="bg-cream-mist border-dusty-rose/50 focus:border-olive-sage min-h-[100px]" />
          </div>
          <Button
            type="submit"
            className="w-full bg-dusty-rose hover:bg-dusty-rose/90 text-charcoal-plum transition-all duration-300 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-30"></span>
            Kirim Pesan <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>

        {/* Social Links */}
        <div className="space-y-4 p-4">
          <h3 className="text-xl font-semibold text-olive-sage mb-3">Terhubung Langsung</h3>
          <p className="text-moss-grey mb-4">
            Jangan ragu untuk menghubungi saya melalui platform berikut.
          </p>
          <div className="space-y-3">
            {isLoadingLinks ? (
              <>
                <Skeleton className="h-10 w-full bg-moss-grey/10" />
                <Skeleton className="h-10 w-full bg-moss-grey/10" />
                <Skeleton className="h-10 w-full bg-moss-grey/10" />
              </>
            ) : isErrorLinks || !socialLinks ? (
              <p className="text-destructive">Gagal memuat tautan sosial.</p>
            ) : (
              socialLinks.map((link) => {
                const IconComponent = getIconComponent(link.icon_name);
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-lg bg-moss-grey/10 hover:bg-moss-grey/20 transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gold-sparkle opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
                    {IconComponent && <IconComponent className={`w-5 h-5 mr-3 ${link.color_class}`} />}
                    <span className="text-charcoal-plum font-medium">{link.label}</span>
                  </a>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}