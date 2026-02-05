import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { valuePropositions } from "@/lib/constants";

export default function ValueProposition() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why HTC"
            title="What Makes Us Different"
            description="We combine decades of proven training methodologies with cutting-edge AI integration — delivering practical, implementation-focused programs designed for the Nigerian business landscape."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePropositions.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-md border-t-4 border-accent-500 p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 mb-5">
                    <Icon className="h-7 w-7 text-accent-500" />
                  </div>
                  <h3 className="text-lg font-bold text-hanl-800 mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {prop.description}
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
