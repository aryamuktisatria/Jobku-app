"use client";

import React from "react";
import Link from "next/link";
import { 
  Users, 
  Rocket, 
  Eye, 
  Target, 
  Heart,
  Shield,
  Zap,
  DollarSign,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="size-6" />,
      title: "Ribuan Loker Terpercaya",
      description: "Akses ke ribuan lowongan kerja terbaru dari perusahaan terpercaya setiap hari.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      delay: 0
    },
    {
      icon: <Zap className="size-6" />,
      title: "Verifikasi Cepat",
      description: "Proses lamaran yang cepat dan mudah langsung ke perusahaan.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      delay: 100
    },
    {
      icon: <DollarSign className="size-6" />,
      title: "Transparansi Gaji",
      description: "Lihat rentang gaji sebelum melamar. Tanpa tebak-tebakan!",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      delay: 200
    }
  ];

  const stats = [
    { number: "10K+", label: "Lowongan Tersedia" },
    { number: "50K+", label: "Pencari Kerja" },
    { number: "95%", label: "Kepuasan Pengguna" },
    { number: "24/7", label: "Akses Dukungan" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5F5F0] dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Kenapa Memilih{" "}
            <span className="bg-gradient-to-r from-[#C2A68C] to-[#8B7355] bg-clip-text text-transparent">
              JobKu?
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Platform terdepan yang menghubungkan talenta terbaik dengan peluang karir berkualitas
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-[#E6D8C3] dark:border-gray-700 
                         transition-all duration-500 hover:scale-105 hover:shadow-lg group"
            >
              <div className="text-3xl font-bold text-[#8B7355] dark:text-[#C2A68C] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-[#E6D8C3] dark:border-gray-700 
                         p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className={`inline-flex items-center justify-center size-14 rounded-2xl ${feature.bgColor} text-gray-900 dark:text-white mb-4 
                            group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#8B7355] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {feature.description}
              </p>

              {/* Hover Indicator */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#E6D8C3] to-[#C2A68C] dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Siap Memulai Perjalanan Karir Anda?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Bergabung dengan ribuan profesional yang telah menemukan pekerjaan impian mereka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/jobs"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#8B7355] hover:bg-[#654321] text-white font-bold rounded-xl 
                           transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Rocket className="size-5" />
                Jelajahi Lowongan
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/90 hover:bg-white text-[#8B7355] font-bold rounded-xl 
                           transition-all duration-300 transform hover:scale-105 border-2 border-[#C2A68C]"
              >
                Pelajari Lebih Lanjut
                <ArrowRight className="size-5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;