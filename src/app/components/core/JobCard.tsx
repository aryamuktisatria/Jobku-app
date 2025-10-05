"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Job } from "@/app/api/data/JobAPI";
import { ArrowRight, DollarSign, MapPin, Calendar, HardHat } from "lucide-react";

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const companyInitial = job.company.charAt(0).toUpperCase();
  const router = useRouter();

  const handleViewDetails = () => {
    // Simpan job yang diklik ke sessionStorage supaya halaman detail bisa akses
    sessionStorage.setItem("selectedJob", JSON.stringify(job));

    // Navigasi ke halaman detail tanpa error not found
    router.push(`/job-detail?id=${job.id}`);
  };

  return (
    <div
      className="bg-card text-card-foreground flex flex-col p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg 
                hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4 border-b border-dashed pb-4 dark:border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="size-12 rounded-full bg-[#E6D8C3] flex items-center justify-center text-[#C2A68C] font-extrabold text-xl shrink-0">
            {companyInitial}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-snug">
              {job.title}
            </h3>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {job.company}
            </p>
          </div>
        </div>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
            job.is_remote_work === 1
              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
              : "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300"
          }`}
        >
          {job.is_remote_work === 1 ? "Remote" : job.job_category}
        </span>
      </div>

      {/* Konten */}
      <div className="space-y-3 mb-6 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center">
          <MapPin className="size-4 mr-2 text-gray-500 dark:text-gray-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center">
          <DollarSign className="size-4 mr-2 text-green-600 dark:text-green-400" />
          <span className="font-semibold text-green-700 dark:text-green-300">
            {formatCurrency(job.salary_from)} - {formatCurrency(job.salary_to)} / bulan
          </span>
        </div>
        <div className="flex items-center">
          <HardHat className="size-4 mr-2 text-yellow-600 dark:text-yellow-400" />
          <span>{job.employment_type}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="size-4 mr-2 text-red-500 dark:text-red-400" />
          <span>Batas Akhir: {job.application_deadline}</span>
        </div>
      </div>

      {/* Tombol */}
      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleViewDetails}
          className="flex items-center justify-center gap-2 w-full px-4 py-2 text-white font-semibold rounded-lg 
                    bg-[#C2A68C] hover:bg-[#a58970] transition-colors duration-300 shadow-md 
                    group-hover:shadow-lg group-hover:gap-3"
        >
          Lihat Lebih Lengkap
          <ArrowRight className="size-4 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
