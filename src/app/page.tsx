import Hero from "@/app/components/Hero/Hero";
import AboutSection from "@/app/components/AboutSection";
import Testimoni from "@/app/components/Testimoni";
import JobsSection from "@/app/components/JobsSection";
import ContactMe from "@/app/components/ContactMe";
import Footer from "@/app/components/Footer"; // Import Footer

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