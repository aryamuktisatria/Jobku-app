import React, { Suspense } from "react";
import JobDetailClientWrapper from "./JobDetailClientWrapper";
import JobDetailSkeleton from "../../components/core/JobDetailSkeleton"; 

const JobDetailPage = () => {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-neutral-950">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-gray-100">
          Rincian Pekerjaan
        </h1>
        
        <Suspense fallback={<JobDetailSkeleton />}>
          <JobDetailClientWrapper />
        </Suspense>

      </div>
    </div>
  );
};

export default JobDetailPage;