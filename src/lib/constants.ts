import {
  Brain,
  Cog,
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
} from "@/types";

export const siteConfig = {
  name: "HTC",
  fullName: "Honors Training & Consulting",
  tagline: "Empowering Organizations for the AI-Powered Future",
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
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "AI-FIRST LEARNING SOLUTIONS",
  headline: "Empowering Organizations for the AI-Powered Future",
  subtitle:
    "Premier learning and capacity-building organization combining 20+ years of proven training methodologies with cutting-edge AI and automation expertise. 1,500+ courses designed for the Nigerian professional landscape.",
  primaryCta: { label: "Explore Programs", href: "#programs" },
  secondaryCta: { label: "Request a Proposal", href: "#contact" },
};

export const valuePropositions: ValueProp[] = [
  {
    icon: Brain,
    title: "AI-First Approach",
    description:
      "Every program integrates artificial intelligence from the ground up, not as an afterthought. Your teams learn to work alongside AI from day one.",
  },
  {
    icon: Cog,
    title: "Automation of Things",
    description:
      "Proprietary framework bridging the gap between IoT concepts and real-world automation implementation across Nigerian industries.",
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
    fullTitle: "Financial Services + AI",
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
    subcategories: [
      {
        name: "AI & Automation Courses",
        courses: [
          { name: "AI-Driven Credit Risk Assessment & Scoring", isNew: true },
          { name: "Automated Fraud Detection Systems", isNew: true },
          { name: "Predictive Analytics for Banking", isNew: true },
          { name: "Machine Learning for AML Compliance", isNew: true },
          { name: "Digital Banking Transformation", isNew: true },
          { name: "Algorithmic Trading Fundamentals", isNew: true },
        ],
      },
      {
        name: "Banking Programmes",
        courses: [
          { name: "Credit Suite – Commercial, Small Business, Consumer" },
          { name: "Project Finance School" },
          { name: "Loan Workouts" },
          { name: "SME & Retail Banking" },
          { name: "Trade Finance" },
          { name: "Agriculture Finance" },
          { name: "Selling Treasury & Corporate Banking Products" },
        ],
      },
      {
        name: "Non-Banking Programmes",
        courses: [
          { name: "Capital Market" },
          { name: "Corporate Finance" },
          { name: "Investment & Asset Management" },
          { name: "Insurance School" },
          { name: "Pension Management" },
        ],
      },
      {
        name: "Risk Management",
        courses: [
          { name: "Risk School" },
          { name: "Advanced Risk Management" },
          { name: "Basel III & The Regulatory Framework" },
          { name: "Solvency II" },
          { name: "Blockchain in Banking" },
          { name: "Energy Risk Management" },
          { name: "Cyber Risk Management" },
          { name: "IT Risk Management" },
          { name: "Treasury Risk Management" },
          { name: "Credit Risk Management" },
          { name: "Agribusiness Risk Management" },
          { name: "Export Risk Management" },
          { name: "Talent Risk Management" },
          { name: "Ethics & Legal Compliance Training" },
          { name: "Operational Risk & Sustainability" },
          { name: "Risk Assessment based on ISO 31000 and ISO/IEC 31010" },
          { name: "Enterprise Risk Management: Integrating New COSO Framework" },
        ],
      },
      {
        name: "Finance",
        courses: [
          { name: "Macroeconomics Simulation" },
          { name: "Treasury Management" },
          { name: "Treasury Operations" },
          { name: "Trading" },
          { name: "Derivatives School" },
          { name: "Bonds & Fixed Income School" },
          { name: "ALM & Funds Transfer Pricing" },
        ],
      },
      {
        name: "Legal Issues in Business",
        courses: [{ name: "Legal Issues in Business" }],
      },
    ],
  },
  {
    shortName: "Energy",
    fullTitle: "Energy (Oil & Gas, Power) + AI",
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
    tracks: [
      {
        name: "AI & Automation in Energy",
        subcategories: [
          {
            name: "AI & Automation Courses",
            courses: [
              { name: "Predictive Maintenance Using AI & IoT", isNew: true },
              { name: "AI in Exploration & Seismic Analysis", isNew: true },
              { name: "Automated Pipeline Monitoring", isNew: true },
              { name: "Smart Grid Optimization with ML", isNew: true },
              { name: "Renewable Energy Forecasting", isNew: true },
              { name: "Digital Twin Technology for Assets", isNew: true },
            ],
          },
        ],
      },
      {
        name: "Oil & Gas",
        subcategories: [
          {
            name: "Upstream",
            courses: [
              { name: "Introduction to Offshore Drilling and Production Facilities" },
              { name: "Drilling Essentials for New Engineers and Non-Technical Professionals" },
              { name: "Introduction to Exploration & Production in Oil and Gas" },
              { name: "Reservoir Engineering Basics" },
              { name: "Corrosion Prevention in Oil and Gas" },
              { name: "Petroleum Geology for Non-Geologists" },
              { name: "Introduction to Petrophysics" },
              { name: "Fundamentals of Seismic for Non-Geophysicists" },
              { name: "Deepwater Completions Operations" },
              { name: "Directional, Horizontal & Multilateral Drilling" },
              { name: "Flow Assurance for Offshore Field Development" },
              { name: "Fundamentals of E&P Data Management" },
              { name: "High Pressure High Temperature Completions & Well Engineering" },
              { name: "Petroleum Geochemistry for Explorationists" },
              { name: "Reservoir Engineering for Technical Disciplines" },
            ],
          },
          {
            name: "Downstream",
            courses: [
              { name: "Understanding the Oil & Gas Industry Value Chain" },
              { name: "Contracts and Fiscal Policies in Oil & Gas" },
              { name: "Corrosion Prevention in Oil & Gas Operations" },
              { name: "Managing HSE Concerns in Oil & Gas" },
              { name: "Project Management in Oil & Gas" },
              { name: "Fundamentals of Petroleum Economics & Risk Analysis" },
              { name: "Fundamentals of Natural Gas Exploitation & Processing" },
              { name: "Reservoir Simulation" },
              { name: "Asset Integrity Management" },
              { name: "Refining Technology Fundamentals" },
              { name: "Process Safety Management" },
              { name: "Downstream Cash Flow Management" },
              { name: "Freight Transport" },
              { name: "Gas Processing" },
            ],
          },
        ],
      },
      {
        name: "Power",
        subcategories: [
          {
            name: "Transmission & Distribution",
            courses: [
              { name: "Electric Power Transmission and Distribution Engineering" },
              { name: "Revenue Generation & Assurance for Distribution Companies" },
              { name: "Power Distribution Systems Management and Automation" },
              { name: "Meters Asset Providers (MAP)" },
              { name: "Infrastructure Planning in a Liberalised Market" },
              { name: "Electricity Tariff Workshop" },
              { name: "Combating Electricity Theft Using Technology" },
              { name: "Metering, Smart Grid & MSPs Workshop" },
              { name: "Mastering Power Purchase Agreements" },
              { name: "Code of Safe Practice for Static Electricity Hazards" },
            ],
          },
          {
            name: "Renewable Energy",
            courses: [
              { name: "Renewable Energy Solutions" },
              { name: "Mini Grid Workshop" },
              { name: "Renewable Energy Management and Finance" },
            ],
          },
        ],
      },
    ],
  },
  {
    shortName: "Critical Skills",
    fullTitle: "Critical Skills + AI Integration",
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
    subcategories: [
      {
        name: "AI & Automation Courses",
        courses: [
          { name: "AI-Enhanced Leadership & Decision Making", isNew: true },
          { name: "Data-Driven Strategic Planning", isNew: true },
          { name: "Digital Communication & Collaboration", isNew: true },
          { name: "Project Management with AI Tools", isNew: true },
          { name: "HR Analytics & Talent Management", isNew: true },
          { name: "Change Management for AI Adoption", isNew: true },
        ],
      },
      {
        name: "Workplace Wellness",
        courses: [
          { name: "Emotional Intelligence in the Corporate Environment", isNew: true },
          { name: "Managing & Improving Mental Health in the Workplace", isNew: true },
          { name: "Achieving a Desirable Work-Life Balance", isNew: true },
        ],
      },
      {
        name: "Managing Millennials",
        courses: [
          { name: "Managing the Millennial & the Changing Workplace", isNew: true },
          { name: "Maximizing Productivity of the Millennial Workforce", isNew: true },
          { name: "Mentoring & Coaching the Millennial", isNew: true },
        ],
      },
      {
        name: "Corporate Culture",
        courses: [
          { name: "Building Professional Ethics in the Workplace", isNew: true },
          { name: "Ensuring Optimal & Positive Employee Engagement", isNew: true },
          { name: "Maximizing Capabilities in a Tech-Driven World", isNew: true },
          { name: "Effective Ways to Win Over Next Generation Leaders", isNew: true },
        ],
      },
      {
        name: "Leadership & Management",
        courses: [
          { name: "Management Development – Junior, Intermediate, Senior Levels" },
          { name: "Building Leadership Competencies" },
          { name: "Leadership & Visioning" },
          { name: "Building & Leading a Team of High Performers" },
          { name: "Advanced Project Management & Strategic Leadership" },
          { name: "The One-Week MBA" },
        ],
      },
      {
        name: "Strategy",
        courses: [
          { name: "Setting Achievable Goals & Managing Them", isNew: true },
          { name: "Achieving Organization Goals through Effective M&E" },
          { name: "Strategy, Risk & Execution Monitoring" },
          { name: "Successful Strategy Implementation in a Volatile Environment" },
        ],
      },
      {
        name: "HR & Talent Management",
        courses: [
          { name: "On-Boarding & Induction Programs" },
          { name: "Employee Engagement through Innovation & Reward Systems" },
          { name: "HR Metrics & Analytics" },
          { name: "Succession Planning & Talent Management" },
          { name: "Managing Compensation & Benefits" },
        ],
      },
      {
        name: "Customer Relationships",
        courses: [
          { name: "Relationship Marketing" },
          { name: "Customer Relationship Management" },
          { name: "Customer Selling Excellence" },
          { name: "Key Account Management" },
        ],
      },
      {
        name: "Organisational Growth",
        courses: [
          { name: "Developing Governance & Structure for SME Growth" },
          { name: "Coaching & Mentoring for Organizational Growth" },
        ],
      },
      {
        name: "Other Critical Skills",
        courses: [
          { name: "Improving Personal Effectiveness & Time Management" },
          { name: "Business Writing & Presentation Skills" },
          { name: "Competitive Selling & Negotiating Skills" },
        ],
      },
    ],
  },
  {
    shortName: "Government",
    fullTitle: "Federal & State Government + AI",
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
    subcategories: [
      {
        name: "AI & Automation Courses",
        courses: [
          { name: "AI in Public Service Delivery", isNew: true },
          { name: "Automated Document Processing & E-Government", isNew: true },
          { name: "AI for Revenue Collection & Tax Optimization", isNew: true },
          { name: "Predictive Analytics for Policy Making", isNew: true },
          { name: "Smart City Technologies & IoT", isNew: true },
          { name: "Government Process Automation", isNew: true },
        ],
      },
      {
        name: "Public Sector Development",
        courses: [
          { name: "Building the 21st Century Public Service Organization" },
          { name: "Leveraging Technology for Effective Documentation & Data Management" },
          { name: "Entrepreneurship Skills & Post-retirement Investment Planning" },
          { name: "Revenue Optimization & Commercial Orientation for MDAs" },
          { name: "Achieving MDA Goals through Effective Planning, M&E" },
          { name: "Employee Engagement and Reward Systems" },
          { name: "Transforming Public Sector Service Delivery" },
          { name: "Managing Millennials in a Changing Workplace" },
          { name: "Leadership and Management" },
          { name: "Coaching and Mentoring for Managers & Directors" },
          { name: "HR Metrics and Analytics" },
          { name: "Succession Planning" },
          { name: "Board Excellence for Directors & Heads of Parastatals" },
        ],
      },
    ],
  },
  {
    shortName: "Manufacturing",
    fullTitle: "Export, Manufacturing & Agriculture + AI",
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
    subcategories: [
      {
        name: "AI & Automation Courses",
        courses: [
          { name: "AI in Precision Agriculture & Crop Monitoring", isNew: true },
          { name: "Automated Quality Control in Manufacturing", isNew: true },
          { name: "Supply Chain Optimization with AI", isNew: true },
          { name: "Predictive Demand Planning", isNew: true },
          { name: "IoT & Sensor Networks for Agriculture", isNew: true },
          { name: "AI for Export Market Analysis", isNew: true },
        ],
      },
      {
        name: "Export Courses",
        courses: [
          { name: "Integrated Export Management Programme" },
          { name: "Export Quality Management" },
          { name: "Export Trade Finance" },
          { name: "Export Documentation" },
          { name: "Export Supply Chain Management" },
          { name: "International Customer Service" },
          { name: "Export Risk Management" },
          { name: "Export Compliance" },
        ],
      },
      {
        name: "Manufacturing Courses",
        courses: [
          { name: "Risk Assessment based on ISO 31000 and ISO/IEC 31010" },
          { name: "Enterprise-wide Risk Management – Strategy & Performance" },
          { name: "Lean Manufacturing" },
          { name: "Risk Regulatory & Compliance for SMEs" },
          { name: "Supply Chain Management Service" },
          { name: "Fundamentals of Cost and Budgetary Control" },
          { name: "Quality Management in Manufacturing" },
          { name: "Redesigning the Product Development Process" },
          { name: "Manufacturing and Product Design" },
        ],
      },
      {
        name: "Agricultural Courses",
        courses: [
          { name: "Basic Financial Management in the Agricultural Sector" },
          { name: "International Trade Finance for Agriculture Exporters" },
          { name: "Agricultural Value Chain Management" },
          { name: "Sustainable Agriculture" },
          { name: "Enterprise-wide Risk Management in Agriculture" },
        ],
      },
    ],
  },
  {
    shortName: "IT & Telecom",
    fullTitle: "IT & Telecommunications + AI",
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
    subcategories: [
      {
        name: "AI & Automation Courses",
        courses: [
          { name: "Machine Learning Engineering", isNew: true },
          { name: "Deep Learning & Neural Networks", isNew: true },
          { name: "Natural Language Processing (NLP)", isNew: true },
          { name: "Robotic Process Automation (RPA)", isNew: true },
          { name: "Large Language Models & Generative AI", isNew: true },
          { name: "Cloud AI Infrastructure & MLOps", isNew: true },
        ],
      },
      {
        name: "Information Technology",
        courses: [
          { name: "Operating Systems" },
          { name: "Payment Systems and Risks" },
          { name: "COBIT Training" },
          { name: "Cloud Computing" },
          { name: "Internet of Things" },
          { name: "Business Intelligence and Data Analytics" },
          { name: "Digital Governance" },
          { name: "Information Technology for Managers" },
          { name: "Office Productivity and Collaboration Tools" },
          { name: "FinTech" },
        ],
      },
      {
        name: "Cyber Security",
        courses: [
          { name: "Information Security Incident Investigation & Management" },
          { name: "Defense in Depth" },
          { name: "IS Vulnerability Management" },
          { name: "Cloud Security" },
          { name: "Social Media Security" },
          { name: "Ransomware Mitigation" },
          { name: "Mobile Security" },
          { name: "Building a SOC" },
        ],
      },
      {
        name: "Telecommunications",
        courses: [
          { name: "Telecom Boot Camp" },
          { name: "Tower Rigging and Safety Practices" },
          { name: "Advanced 4G LTE Technology" },
          { name: "Introduction to 5G" },
          { name: "5G Engineering" },
          { name: "Disruptive Technologies for Telcos and CSPs" },
          { name: "Telcos Cyber Security Training" },
        ],
      },
    ],
  },
  {
    shortName: "Board & C-Suite",
    fullTitle: "Board Education & C-Suite + AI Governance",
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
    subcategories: [
      {
        name: "AI & Automation Courses",
        courses: [
          { name: "AI Strategy for C-Suite Executives", isNew: true },
          { name: "Board Oversight of AI & Emerging Technologies", isNew: true },
          { name: "AI Risk Management & Governance Frameworks", isNew: true },
          { name: "Digital Transformation Leadership", isNew: true },
          { name: "AI Investment & ROI Analysis", isNew: true },
          { name: "Ethical AI & Regulatory Compliance", isNew: true },
        ],
      },
      {
        name: "Risk Courses",
        courses: [
          { name: "Applied Risk Governance" },
          { name: "Executive Insight into Risk Analytics and Risk Modeling" },
          { name: "Advanced Credit Risk Management and Analysis" },
          { name: "Risk Regulatory Compliance – Solvency II / Basel II" },
        ],
      },
      {
        name: "IT Courses",
        courses: [
          { name: "Cyber Security for Boards and Executives" },
          { name: "Cyber Risk Insurance" },
          { name: "Board Digitization" },
        ],
      },
      {
        name: "Leadership Courses",
        courses: [
          { name: "CEO & Executive Coaching" },
          { name: "The Strategic Board" },
          { name: "Emerging Perspectives to Performance Management" },
          { name: "Improving Board Effectiveness" },
        ],
      },
      {
        name: "Financial Courses",
        courses: [
          { name: "Mastering Financial Governance" },
          { name: "Finance for Executives" },
          { name: "Audit Management" },
        ],
      },
      {
        name: "Board Governance",
        courses: [
          { name: "Legal Requirements of Being a Director" },
          { name: "Practical Challenges to Being an Effective Director" },
          { name: "Chairmanship / Board Leadership Skills" },
          { name: "Maximizing Board Relationships" },
          { name: "Board Challenge and Decision-Making Competencies" },
        ],
      },
    ],
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
  headline: "Ready to Transform Your Organization?",
  subtitle:
    "Take the first step towards an AI-powered future. Our team is ready to design a customized learning program for your organization.",
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
