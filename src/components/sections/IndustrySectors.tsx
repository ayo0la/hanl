import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { industrySectors } from "@/lib/constants";

export default function IndustrySectors() {
  return (
    <section id="sectors" className="py-20 lg:py-28 bg-hanl-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />

      <Container className="relative z-10">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Strategic Consulting & Training Across Key Sectors"
            description="Tailored learning programs designed for the unique challenges and opportunities within Nigeria's most important industries."
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {industrySectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.08} className="h-full">
                <div className="group h-full bg-hanl-800/80 backdrop-blur-sm rounded-xl p-6 border border-hanl-700/50 hover:border-accent-500/60 hover:bg-hanl-700/40 transition-all duration-300">
                  <Icon className="h-10 w-10 text-accent-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-base font-bold text-white mb-1">
                    {sector.name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {sector.oneLiner}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
