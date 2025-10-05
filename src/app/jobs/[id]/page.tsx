"use client";

import React from "react";
import { useParams } from "next/navigation";
import JobDetail from "@/app/components/JobDetail";

const JobDetailPage = () => {
  const params = useParams();
  const jobId = params.id as string;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] to-[#E6D8C3] dark:from-gray-900 dark:to-gray-800">
      {jobId ? (
        <JobDetail jobId={jobId} />
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center py-20 text-xl font-semibold text-red-600 dark:text-red-400">
            Kesalahan: ID Pekerjaan tidak ditemukan.
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetailPage;