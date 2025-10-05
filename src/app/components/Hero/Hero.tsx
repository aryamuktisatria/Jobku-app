"use client";

import React, { useLayoutEffect, useRef } from 'react';
import { GoArrowRight } from "react-icons/go";
import { gsap } from 'gsap';

export const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  // Fungsi untuk scroll ke Jobs Section dengan offset
  const scrollToJobs = () => {
    const jobsSection = document.getElementById('jobs');
    if (jobsSection) {
      const offset = 80; // Offset dalam pixels
      const elementPosition = jobsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline();

      // Animasi Headline dan Deskripsi
      tl.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.4,
        stagger: 0.2
      });

      // Animasi Tombol CTA
      tl.from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, "-=0.4");
      
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={heroRef}
      className="font-sans flex flex-col items-center justify-center pt-10 pb-20 gap-12 text-center"
    >
      
      {/* Hero Section */}
      <section 
        className="max-w-4xl space-y-6"
        ref={textRef}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-foreground leading-tight">
          Temukan <span className="text-[#C2A68C]">Pekerjaan Impian</span> Anda Hari Ini.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          JobKu menghubungkan Anda dengan perusahaan-perusahaan top di Indonesia. Mulai pencarian karir Anda yang cemerlang sekarang juga!
        </p>
      </section>

      {/* CTA Section */}
      <div 
        className="flex flex-col sm:flex-row gap-4"
        ref={ctaRef}
      >
        <button
          onClick={scrollToJobs}
          className="group rounded-full transition-all duration-300 flex items-center justify-center bg-[#C2A68C] text-[#F5F5F0] gap-2 
                     hover:bg-[#C2A68C]/90 font-semibold text-base h-12 px-6 shadow-lg hover:shadow-xl
                     transform hover:scale-105 active:scale-95"
        >
          Cari Lowongan
          <GoArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default Hero;