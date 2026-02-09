import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { jobListings } from "@/lib/constants";
import { MapPin, Briefcase, ArrowLeft } from "lucide-react";
import JobApplicationForm from "@/components/ui/JobApplicationForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return jobListings.map((job) => ({ id: job.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const job = jobListings.find((j) => j.id === id);
  if (!job) return { title: "Job Not Found — HTC" };

  return {
    title: `${job.title} — HTC Careers`,
    description: job.description,
  };
}

export default async function JobPage({ params }: PageProps) {
  const { id } = await params;
  const job = jobListings.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative bg-gradient-to-br from-hanl-900 via-hanl-800 to-hanl-700 pt-32 pb-16">
          <div className="absolute inset-0 bg-dot-pattern" />
          <Container className="relative z-10">
            <a
              href="/careers"
              className="inline-flex items-center gap-2 text-sm text-accent-500 hover:text-accent-400 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all positions
            </a>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <span className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-2 text-slate-300">
                <Briefcase className="h-4 w-4" />
                {job.type}
              </span>
              <Badge variant="accent">{job.department}</Badge>
            </div>
          </Container>
        </section>

        {/* Job details + application form */}
        <section className="py-16 lg:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Left: Job details */}
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-hanl-800 mb-3">
                    About the Role
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-hanl-800 mb-3">
                    Responsibilities
                  </h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-hanl-800 mb-3">
                    Requirements
                  </h2>
                  <ul className="space-y-2">
                    {job.requirements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Application form */}
              <div className="lg:col-span-2">
                <div className="sticky top-24 bg-hanl-900 rounded-xl p-6 sm:p-8 shadow-xl">
                  <h2 className="text-xl font-bold text-white mb-1">
                    Apply for this Role
                  </h2>
                  <p className="text-sm text-slate-400 mb-6">
                    Fill out the form below and we&apos;ll get back to you.
                  </p>
                  <JobApplicationForm jobTitle={job.title} />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
