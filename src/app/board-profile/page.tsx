import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Board Profile — HTC | Leadership & Governance",
  description:
    "Learn about the Honors Training & Consulting board of directors and leadership team driving excellence in professional training.",
};

export default function BoardProfilePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-[60vh] flex items-center justify-center bg-hanl-900">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Board Profile
            </h1>
            <p className="text-lg text-white/60">
              This page is coming soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
