import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareersHero from "@/components/sections/CareersHero";
import WhyJoinHtc from "@/components/sections/WhyJoinHtc";
import OpenPositions from "@/components/sections/OpenPositions";

export const metadata: Metadata = {
  title: "Careers — HTC | Join Our Training Faculty",
  description:
    "Join Honors Training & Consulting as a training facilitator. Explore open positions across Financial Services, Energy, IT, and more. Apply today.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareersHero />
        <WhyJoinHtc />
        <OpenPositions />
      </main>
      <Footer />
    </>
  );
}
