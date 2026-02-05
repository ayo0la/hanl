"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabGroupProps {
  tabs: Tab[];
}

export default function TabGroup({ tabs }: TabGroupProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <div>
      {/* Desktop Tabs */}
      <div className="hidden md:block">
        <div className="flex gap-1 border-b border-slate-200 overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "px-4 py-3 text-sm font-semibold whitespace-nowrap transition-all duration-200 border-b-3 -mb-px cursor-pointer",
                index === activeIndex
                  ? "border-accent-500 text-hanl-800"
                  : "border-transparent text-slate-400 hover:text-slate-600"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="pt-8"
          >
            {tabs[activeIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden space-y-2">
        {tabs.map((tab, index) => (
          <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() =>
                setOpenAccordion(openAccordion === index ? null : index)
              }
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 text-sm font-semibold transition-colors cursor-pointer",
                openAccordion === index
                  ? "bg-hanl-50 text-hanl-800"
                  : "text-slate-600 hover:bg-slate-50"
              )}
            >
              {tab.label}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openAccordion === index && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {openAccordion === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4">{tab.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
