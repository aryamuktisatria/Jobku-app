"use client";

import React, { useState, useEffect } from "react";
import { fetchFeaturedJobs, Job } from "@/app/api/JobAPI";
import JobCard from "@/app/components/JobCard";
import { BriefcaseBusiness, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const JobsSection: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const fetchedJobs = await fetchFeaturedJobs();
        setJobs(fetchedJobs);
      } catch (err) {
        setError("Gagal memuat lowongan kerja. Silakan coba lagi.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  const handleViewAll = () => {
    // Arahkan ke halaman semua lowongan
    router.push("/all-jobs");
  };

  return (
    <section className="py-16 md:py-24 max-w-6xl mx-auto px-4" id="jobs">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center space-x-3 text-gray-900 dark:text-gray-50">
          <BriefcaseBusiness className="size-8 text-[#C2A68C]" />
          <span>Lowongan Terbaru</span>
        </h2>
        <button
          onClick={handleViewAll}
          className="flex items-center space-x-2 text-[#C2A68C] font-semibold hover:text-[#a58970] transition-colors group"
        >
          <span>Lihat Semua Lowongan</span>
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Konten */}
      {loading && (
        <div className="text-center text-lg text-gray-500 dark:text-gray-400">
          Memuat lowongan...
        </div>
      )}

      {error && (
        <div className="text-center text-lg text-red-500 dark:text-red-400">
          {error}
        </div>
      )}

      {!loading && jobs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {!loading && jobs.length === 0 && !error && (
        <div className="text-center text-lg text-gray-500 dark:text-gray-400">
          Saat ini belum ada lowongan kerja yang tersedia.
        </div>
      )}
    </section>
  );
};

export default JobsSection;
