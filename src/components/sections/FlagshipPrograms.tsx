import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { flagshipPrograms } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export default function FlagshipPrograms() {
  return (
    <section id="programs" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Signature Programs"
            title="Flagship AI Transformation Programs"
            description="Intensive, results-oriented programs designed to accelerate your organization's AI journey."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flagshipPrograms.map((program, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex">
                {/* Accent Stripe */}
                <div className={`w-1.5 ${program.stripeColor} shrink-0`} />

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Badge variant="gold">Flagship</Badge>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {program.duration}
                    </span>
                    <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {program.format}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-hanl-800 mb-3">
                    {program.name}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {program.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent-500 mt-1 shrink-0" />
                        <span className="text-sm text-slate-700">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Button href="#contact" variant="secondary" size="sm">
                      Enquire Now
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
