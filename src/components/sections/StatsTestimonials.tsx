"use client";

import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats, testimonials } from "@/lib/constants";
import { Quote } from "lucide-react";

export default function StatsTestimonials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <Container>
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-extrabold text-hanl-700 mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-hanl-800 text-center mb-10">
            What Our Clients Say
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <div className="bg-white rounded-xl shadow-md p-8 h-full flex flex-col">
                <Quote className="h-8 w-8 text-accent-500/20 mb-4" />
                <p className="text-slate-700 italic leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-hanl-800 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-500">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
