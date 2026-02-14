import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { facultyStats } from "@/lib/constants";

export default function FacultyPartners() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Expertise"
            title="World-Class Faculty & Strategic Partnerships"
            description="Our instructors bring decades of hands-on industry experience combined with AI and technology tools."
          />
        </ScrollReveal>

        {/* Faculty Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {facultyStats.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.12}>
                <div className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent-500/30 hover:shadow-md transition-all duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/10 mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent-500" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-hanl-800 mb-2">
                    {item.stat}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Partners */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-8">
              Trusted by Leading Organizations Across Nigeria
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 rounded-lg bg-slate-100 flex items-center justify-center"
                >
                  <span className="text-xs text-slate-400 font-medium">
                    Partner Logo
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
