import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Card from "@/components/ui/Card";
import { facilitatorBenefits } from "@/lib/constants";

export default function WhyJoinHtc() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          eyebrow="WHY HTC"
          title="Why Facilitate With Us"
          description="Join a team that values expertise, rewards excellence, and empowers facilitators to do their best work."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitatorBenefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.1}>
              <Card className="p-6 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 mb-4">
                  <benefit.icon className="h-6 w-6 text-accent-500" />
                </div>
                <h3 className="text-lg font-bold text-hanl-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
