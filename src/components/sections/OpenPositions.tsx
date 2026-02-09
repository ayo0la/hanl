"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { jobListings } from "@/lib/constants";
import { MapPin, Briefcase, Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { JobListing } from "@/types";

function JobCard({ job }: { job: JobListing }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
      >
        <div className="flex-1 min-w-0">
          <h3
            className={cn(
              "text-lg font-semibold transition-colors",
              isExpanded
                ? "text-hanl-800"
                : "text-slate-700 group-hover:text-hanl-700"
            )}
          >
            {job.title}
          </h3>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="h-3.5 w-3.5" />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-slate-500">
              <Briefcase className="h-3.5 w-3.5" />
              {job.type}
            </span>
            <Badge variant="accent" className="text-[10px] py-0 px-2">
              {job.department}
            </Badge>
          </div>
        </div>
        <span
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-colors",
            isExpanded
              ? "bg-hanl-700 text-white"
              : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
          )}
        >
          {isExpanded ? (
            <Minus className="h-4 w-4" />
          ) : (
            <Plus className="h-4 w-4" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-6 space-y-5">
              <p className="text-sm text-slate-600 leading-relaxed">
                {job.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-hanl-600 mb-2">
                  Responsibilities
                </h4>
                <ul className="space-y-1.5">
                  {job.responsibilities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-hanl-600 mb-2">
                  Requirements
                </h4>
                <ul className="space-y-1.5">
                  {job.requirements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button href={`/careers/${job.id}`} variant="primary" size="sm">
                Apply Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function OpenPositions() {
  return (
    <section id="positions" className="py-20 lg:py-28 bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="OPEN POSITIONS"
          title="Current Opportunities"
          description="Explore our open roles and find the right fit for your expertise and career goals."
        />

        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {jobListings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
