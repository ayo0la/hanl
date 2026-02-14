import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Briefcase,
  GraduationCap,
  Users,
  Building2,
  BrainCircuit,
  Search,
  PenTool,
  Rocket,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Strategic Consulting",
    description:
      "We design growth, transformation, and competitiveness strategies grounded in organizational reality and industry dynamics.",
  },
  {
    icon: GraduationCap,
    title: "Leadership and Workforce Training",
    description:
      "We equip executives, managers, and technical teams with the skills required to lead high-performing, adaptable organizations.",
  },
  {
    icon: Users,
    title: "Organizational Culture Transformation",
    description:
      "We build accountability systems, strengthen collaboration, and align leadership behaviors with performance goals.",
  },
  {
    icon: Building2,
    title: "Institutional and Operational Strengthening",
    description:
      "We improve governance frameworks, operational efficiency, and service delivery models across both private and public sector organizations.",
  },
  {
    icon: BrainCircuit,
    title: "AI Readiness and Implementation Advisory",
    description:
      "We guide organizations in adopting contemporary AI tools that increase efficiency, enhance analytics, and improve workforce productivity.",
  },
];

const methodologySteps = [
  {
    icon: Search,
    step: "01",
    title: "Diagnose",
    description:
      "We conduct comprehensive assessments of culture, capability maturity, workforce readiness, leadership effectiveness, and digital and AI adoption opportunities.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design",
    description:
      "We develop customized training programs, strategic roadmaps, and implementation frameworks tailored to industry context and organizational lifecycle stage.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Develop",
    description:
      "We deliver executive coaching, workforce upskilling, operational advisory support, and AI integration training through practical, implementation-focused engagements.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Deliver Sustainable Results",
    description:
      "We implement monitoring and evaluation systems that ensure measurable productivity gains, profitability growth, and long-term institutional resilience.",
  },
];

export default function WhatWeDeliver() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <Container>
        {/* What We Deliver */}
        <ScrollReveal>
          <SectionHeading
            eyebrow="What We Deliver"
            title="End-to-End Solutions for Organizational Growth"
          />
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-8 mb-20 lg:mb-28">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={index}
                delay={index * 0.1}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.375rem)]"
              >
                <div className="bg-white rounded-xl shadow-md p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full border-l-4 border-accent-500">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-500/10 mb-5">
                    <Icon className="h-7 w-7 text-accent-500" />
                  </div>
                  <h3 className="text-lg font-bold text-hanl-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Our Transformation Methodology */}
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Transformation Methodology"
            title="A Proven Approach to Lasting Impact"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologySteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.12}>
                <div className="relative bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 h-full">
                  <span className="text-5xl font-black text-accent-500/15 absolute top-4 right-6">
                    {item.step}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-hanl-800 mb-5">
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
