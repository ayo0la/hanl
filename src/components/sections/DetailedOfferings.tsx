"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import type { CourseCategory, CourseSubcategory, CourseTrack } from "@/types";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface SubcategoryAccordionProps {
  subcategory: CourseSubcategory;
  defaultOpen?: boolean;
}

function SubcategoryAccordion({ subcategory, defaultOpen = false }: SubcategoryAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left transition-colors cursor-pointer group"
      >
        <span className="flex items-center gap-3">
          {/* Active indicator dot */}
          <span
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              isOpen ? "bg-accent-500" : "bg-transparent"
            )}
          />
          <span
            className={cn(
              "font-medium tracking-wide transition-colors",
              isOpen ? "text-hanl-800" : "text-slate-700 group-hover:text-hanl-700"
            )}
          >
            {subcategory.name}
          </span>
        </span>
        <span className="flex items-center gap-4">
          <span className="text-sm text-slate-400">
            {subcategory.courses.length} {subcategory.courses.length === 1 ? "course" : "courses"}
          </span>
          <span
            className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center transition-colors",
              isOpen
                ? "bg-hanl-700 text-white"
                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
            )}
          >
            {isOpen ? (
              <Minus className="h-3.5 w-3.5" />
            ) : (
              <Plus className="h-3.5 w-3.5" />
            )}
          </span>
        </span>
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
            <ul className="pl-5 pb-4 space-y-2">
              {subcategory.courses.map((course, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                  <span className="text-accent-500 mt-1">—</span>
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
    <div className="mb-8 last:mb-0">
      <h4 className="text-xs font-bold uppercase tracking-widest text-hanl-600 mb-4 pb-2 border-b-2 border-hanl-200">
        {track.name}
      </h4>
      <div>
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
    <div className="mt-10 pt-8 border-t border-slate-200">
      <h3 className="text-xs font-bold uppercase tracking-widest text-hanl-600 mb-6">
        Full Course Catalog
      </h3>

      {hasTracks && (
        <div>
          {category.tracks!.map((track, i) => (
            <TrackSection key={i} track={track} />
          ))}
        </div>
      )}

      {hasSubcategories && !hasTracks && (
        <div>
          {category.subcategories!.map((subcategory, i) => (
            <SubcategoryAccordion key={i} subcategory={subcategory} defaultOpen={i === 0} />
          ))}
        </div>
      )}
    </div>
  );
}
