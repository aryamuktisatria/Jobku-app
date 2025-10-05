"use client";

import React, { useEffect, useState } from "react";
import { fetchAllJobs, Job } from "@/app/api/JobAPI";
import JobCard from "@/app/components/JobCard";
import { BriefcaseBusiness } from "lucide-react";
import { useRouter } from "next/navigation";

const AllJobsPage: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const fetchedJobs = await fetchAllJobs();
        setJobs(fetchedJobs);
      } catch (err) {
        setError("Gagal memuat semua lowongan. Silakan coba lagi.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  return (
    <section className="py-16 md:py-24 max-w-6xl mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center space-x-3 text-gray-900 dark:text-gray-50">
          <BriefcaseBusiness className="size-8 text-[#C2A68C]" />
          <span>Semua Lowongan Kerja</span>
        </h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 rounded-xl border border-[#C2A68C] text-[#C2A68C] font-medium hover:bg-[#C2A68C] hover:text-white transition-all"
        >
          Kembali
        </button>
      </div>

      {/* Konten */}
      {loading && (
        <div className="text-center text-lg text-gray-500 dark:text-gray-400">
          Memuat semua lowongan...
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
          Tidak ada lowongan tersedia saat ini.
        </div>
      )}
    </section>
  );
};

export default AllJobsPage;
