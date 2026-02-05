import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { deliveryMethods } from "@/lib/constants";
import { CheckCircle } from "lucide-react";

export default function DeliveryMethods() {
  return (
    <section id="delivery" className="py-20 lg:py-28 bg-slate-50">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="How We Deliver"
            title="Flexible Learning for Every Organization"
            description="Choose from multiple delivery formats designed to fit your organization's schedule, budget, and learning objectives."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {deliveryMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.01] transition-all duration-300 h-full flex flex-col">
                  {/* Gradient Header */}
                  <div
                    className={`bg-gradient-to-r ${method.gradient} h-32 flex items-center justify-center`}
                  >
                    <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-extrabold text-hanl-800 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {method.description}
                    </p>
                    <ul className="space-y-3 mt-auto">
                      {method.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
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
