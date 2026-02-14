import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle, Users, Layers, BrainCircuit } from "lucide-react";

const checkpoints = [
  "Organizational Culture and Behavioral Dynamics",
  "Lifecycle-Specific Capability Development",
  "Practical Integration of Contemporary Artificial Intelligence Tools",
];

const approaches = [
  {
    icon: Users,
    title: "Culture as a Competitive Advantage",
    description:
      "We identify hidden cultural barriers that slow decision-making, weaken accountability, and limit innovation. Through leadership development, performance systems design, and behavioral change strategies, we transform culture into a measurable driver of results.",
  },
  {
    icon: Layers,
    title: "Lifecycle-Focused Capability Building",
    description:
      "Organizations at different stages require different solutions. A scaling enterprise needs leadership depth and operational systems, while a mature institution may require innovation and digital reinvention. Our advisory services are designed to match your growth phase and strategic trajectory.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Enabled Productivity and Profitability",
    description:
      "We help organizations responsibly deploy modern artificial intelligence tools to improve decision-making, automate processes, enhance customer experience, and unlock data-driven insights that strengthen competitiveness.",
  },
];

export default function OurPurpose() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <Container>
        {/* Our Purpose */}
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Purpose"
            title="Built for a Rapidly Changing Business Environment"
          />
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Today&apos;s organizations operate in a world defined by digital
              disruption, evolving workforce expectations, as well as volatile,
              uncertain and complex global markets. Success requires more than
              incremental improvement. It requires integrated transformation that
              aligns people, processes, culture, and intelligent technology.
            </p>
            <p className="text-lg font-semibold text-hanl-800">
              We help organizations move from intention to execution — and from
              potential to performance.
            </p>
          </div>
        </ScrollReveal>

        {/* Training & Strategic Consulting */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-16 lg:mb-20">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-hanl-800 tracking-tight text-center mb-6">
              Training and Strategic Consulting for Organizations Ready to Grow,
              Transform, and Lead
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Every organization has a strategy but a few achieve its full
              potential.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              The difference is rarely resources or ambition. It is alignment —
              between leadership, culture, systems, and the intelligent use of
              emerging technologies.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              We partner with organizations to unlock productivity,
              profitability, and sustainable growth by addressing three critical
              performance drivers:
            </p>
            <ul className="space-y-3 mb-6">
              {checkpoints.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Our training, which can be off-site, on-site, in-person or online
              and strategic consulting services are designed to help
              organizations perform better, adapt faster, and compete smarter
              across industries and markets.
            </p>
          </div>
        </ScrollReveal>

        {/* The Gap We Fill */}
        <ScrollReveal>
          <div className="bg-hanl-800 rounded-2xl p-8 sm:p-12 mb-16 lg:mb-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-500 mb-3">
              The Gap We Fill
            </p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
              Most Transformation Efforts Fall Short
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Organizations often invest heavily in strategy, technology, or
                workforce training. Yet results remain inconsistent when the
                deeper drivers of performance are overlooked.
              </p>
              <p>
                Unspoken cultural norms influence how decisions are made, how
                teams collaborate, and how innovation occurs. Organizational
                lifecycle stages determine whether systems, leadership
                structures, and workforce skills are fit for growth. Artificial
                intelligence is rapidly redefining productivity, but without the
                right institutional readiness, it remains underutilized or
                misapplied.
              </p>
              <p className="text-white font-semibold">
                We help organizations connect these critical elements into one
                integrated performance framework.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Our Approach */}
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Approach"
            title="Tailored Transformation for Real-World Results"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.12}>
                <div className="bg-white rounded-xl shadow-md p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full border-t-4 border-accent-500">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 mb-5">
                    <Icon className="h-7 w-7 text-accent-500" />
                  </div>
                  <h3 className="text-lg font-bold text-hanl-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
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
