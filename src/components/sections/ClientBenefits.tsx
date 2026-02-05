import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { clientBenefits } from "@/lib/constants";

export default function ClientBenefits() {
  return (
    <section className="py-20 lg:py-28 bg-hanl-800 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="The HTC Advantage"
            title="What Your Organization Gains"
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {clientBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-500/15 shrink-0">
                    <Icon className="h-6 w-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
