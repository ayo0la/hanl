"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/constants";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-hanl-800/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-white">
              HTC
            </span>
            <span className="hidden sm:inline text-xs font-medium text-accent-500 tracking-wider uppercase">
              Consulting
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) =>
              link.disabled ? (
                <span
                  key={link.href}
                  className="text-xs font-semibold uppercase tracking-wide text-white/30 cursor-not-allowed whitespace-nowrap"
                >
                  {link.label}
                </span>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-wide text-white/80 hover:text-accent-500 transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Button href="#contact" variant="primary" size="sm">
              Request a Proposal
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
