"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import JobDetail from "@/app/components/JobDetail";

// Next.js Page component untuk jalur /job-detail?id=...
const JobDetailPage = () => {
  // Hook untuk mengambil query parameter dari URL
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id"); 

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-neutral-950">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-gray-100">
          Rincian Pekerjaan
        </h1>
        {jobId ? (
          // Meneruskan jobId yang valid ke komponen detail
          <JobDetail jobId={jobId} />
        ) : (
          <div className="text-center py-20 text-xl font-semibold text-red-600 dark:text-red-400">
            Kesalahan: ID Pekerjaan tidak ditemukan di URL.
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetailPage;
