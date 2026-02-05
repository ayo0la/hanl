import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import DeliveryMethods from "@/components/sections/DeliveryMethods";
import IndustrySectors from "@/components/sections/IndustrySectors";
import CourseCategories from "@/components/sections/CourseCategories";
import FlagshipPrograms from "@/components/sections/FlagshipPrograms";
import ClientBenefits from "@/components/sections/ClientBenefits";
import FacultyPartners from "@/components/sections/FacultyPartners";
import StatsTestimonials from "@/components/sections/StatsTestimonials";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ValueProposition />
        <DeliveryMethods />
        <IndustrySectors />
        <CourseCategories />
        <FlagshipPrograms />
        <ClientBenefits />
        <FacultyPartners />
        <StatsTestimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
