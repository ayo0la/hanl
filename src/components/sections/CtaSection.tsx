import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";
import { ctaContent } from "@/lib/constants";
import { Star } from "lucide-react";

export default function CtaSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-hanl-700 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              {ctaContent.headline}
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              {ctaContent.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </ScrollReveal>

        {/* Trust line */}
        <ScrollReveal delay={0.4}>
          <div className="flex items-center justify-center gap-2 mt-10 text-sm text-slate-400">
            <Star className="h-4 w-4 text-gold-500 fill-gold-500" />
            <Star className="h-4 w-4 text-gold-500 fill-gold-500" />
            <Star className="h-4 w-4 text-gold-500 fill-gold-500" />
            <span className="ml-1">{ctaContent.trustLine}</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
