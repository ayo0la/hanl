"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import type { CourseCategory, CourseSubcategory, CourseTrack } from "@/types";
import { ChevronDown, BookOpen } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface SubcategoryAccordionProps {
  subcategory: CourseSubcategory;
  defaultOpen?: boolean;
}

function SubcategoryAccordion({ subcategory, defaultOpen = false }: SubcategoryAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors cursor-pointer",
          isOpen ? "bg-hanl-50 text-hanl-800" : "text-slate-700 hover:bg-slate-50"
        )}
      >
        <span className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-accent-500" />
          {subcategory.name}
          <span className="text-xs font-normal text-slate-400">
            ({subcategory.courses.length} courses)
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="px-4 pb-4 pt-2 space-y-1.5">
              {subcategory.courses.map((course, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-accent-500 mt-1.5">•</span>
                  <span className="flex items-center gap-2">
                    {course.name}
                    {course.isNew && (
                      <Badge variant="gold" className="text-[10px] py-0 px-1.5">
                        NEW
                      </Badge>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface TrackSectionProps {
  track: CourseTrack;
}

function TrackSection({ track }: TrackSectionProps) {
  return (
    <div className="mb-6 last:mb-0">
      <h4 className="text-sm font-bold uppercase tracking-wider text-hanl-700 mb-3 flex items-center gap-2">
        <span className="h-1 w-4 bg-accent-500 rounded-full" />
        {track.name}
      </h4>
      <div className="space-y-2 pl-2">
        {track.subcategories.map((subcategory, i) => (
          <SubcategoryAccordion key={i} subcategory={subcategory} defaultOpen={i === 0} />
        ))}
      </div>
    </div>
  );
}

interface DetailedOfferingsProps {
  category: CourseCategory;
}

export default function DetailedOfferings({ category }: DetailedOfferingsProps) {
  const hasTracks = category.tracks && category.tracks.length > 0;
  const hasSubcategories = category.subcategories && category.subcategories.length > 0;

  if (!hasTracks && !hasSubcategories) {
    return null;
  }

  return (
    <div className="mt-8 pt-8 border-t border-slate-200">
      <h3 className="text-sm font-bold uppercase tracking-wider text-hanl-700 mb-4">
        Full Course Catalog
      </h3>

      {hasTracks && (
        <div className="space-y-6">
          {category.tracks!.map((track, i) => (
            <TrackSection key={i} track={track} />
          ))}
        </div>
      )}

      {hasSubcategories && !hasTracks && (
        <div className="space-y-2">
          {category.subcategories!.map((subcategory, i) => (
            <SubcategoryAccordion key={i} subcategory={subcategory} defaultOpen={i === 0} />
          ))}
        </div>
      )}
    </div>
  );
}
