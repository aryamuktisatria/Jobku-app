"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import JobDetail from "@/app/components/core/JobDetail";

const JobDetailClientWrapper = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("id");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] to-[#E6D8C3] dark:from-gray-900 dark:to-gray-800">
      {jobId ? (
        <JobDetail jobId={jobId} />
      ) : (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Job Tidak Ditemukan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              ID pekerjaan tidak valid atau tidak ditemukan di URL.
            </p>
            <button
              onClick={() => window.history.back()}
              className="px-6 py-3 bg-[#C2A68C] hover:bg-[#A58970] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Kembali ke Daftar Job
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailClientWrapper;