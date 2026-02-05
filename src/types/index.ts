import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ValueProp {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface DeliveryMethod {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export interface Sector {
  icon: LucideIcon;
  name: string;
  oneLiner: string;
}

// Individual course item
export interface Course {
  name: string;
  isNew?: boolean;
}

// A subcategory containing courses
export interface CourseSubcategory {
  name: string;
  courses: Course[];
}

// A major track within a category (for Energy: Oil&Gas vs Power)
export interface CourseTrack {
  name: string;
  subcategories: CourseSubcategory[];
}

// Course category with detailed offerings
export interface CourseCategory {
  shortName: string;
  fullTitle: string;
  description: string;
  topics: string[];
  aiIntegration: string[];
  courseCount: string;
  // Detailed course offerings
  tracks?: CourseTrack[];
  subcategories?: CourseSubcategory[];
}

export interface FlagshipProgram {
  name: string;
  description: string;
  duration: string;
  format: string;
  highlights: string[];
  stripeColor: string;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FacultyStat {
  icon: LucideIcon;
  stat: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export interface FooterSection {
  heading: string;
  links: { label: string; href: string }[];
}
