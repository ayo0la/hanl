"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TabGroup from "@/components/ui/TabGroup";
import Badge from "@/components/ui/Badge";
import DetailedOfferings from "./DetailedOfferings";
import { courseCategories } from "@/lib/constants";
import { CheckCircle, BookOpen } from "lucide-react";
import type { CourseCategory } from "@/types";

function CategoryContent({ category }: { category: CourseCategory }) {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Description & Topics */}
        <div>
          <h3 className="text-2xl font-bold text-hanl-800 mb-3">
            {category.fullTitle}
          </h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            {category.description}
          </p>
          <h4 className="text-sm font-bold uppercase tracking-wider text-hanl-700 mb-3">
            AI-Enhanced Topics
          </h4>
          <ul className="space-y-2">
            {category.topics.map((topic, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent-500 mt-1 shrink-0" />
                <span className="text-sm text-slate-700">{topic}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: AI Integration Focus */}
        <div className="bg-hanl-700 rounded-xl p-8 text-white">
          <div className="flex items-center gap-3 mb-5">
            <BookOpen className="h-6 w-6 text-accent-400" />
            <h4 className="text-lg font-bold">AI Integration Focus</h4>
          </div>
          <ul className="space-y-3 mb-6">
            {category.aiIntegration.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent-400 mt-1 shrink-0" />
                <span className="text-sm text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
          <Badge variant="accent" className="text-sm">
            {category.courseCount} Courses
          </Badge>
        </div>
      </div>

      {/* Detailed Course Offerings */}
      <DetailedOfferings category={category} />
    </div>
  );
}

export default function CourseCategories() {
  const tabs = courseCategories.map((cat) => ({
    label: cat.shortName,
    content: <CategoryContent category={cat} />,
  }));

  return (
    <section id="courses" className="py-20 lg:py-28 bg-white">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our Curriculum"
            title="Comprehensive Course Categories"
            description="Seven specialized learning tracks, each integrating AI and automation alongside traditional industry expertise."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <TabGroup tabs={tabs} />
        </ScrollReveal>
      </Container>
    </section>
  );
}
