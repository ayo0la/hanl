import {
  Brain,
  Building2,
  Award,
  BookOpen,
  Monitor,
  Wrench,
  Landmark,
  Zap,
  Building,
  Factory,
  Wifi,
  Heart,
  GraduationCap,
  Home,
  Users,
  Globe,
  Target,
  TrendingUp,
  Shield,
  Layers,
  Headphones,
  Scale,
  DollarSign,
  Clock,
  Lightbulb,
  Rocket,
  Handshake,
  Sparkles,
} from "lucide-react";
import type {
  NavLink,
  ValueProp,
  DeliveryMethod,
  Sector,
  CourseCategory,
  FlagshipProgram,
  Benefit,
  FacultyStat,
  Stat,
  Testimonial,
  FooterSection,
  JobListing,
  FacilitatorBenefit,
} from "@/types";
import {
  financialServicesSubcategories,
  energyTracks,
  criticalSkillsSubcategories,
  governmentSubcategories,
  manufacturingSubcategories,
  itTelecomSubcategories,
  boardCSuiteSubcategories,
  educationSubcategories,
} from "@/lib/courses";

export const siteConfig = {
  name: "HTC",
  fullName: "Honors Training & Consulting",
  tagline: "Unlock Productivity.\nStrengthen Profitability.\nTransform Capability.",
  description:
    "Premier learning and capacity-building organization combining 20+ years of training methodologies with cutting-edge AI and automation expertise. 1,500+ courses designed for the Nigerian professional landscape.",
  url: "https://www.honorstraining.ng",
  email: "info@honorstraining.ng",
  contactEmails: ["amorakinyo1@gmail.com", "aymorakinyo1@gmail.com"],
  phone: "+1 (346) 376-8706",
  address: "Lagos, Nigeria",
};

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Learning Solutions", href: "#delivery" },
  { label: "Industry Sectors", href: "#sectors" },
  { label: "Programs", href: "#programs" },
  { label: "Faculty", href: "/faculty", disabled: true },
  { label: "Board Profile", href: "/board-profile", disabled: true },
  { label: "Careers", href: "/careers", disabled: true },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "HORNS TRAINING & CONSULTING",
  headline: "Powering Performance Where Strategy, Culture, and Intelligence Meet",
  subtitle:
    "Premier strategic and capacity-building organization combining decades of strategic  methodologies with cutting edge AI integration, delivering practical implementation focus programs designed for the business landscape",
  primaryCta: { label: "Explore Programs", href: "#programs" },
  secondaryCta: { label: "Request a Proposal", href: "#contact" },
};

export const valuePropositions: ValueProp[] = [
  {
    icon: Brain,
    title: "Digital Approach",
    description:
      "Every program integrates artificial intelligence from the ground up, not as an afterthought. Your teams learn to work alongside AI from day one.",
  },
  {
    icon: Building2,
    title: "Industry-Specific Training",
    description:
      "Curricula tailored to Nigeria's key economic sectors — from financial services and energy to agriculture and government.",
  },
  {
    icon: Award,
    title: "20+ Years of Excellence",
    description:
      "Two decades of training methodology refined with 1,500+ courses and local faculty who understand the Nigerian business context.",
  },
  {
    icon: Lightbulb,
    title: "Cultural Approach",
    description: "",
  },
  {
    icon: Globe,
    title: "Lifecycle Approach",
    description: "",
  },
];

export const deliveryMethods: DeliveryMethod[] = [
  {
    icon: BookOpen,
    title: "Blended Learning",
    description:
      "Combines instructor-led sessions with digital resources for maximum knowledge retention.",
    features: [
      "In-person workshops with AI-enhanced curricula",
      "Digital pre-work and post-session reinforcement",
      "Real-time progress tracking and AI-powered assessments",
      "Customizable schedules for working professionals",
    ],
    gradient: "from-hanl-700 to-hanl-500",
  },
  {
    icon: Monitor,
    title: "Digital Learning",
    description:
      "Self-paced online programs accessible anywhere, featuring interactive AI-driven modules.",
    features: [
      "On-demand video lectures from expert faculty",
      "AI-powered adaptive learning paths",
      "Interactive simulations and case studies",
      "Mobile-friendly platform with offline access",
    ],
    gradient: "from-accent-600 to-accent-500",
  },
  {
    icon: Wrench,
    title: "AI Implementation Support",
    description:
      "Hands-on guidance to integrate AI tools and automation into your organization's workflows.",
    features: [
      "AI readiness assessment for your organization",
      "Custom AI implementation roadmaps",
      "Pilot project design and execution support",
      "Ongoing mentorship and technical advisory",
    ],
    gradient: "from-hanl-800 to-accent-500",
  },
];

export const industrySectors: Sector[] = [
  {
    icon: Landmark,
    name: "Financial Services",
    oneLiner: "Banking, Insurance, Capital Markets",
  },
  {
    icon: Zap,
    name: "Energy & Power",
    oneLiner: "Oil & Gas, Renewables, Power",
  },
  {
    icon: Building,
    name: "Government",
    oneLiner: "Federal, State, MDAs",
  },
  {
    icon: Factory,
    name: "Manufacturing & Agriculture",
    oneLiner: "Production, Agritech, Export",
  },
  {
    icon: Wifi,
    name: "IT & Telecommunications",
    oneLiner: "Software, Networks, Digital Infrastructure",
  },
  {
    icon: Heart,
    name: "Healthcare",
    oneLiner: "Hospitals, Pharma, Health Tech",
  },
  {
    icon: GraduationCap,
    name: "Education",
    oneLiner: "Universities, EdTech, Research",
  },
  {
    icon: Home,
    name: "Real Estate & Construction",
    oneLiner: "Property, Urban Development, Smart Buildings",
  },
];

export const courseCategories: CourseCategory[] = [
  {
    shortName: "Financial Services",
    fullTitle: "Financial Services",
    description:
      "We offer a wide range of technical courses for financial institutions which could be customized to suit your needs. Deployed with highly experienced faculty with local & international exposure in Banking, Pension, Insurance, Capital Markets and their regulators.",
    topics: [
      "AI-Driven Credit Risk Assessment & Scoring",
      "Automated Fraud Detection Systems",
      "Predictive Analytics for Banking",
      "Machine Learning for AML Compliance",
      "Digital Banking Transformation",
      "Algorithmic Trading Fundamentals",
    ],
    aiIntegration: [
      "Real-time risk modeling with machine learning",
      "AI-powered KYC/KYB automation workflows",
      "Chatbot and virtual assistant deployment",
      "Robo-advisory wealth management systems",
    ],
    courseCount: "80+",
    subcategories: financialServicesSubcategories,
  },
  {
    shortName: "Energy",
    fullTitle: "Energy (Oil & Gas, Power)",
    description:
      "We offer a wide range of technical courses for Oil and Gas, Mining and Power institutions which could be customized to suit your needs. Deployed with highly experienced faculty with local & international exposure.",
    topics: [
      "Predictive Maintenance Using AI & IoT",
      "AI in Exploration & Seismic Analysis",
      "Automated Pipeline Monitoring",
      "Smart Grid Optimization with ML",
      "Renewable Energy Forecasting",
      "Digital Twin Technology for Assets",
    ],
    aiIntegration: [
      "Computer vision for safety and compliance monitoring",
      "AI-powered energy trading and price forecasting",
      "Automated meter reading and analytics",
      "IoT sensor networks for asset integrity",
    ],
    courseCount: "60+",
    tracks: energyTracks,
  },
  {
    shortName: "Critical Skills",
    fullTitle: "Critical Skills",
    description:
      "We offer a diverse range of on-demand customizable critical skills courses, all essential in helping your executives navigate today's constantly evolving professional and business landscape. Our learning solutions ensure optimum internalization and excellent post-learning impact.",
    topics: [
      "AI-Enhanced Leadership & Decision Making",
      "Data-Driven Strategic Planning",
      "Digital Communication & Collaboration",
      "Project Management with AI Tools",
      "HR Analytics & Talent Management",
      "Change Management for AI Adoption",
    ],
    aiIntegration: [
      "AI assistants for workplace productivity",
      "Automated recruitment and talent acquisition",
      "Sentiment analysis for employee engagement",
      "AI-powered performance management systems",
    ],
    courseCount: "120+",
    subcategories: criticalSkillsSubcategories,
  },
  {
    shortName: "Government",
    fullTitle: "Federal & State Government",
    description:
      "Having recognized the importance of human capital development as an accelerator for state economic growth, a comprehensive range of learning solutions have been designed for all levels of government employees towards creating a more effective and efficient public sector workforce.",
    topics: [
      "AI in Public Service Delivery",
      "Automated Document Processing & E-Government",
      "AI for Revenue Collection & Tax Optimization",
      "Predictive Analytics for Policy Making",
      "Smart City Technologies & IoT",
      "Government Process Automation",
    ],
    aiIntegration: [
      "Natural language processing for citizen services",
      "AI-driven transportation and traffic management",
      "Automated compliance and regulatory monitoring",
      "Data analytics for evidence-based governance",
    ],
    courseCount: "50+",
    subcategories: governmentSubcategories,
  },
  {
    shortName: "Manufacturing",
    fullTitle: "Export, Manufacturing & Agriculture",
    description:
      "We offer a broad range of technical courses on Exports, Manufacturing and Agriculture. Courses are designed to provide your institution with the skills and expertise needed to gain competitive edge in today's complex world of exports, production and agriculture.",
    topics: [
      "AI in Precision Agriculture & Crop Monitoring",
      "Automated Quality Control in Manufacturing",
      "Supply Chain Optimization with AI",
      "Predictive Demand Planning",
      "IoT & Sensor Networks for Agriculture",
      "AI for Export Market Analysis",
    ],
    aiIntegration: [
      "Computer vision for quality inspection",
      "Automated warehouse management systems",
      "Blockchain & AI in supply chain traceability",
      "Yield prediction and resource optimization",
    ],
    courseCount: "45+",
    subcategories: manufacturingSubcategories,
  },
  {
    shortName: "IT & Telecom",
    fullTitle: "IT & Telecommunications",
    description:
      "We offer industry-leading IT and Telecommunication training courses, delivered with highly competent tech-driven local and international faculties. Our courses are fully designed to meet our client's specific needs, ultimately helping them achieve overall business goals.",
    topics: [
      "Machine Learning Engineering",
      "Deep Learning & Neural Networks",
      "Natural Language Processing (NLP)",
      "Robotic Process Automation (RPA)",
      "Large Language Models & Generative AI",
      "Cloud AI Infrastructure & MLOps",
    ],
    aiIntegration: [
      "Hands-on projects with TensorFlow, PyTorch",
      "Certification tracks: Azure AI, AWS ML, Google Cloud AI",
      "Practical prompt engineering and LLM deployment",
      "End-to-end AI model development pipelines",
    ],
    courseCount: "150+",
    subcategories: itTelecomSubcategories,
  },
  {
    shortName: "Board & C-Suite",
    fullTitle: "Board Education & C-Suite Governance",
    description:
      "Executive programs designed for board members and C-suite leaders to understand, oversee, and strategically leverage AI for organizational transformation.",
    topics: [
      "AI Strategy for C-Suite Executives",
      "Board Oversight of AI & Emerging Technologies",
      "AI Risk Management & Governance Frameworks",
      "Digital Transformation Leadership",
      "AI Investment & ROI Analysis",
      "Ethical AI & Regulatory Compliance",
    ],
    aiIntegration: [
      "AI-driven business model innovation",
      "Cybersecurity governance in the age of AI",
      "Responsible AI frameworks and compliance",
      "Strategic AI roadmap development",
    ],
    courseCount: "30+",
    subcategories: boardCSuiteSubcategories,
  },
  {
    shortName: "Education",
    fullTitle: "Education & Research",
    description:
      "Comprehensive learning solutions for universities, polytechnics, and educational institutions. Our programs empower educators, administrators, and researchers with modern pedagogical approaches, institutional management skills, and AI-powered educational technologies.",
    topics: [
      "AI-Powered Learning Management Systems",
      "EdTech Innovation & Digital Curriculum Design",
      "Data Analytics for Academic Performance",
      "Automation in University Administration",
      "AI for Research & Academic Publishing",
    ],
    aiIntegration: [
      "Adaptive learning platforms with personalized pathways",
      "Automated assessment and intelligent tutoring systems",
      "Predictive analytics for student retention",
      "AI-assisted research and literature analysis tools",
    ],
    courseCount: "20+",
    subcategories: educationSubcategories,
  },
];

export const flagshipPrograms: FlagshipProgram[] = [
  {
    name: "AI Transformation Academy",
    description:
      "Comprehensive executive program preparing senior leaders and their teams to lead AI transformation initiatives within their organizations.",
    duration: "12 Weeks",
    format: "Blended",
    highlights: [
      "Hands-on AI tool implementation workshops",
      "Industry-specific AI use case development",
      "Personal AI transformation roadmap as capstone",
    ],
    stripeColor: "bg-accent-500",
  },
  {
    name: "Automation of Things Bootcamp",
    description:
      "Intensive hands-on bootcamp teaching teams to design, build, and deploy automation solutions tailored to Nigerian business environments.",
    duration: "8 Weeks",
    format: "Intensive",
    highlights: [
      "Real-world automation project delivery",
      "RPA certification track included",
      "Cross-industry case studies and mentorship",
    ],
    stripeColor: "bg-hanl-600",
  },
  {
    name: "Generative AI for Professionals",
    description:
      "Master generative AI tools and techniques to dramatically enhance productivity, creativity, and decision-making in your professional role.",
    duration: "6 Weeks",
    format: "Online",
    highlights: [
      "Prompt engineering and AI workflow design",
      "Industry-specific use case laboratories",
      "ChatGPT, Claude, and Gemini mastery",
    ],
    stripeColor: "bg-gold-500",
  },
  {
    name: "AI Implementation Accelerator",
    description:
      "Fast-track your organization's AI adoption with a structured program combining training, consulting, and implementation support.",
    duration: "16 Weeks",
    format: "Organization-wide",
    highlights: [
      "Dedicated AI implementation consultants",
      "Measurable ROI framework and reporting",
      "Post-program deployment assistance",
    ],
    stripeColor: "bg-emerald-500",
  },
];

export const clientBenefits: Benefit[] = [
  {
    icon: Target,
    title: "Future-Ready Workforce",
    description:
      "Employees trained to leverage AI tools confidently across all business functions.",
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description:
      "Structured assessment framework that quantifies learning impact and productivity gains.",
  },
  {
    icon: Globe,
    title: "Nigerian Context, Global Standards",
    description:
      "Curricula designed for local market realities with international best practices.",
  },
  {
    icon: Layers,
    title: "Scalable Programs",
    description:
      "From individual upskilling to organization-wide transformation covering hundreds of staff.",
  },
  {
    icon: Headphones,
    title: "Continuous Support",
    description:
      "Post-program mentorship, community access, and implementation guidance.",
  },
  {
    icon: Shield,
    title: "Compliance & Governance",
    description:
      "AI ethics and governance training that keeps your organization ahead of regulations.",
  },
];

export const facultyStats: FacultyStat[] = [
  {
    icon: Users,
    stat: "60+",
    description:
      "Seasoned professionals with deep industry and AI/ML expertise",
  },
  {
    icon: Globe,
    stat: "Local & International",
    description:
      "Nigerian business context combined with global AI thought leaders",
  },
  {
    icon: BookOpen,
    stat: "1,500+",
    description:
      "Extensive curriculum library continuously updated with emerging AI applications",
  },
];

export const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 1500, suffix: "+", label: "Courses Delivered" },
  { value: 60, suffix: "+", label: "Expert Faculty" },
  { value: 8, suffix: "", label: "Industry Sectors" },
];

// TODO: Replace with real testimonials
export const testimonials: Testimonial[] = [
  {
    quote:
      "HTC's AI Transformation Academy completely changed how our leadership team approaches technology adoption. The practical, implementation-focused approach made all the difference.",
    author: "Adebayo Ogunleye",
    title: "Chief Digital Officer",
    company: "Leading Nigerian Bank",
  },
  {
    quote:
      "The Automation of Things Bootcamp delivered measurable results within weeks. Our team automated three critical processes that reduced operational costs by 40%.",
    author: "Funke Adeyemi",
    title: "Head of Operations",
    company: "Major Energy Company",
  },
  {
    quote:
      "What sets HTC apart is their deep understanding of the Nigerian business environment combined with world-class AI expertise. Truly transformative.",
    author: "Emeka Nwankwo",
    title: "Permanent Secretary",
    company: "Federal Ministry",
  },
];

export const ctaContent = {
  headline: "Partner With Us to Build a Future-Ready Organization",
  subtitle:
    "Whether you are strengthening institutional capacity, scaling into new markets, modernizing operations, or preparing your workforce for AI-driven transformation, we provide the insight, training, and strategic guidance required to succeed.",
  trustLine: "Join 500+ organizations already building AI-ready teams",
};

export const footerSections: FooterSection[] = [
  {
    heading: "Quick Links",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Learning Solutions", href: "#delivery" },
      { label: "Industry Sectors", href: "#sectors" },
      { label: "Programs", href: "#programs" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Programs",
    links: [
      { label: "AI Transformation Academy", href: "#programs" },
      { label: "Automation of Things Bootcamp", href: "#programs" },
      { label: "Generative AI for Professionals", href: "#programs" },
      { label: "AI Implementation Accelerator", href: "#programs" },
    ],
  },
];

export const industryOptions = [
  "Financial Services",
  "Energy & Power",
  "Government",
  "Manufacturing & Agriculture",
  "IT & Telecommunications",
  "Healthcare",
  "Education",
  "Real Estate & Construction",
  "Other",
];

export const programInterestOptions = [
  "AI Transformation Academy",
  "Automation of Things Bootcamp",
  "Generative AI for Professionals",
  "AI Implementation Accelerator",
  "Custom Corporate Training",
  "Not Sure — Need Guidance",
];

// ─── Careers Page ────────────────────────────────────────

export const facilitatorBenefits: FacilitatorBenefit[] = [
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description:
      "Industry-leading facilitator fees with performance bonuses and timely payments for every engagement.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Choose engagements that fit your calendar. Deliver in-person, virtual, or blended sessions on your terms.",
  },
  {
    icon: Lightbulb,
    title: "Cutting-Edge Content",
    description:
      "Teach from constantly updated, AI-integrated curricula developed by subject matter experts and instructional designers.",
  },
  {
    icon: Rocket,
    title: "Professional Growth",
    description:
      "Access train-the-trainer programs, certifications, and continuous learning opportunities to sharpen your expertise.",
  },
  {
    icon: Handshake,
    title: "Collaborative Community",
    description:
      "Join a network of 60+ experienced facilitators who share best practices, insights, and peer mentorship.",
  },
  {
    icon: Sparkles,
    title: "Meaningful Impact",
    description:
      "Shape the future of Nigerian professionals by delivering transformative learning experiences across 8 industry sectors.",
  },
];

export const jobListings: JobListing[] = [
  {
    id: "senior-facilitator-financial-services",
    title: "Senior Training Facilitator — Financial Services",
    department: "Financial Services",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    description:
      "Lead high-impact training programs for banks, insurance companies, capital market firms, and their regulators. You will design and deliver courses covering credit risk, treasury, trade finance, and AI-driven financial solutions.",
    responsibilities: [
      "Deliver instructor-led and blended training sessions for financial services clients",
      "Customize course content based on client needs and industry developments",
      "Develop case studies and practical exercises using real-world Nigerian financial scenarios",
      "Mentor junior facilitators and contribute to curriculum review processes",
      "Provide post-training support and implementation guidance to participants",
    ],
    requirements: [
      "10+ years of experience in banking, insurance, or capital markets",
      "Proven track record of delivering corporate training programs",
      "Professional certifications (ACCA, CFA, FRM, CIBN, or equivalent) preferred",
      "Strong presentation and facilitation skills with ability to engage senior audiences",
      "Understanding of AI applications in financial services is a plus",
    ],
  },
  {
    id: "facilitator-energy-power",
    title: "Training Facilitator — Energy & Power",
    department: "Energy & Power",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    description:
      "Deliver technical and managerial training programs for oil and gas, power, and renewable energy organizations. You will facilitate courses on upstream/downstream operations, power distribution, and energy transition topics.",
    responsibilities: [
      "Facilitate training programs covering upstream, downstream, and power sector topics",
      "Adapt course materials for different technical audiences and experience levels",
      "Incorporate industry developments and regulatory changes into training content",
      "Coordinate with client L&D teams to assess training needs and design solutions",
      "Evaluate participant performance and provide actionable feedback reports",
    ],
    requirements: [
      "8+ years of experience in oil & gas, power generation, or renewable energy",
      "Experience designing or delivering technical training programs",
      "Engineering background or relevant technical qualifications preferred",
      "Familiarity with Nigerian energy sector regulations (DPR/NUPRC, NERC)",
      "Ability to simplify complex technical concepts for diverse audiences",
    ],
  },
  {
    id: "ai-automation-specialist",
    title: "AI & Automation Training Specialist",
    department: "Technology",
    location: "Lagos, Nigeria (Hybrid)",
    type: "Full-Time",
    description:
      "Pioneer our AI-first training programs across all industry verticals. You will develop and deliver courses on machine learning, generative AI, RPA, and digital transformation tailored to Nigerian business contexts.",
    responsibilities: [
      "Design and deliver AI, ML, and automation training programs across multiple sectors",
      "Build hands-on labs, demos, and practical exercises using real-world tools and datasets",
      "Stay current with AI developments and continuously update course content",
      "Support client organizations with AI readiness assessments and implementation roadmaps",
      "Contribute to HTC's thought leadership through articles, webinars, and conference presentations",
    ],
    requirements: [
      "5+ years of hands-on experience with AI/ML technologies in production environments",
      "Experience with popular frameworks (TensorFlow, PyTorch, scikit-learn) and cloud AI platforms",
      "Proven ability to teach complex technical topics to non-technical audiences",
      "Portfolio of AI projects or published work demonstrating applied expertise",
      "Cloud certifications (AWS ML, Azure AI, GCP) are a strong advantage",
    ],
  },
  {
    id: "facilitator-it-telecom",
    title: "Training Facilitator — IT & Telecommunications",
    department: "IT & Telecommunications",
    location: "Lagos, Nigeria",
    type: "Contract",
    description:
      "Deliver IT and telecom training programs covering cybersecurity, cloud computing, 5G technologies, and digital governance for tech companies and enterprise IT teams.",
    responsibilities: [
      "Facilitate courses on cybersecurity, cloud, networking, and telecommunications technologies",
      "Develop practical lab exercises and simulation environments for hands-on learning",
      "Customize technical content for different skill levels from beginner to advanced",
      "Maintain and update technical training environments and demo systems",
      "Provide certification preparation support for industry-recognized credentials",
    ],
    requirements: [
      "7+ years of experience in IT infrastructure, cybersecurity, or telecommunications",
      "Industry certifications (CISSP, CCNA, AWS Solutions Architect, or similar)",
      "Experience delivering instructor-led technical training",
      "Strong lab-building skills with virtualization and cloud platforms",
      "Knowledge of Nigerian telecom market and regulatory landscape preferred",
    ],
  },
  {
    id: "facilitator-critical-skills",
    title: "Training Facilitator — Critical Skills & Leadership",
    department: "Critical Skills",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    description:
      "Deliver management development, leadership, and soft skills training programs for mid-to-senior level professionals across all industry sectors. Focus areas include leadership competencies, strategic planning, HR analytics, and workplace effectiveness.",
    responsibilities: [
      "Facilitate leadership development, management, and professional skills programs",
      "Design engaging learning activities including role-plays, case studies, and group exercises",
      "Coach and mentor program participants on personal development goals",
      "Assess training needs and recommend appropriate learning interventions",
      "Track and measure training effectiveness using industry-standard evaluation frameworks",
    ],
    requirements: [
      "8+ years of experience in learning & development, HR, or organizational development",
      "Certified trainer or coach (ATD, ICF, CIPD, or equivalent) preferred",
      "Strong understanding of adult learning principles and instructional design",
      "Excellent presentation and group facilitation skills",
      "Experience working with C-suite and senior management audiences",
    ],
  },
  {
    id: "facilitator-government",
    title: "Training Facilitator — Government & Public Sector",
    department: "Government",
    location: "Abuja, Nigeria",
    type: "Contract",
    description:
      "Design and deliver capacity-building programs for federal and state government agencies, MDAs, and parastatals. Programs cover public sector reform, digital transformation, revenue optimization, and governance excellence.",
    responsibilities: [
      "Deliver training programs for government agencies across federal and state levels",
      "Adapt private sector best practices for public sector contexts and constraints",
      "Develop case studies relevant to Nigerian government operations and challenges",
      "Support client agencies with post-training implementation and change management",
      "Build relationships with government L&D departments and training coordinators",
    ],
    requirements: [
      "8+ years of experience in public administration, governance, or government consulting",
      "Demonstrated experience delivering training to government audiences",
      "Understanding of Nigerian public sector structure, policies, and reform agenda",
      "Strong facilitation skills with ability to navigate hierarchical organizational cultures",
      "Master's degree in Public Administration, Public Policy, or related field preferred",
    ],
  },
  {
    id: "curriculum-development-lead",
    title: "Curriculum Development Lead",
    department: "Learning Design",
    location: "Lagos, Nigeria (Hybrid)",
    type: "Full-Time",
    description:
      "Lead the design and development of HTC's training curricula across all industry verticals. You will ensure all programs are pedagogically sound, industry-relevant, and integrate AI and emerging technologies throughout.",
    responsibilities: [
      "Lead end-to-end curriculum design for new courses and program updates",
      "Conduct industry research and needs analysis to identify training gaps",
      "Collaborate with subject matter experts to develop accurate, current content",
      "Establish quality standards and review processes for all training materials",
      "Integrate AI tools and digital learning methodologies into existing curricula",
    ],
    requirements: [
      "7+ years of experience in instructional design or curriculum development",
      "Strong understanding of adult learning theories and assessment design",
      "Experience designing training for corporate or professional audiences",
      "Proficiency with e-learning authoring tools and LMS platforms",
      "Background in multiple industry domains is a significant advantage",
    ],
  },
  {
    id: "training-program-coordinator",
    title: "Training Program Coordinator",
    department: "Operations",
    location: "Lagos, Nigeria",
    type: "Full-Time",
    description:
      "Coordinate the planning, scheduling, and logistics for HTC's training programs across all delivery formats. You will serve as the primary point of contact between facilitators, clients, and internal teams to ensure seamless program delivery.",
    responsibilities: [
      "Plan and coordinate training schedules, venues, and logistics across multiple programs",
      "Manage facilitator assignments and availability scheduling",
      "Handle client communications including pre-training coordination and post-training follow-up",
      "Maintain training records, attendance, and participant feedback databases",
      "Support proposal development and client onboarding processes",
    ],
    requirements: [
      "3+ years of experience in training coordination, event management, or project coordination",
      "Excellent organizational skills with ability to manage multiple concurrent programs",
      "Strong communication skills and professional client-facing demeanor",
      "Proficiency in Microsoft Office suite and project management tools",
      "Experience in the training or professional development industry preferred",
    ],
  },
];
