"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchAllJobs, Job } from "@/app/api/JobAPI";
import { 
  DollarSign, 
  MapPin, 
  Calendar, 
  HardHat, 
  Building2, 
  Clock, 
  Users, 
  ArrowLeft,
  Mail,
  ExternalLink
} from "lucide-react";

// Helper function untuk format mata uang ke IDR
const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

interface JobDetailProps {
  jobId: string;
}

const JobDetail: React.FC<JobDetailProps> = ({ jobId }) => {
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const loadJob = async () => {
      setLoading(true);
      setError(null);
      if (!jobId) {
        setError("ID Pekerjaan tidak valid.");
        setLoading(false);
        return;
      }

      try {
        const jobsData = await fetchAllJobs();
        const foundJob = jobsData.find((j) => String(j.id) === String(jobId));

        if (!foundJob) {
          setError("Job tidak ditemukan.");
        } else {
          setJob(foundJob);
          // Trigger animation after data is loaded
          setTimeout(() => setIsVisible(true), 100);
        }
      } catch (err) {
        setError("Gagal memuat data job. Silakan coba lagi.");
        console.error("Fetch Job Detail Error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadJob();
  }, [jobId]);

  const handleBack = () => {
    router.back();
  };

  const handleApply = () => {
    if (job) {
      const subject = `Lamaran Pekerjaan - ${job.title} di ${job.company}`;
      const body = `Dear HR Team ${job.company},\n\nSaya tertarik dengan lowongan ${job.title} dan ingin mengajukan lamaran.\n\nBerikut saya lampirkan CV dan portofolio untuk pertimbangan.\n\nHormat saya,\n[Nama Lengkap]\n[No. Telepon]\n[Email]`;
      
      // Open email client
      window.open(`mailto:${job.contact}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] to-[#E6D8C3] dark:from-gray-900 dark:to-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button Skeleton */}
          <div className="animate-pulse mb-8">
            <div className="w-32 h-10 bg-[#E6D8C3] rounded-lg"></div>
          </div>
          
          {/* Content Skeleton */}
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-[#E6D8C3] rounded w-3/4"></div>
            <div className="h-4 bg-[#E6D8C3] rounded w-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-20 bg-[#E6D8C3] rounded-xl"></div>
              ))}
            </div>
            <div className="h-32 bg-[#E6D8C3] rounded-xl"></div>
            <div className="h-32 bg-[#E6D8C3] rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] to-[#E6D8C3] dark:from-gray-900 dark:to-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={handleBack}
            className="group flex items-center gap-2 text-[#8B7355] hover:text-[#654321] dark:text-gray-400 dark:hover:text-white mb-8 transition-all duration-300 transform hover:-translate-x-1"
          >
            <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">Kembali</span>
          </button>
          
          <div className="text-center py-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg animate-fade-in">
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Job Tidak Ditemukan</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">{error}</p>
            <button
              onClick={handleBack}
              className="px-6 py-3 bg-[#C2A68C] hover:bg-[#A58970] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Kembali ke Daftar Job
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!job) {
    return null;
  }

  let qualificationsList: string[] = [];
  try {
    qualificationsList = JSON.parse(job.qualifications);
  } catch (e) {
    console.error("Gagal parse qualifications JSON:", e);
  }

  const isRemote = job.is_remote_work === 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] to-[#E6D8C3] dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="group flex items-center gap-3 text-[#8B7355] hover:text-[#654321] dark:text-gray-400 dark:hover:text-white mb-8 transition-all duration-300 transform hover:-translate-x-2 px-4 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50"
        >
          <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-semibold text-lg">Kembali ke Daftar Pekerjaan</span>
        </button>

        {/* Main Content */}
        <div 
          className={`
            bg-[#F5F5F0] dark:bg-gray-900 rounded-2xl shadow-2xl p-6 md:p-8
            border border-[#E6D8C3] dark:border-gray-800 transition-all duration-700 transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            hover:shadow-3xl
          `}
        >
          
          {/* Header & Title */}
          <div className="border-b border-dashed border-[#C2A68C] dark:border-gray-700 pb-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-50 mb-3 leading-tight">
                  {job.title}
                </h1>
                <div className="flex items-center text-lg text-gray-600 dark:text-gray-400 mb-3">
                  <Building2 className="size-5 mr-2 text-[#C2A68C] flex-shrink-0" />
                  <span className="font-medium">{job.company}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`
                    inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold 
                    transition-all duration-300 transform hover:scale-105 border
                    ${
                      isRemote
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800/50"
                        : "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 border-green-200 hover:bg-green-200 dark:hover:bg-green-800/50"
                    }
                  `}
                >
                  {isRemote ? "🌍 Remote Work" : job.employment_type}
                </span>
                <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold bg-[#E6D8C3] text-[#8B7355] border border-[#C2A68C] hover:bg-[#D4C4A8] transition-colors duration-300">
                  <Users className="size-4 mr-1 flex-shrink-0" />
                  {job.number_of_opening} posisi
                </span>
              </div>
            </div>
          </div>

          {/* Informasi Detail Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-[#E6D8C3] dark:border-gray-700 
                          transition-all duration-300 hover:shadow-lg hover:border-[#C2A68C] group cursor-pointer">
              <div className="flex items-center">
                <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="size-5 text-red-500 dark:text-red-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lokasi</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{job.location}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-[#E6D8C3] dark:border-gray-700 
                          transition-all duration-300 hover:shadow-lg hover:border-[#C2A68C] group cursor-pointer">
              <div className="flex items-center">
                <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="size-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Gaji per bulan</p>
                  <p className="font-semibold text-green-700 dark:text-green-400">
                    {formatCurrency(job.salary_from)} - {formatCurrency(job.salary_to)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-[#E6D8C3] dark:border-gray-700 
                          transition-all duration-300 hover:shadow-lg hover:border-[#C2A68C] group cursor-pointer">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <HardHat className="size-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tipe Pekerjaan</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{job.employment_type}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-[#E6D8C3] dark:border-gray-700 
                          transition-all duration-300 hover:shadow-lg hover:border-[#C2A68C] group cursor-pointer">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="size-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Batas Lamaran</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{job.application_deadline}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-[#E6D8C3] dark:border-gray-700 
                          transition-all duration-300 hover:shadow-lg hover:border-[#C2A68C] group cursor-pointer">
              <div className="flex items-center">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="size-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Diperbarui</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{job.updated_at}</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-[#E6D8C3] dark:border-gray-700 
                          transition-all duration-300 hover:shadow-lg hover:border-[#C2A68C] group cursor-pointer">
              <div className="flex items-center">
                <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                  <Users className="size-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Kategori</p>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">{job.job_category}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Deskripsi */}
          <div className="border-t border-[#E6D8C3] dark:border-gray-700 pt-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
              <span className="w-3 h-8 bg-[#C2A68C] rounded-full mr-3 animate-pulse"></span>
              Deskripsi Pekerjaan
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-[#E6D8C3] dark:border-gray-700 
                          transition-all duration-300 hover:shadow-lg">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-wrap">
                {job.description}
              </p>
            </div>
          </div>

          {/* Kualifikasi */}
          <div className="border-t border-[#E6D8C3] dark:border-gray-700 pt-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
              <span className="w-3 h-8 bg-[#C2A68C] rounded-full mr-3 animate-pulse"></span>
              Kualifikasi Utama
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-[#E6D8C3] dark:border-gray-700 
                          transition-all duration-300 hover:shadow-lg">
              <ul className="space-y-3">
                {qualificationsList.map((q: string, i: number) => (
                  <li 
                    key={i} 
                    className="flex items-start text-gray-700 dark:text-gray-300 group hover:translate-x-2 transition-all duration-300 p-2 rounded-lg hover:bg-[#F5F5F0] dark:hover:bg-gray-700/50"
                  >
                    <span className="w-2 h-2 bg-[#C2A68C] rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="text-base leading-relaxed flex-1">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Info Kontak & Apply Button */}
          <div className="mt-8 pt-6 border-t border-[#E6D8C3] dark:border-gray-700">
            <div className="bg-gradient-to-r from-[#E6D8C3] to-[#C2A68C] dark:from-gray-800 dark:to-gray-700 
                          rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="text-center lg:text-left flex-1">
                  <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
                    Tertarik dengan posisi ini?
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 lg:mb-0">
                    Kirim CV dan portofolio Anda ke:{" "}
                    <a 
                      href={`mailto:${job.contact}`} 
                      className="font-semibold text-[#8B4513] dark:text-[#D4B896] hover:underline transition-all duration-300 inline-flex items-center gap-1 group"
                    >
                      {job.contact}
                      <ExternalLink className="size-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </a>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <button
                    onClick={handleApply}
                    className="flex-1 lg:flex-none px-8 py-4 text-white font-bold rounded-xl 
                             bg-[#8B4513] hover:bg-[#654321] transition-all duration-300 
                             shadow-lg hover:shadow-xl transform hover:scale-105
                             border-2 border-[#A0522D] flex items-center justify-center gap-3 group"
                  >
                    <Mail className="size-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Lamar Sekarang</span>
                  </button>
                  <button
                    onClick={handleBack}
                    className="flex-1 lg:flex-none px-6 py-4 text-[#8B4513] font-bold rounded-xl 
                             bg-transparent hover:bg-white/50 transition-all duration-300 
                             border-2 border-[#C2A68C] flex items-center justify-center gap-2 group"
                  >
                    <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span>Kembali</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;