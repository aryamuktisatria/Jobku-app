import Hero from "@/app/components/core/Hero";
import AboutSection from "@/app/components/sections/AboutSection";
import Testimoni from "@/app/components/core/Testimoni";
import JobsSection from "@/app/components/sections/JobsSection";
import ContactMe from "@/app/components/core/ContactMe";
import Footer from "@/app/components/layout/Footer"; // Import Footer

export default function Home() {
  return (
    <>
      {/* 1. Bagian Hero */}
      <Hero />

      {/* 2. Bagian About Section */}
      <AboutSection />

      {/* 3. Bagian Testimoni */}
      <Testimoni />

      {/* 4. SECTION LOWONGAN KERJA */}
      <JobsSection />

      {/* 5. SECTION CONTACT ME */}
      <ContactMe />

      {/* 6. FOOTER */}
      <Footer />
    </>
  );
}