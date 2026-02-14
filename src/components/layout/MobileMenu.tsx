"use client";

import { navLinks } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 bg-hanl-900 xl:hidden"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) =>
              link.disabled ? (
                <span
                  key={link.href}
                  className="text-2xl font-bold uppercase tracking-wide text-white/30 cursor-not-allowed"
                >
                  {link.label}
                </span>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="text-2xl font-bold uppercase tracking-wide text-white hover:text-accent-500 transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <div className="mt-4">
              <Button href="#contact" variant="primary" size="lg" onClick={onClose}>
                Request a Proposal
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
