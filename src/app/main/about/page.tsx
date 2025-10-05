"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Users, 
  Rocket, 
  Eye, 
  Target, 
  Heart,
  Shield,
  Zap,
  DollarSign,
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react";

const AboutPage = () => {
  const features = [
    {
      icon: <Users className="size-8" />,
      title: "Ribuan Lowongan Terpercaya",
      description: "Akses ke ribuan lowongan kerja terbaru dari perusahaan terpercaya setiap hari.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      delay: 0
    },
    {
      icon: <Zap className="size-8" />,
      title: "Proses Cepat & Mudah",
      description: "Lamaran langsung sampai ke HR dengan proses yang sederhana dan transparan.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-900/20",
      delay: 100
    },
    {
      icon: <DollarSign className="size-8" />,
      title: "Transparansi Gaji",
      description: "Lihat rentang gaji sebelum melamar. Tidak ada lagi tebak-tebakan!",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      delay: 200
    },
    {
      icon: <Shield className="size-8" />,
      title: "Data Terlindungi",
      description: "Keamanan data pribadi Anda adalah prioritas utama kami.",
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
      delay: 300
    },
    {
      icon: <Target className="size-8" />,
      title: "Rekomendasi Personal",
      description: "Dapatkan rekomendasi lowongan yang sesuai dengan skill dan pengalaman Anda.",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50 dark:bg-rose-900/20",
      delay: 400
    },
    {
      icon: <TrendingUp className="size-8" />,
      title: "Track Record Sukses",
      description: "Ribuan kandidat telah mendapatkan pekerjaan impian melalui platform kami.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      delay: 500
    }
  ];

  const stats = [
    { number: "10K+", label: "Lowongan Tersedia", icon: <Rocket className="size-6" /> },
    { number: "50K+", label: "Pencari Kerja", icon: <Users className="size-6" /> },
    { number: "95%", label: "Kepuasan Pengguna", icon: <Heart className="size-6" /> },
    { number: "24/7", label: "Akses Dukungan", icon: <Eye className="size-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F5F0] via-white to-[#E6D8C3] dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] dark:from-gray-800 dark:to-gray-700 opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back Button */}
          <Link 
            href="/"
            className="group inline-flex items-center gap-2 text-[#8B7355] hover:text-[#654321] dark:text-gray-400 dark:hover:text-white mb-8 transition-all duration-300 transform hover:-translate-x-1"
          >
            <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">Kembali ke Beranda</span>
          </Link>

          {/* Main Title */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Tentang{" "}
              <span className="bg-gradient-to-r from-[#C2A68C] to-[#8B7355] bg-clip-text text-transparent">
                JobKu
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Platform pencarian kerja terdepan yang menghubungkan talenta terbaik dengan 
              <span className="font-semibold text-[#C2A68C]"> peluang karir berkualitas</span>
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-[#E6D8C3] dark:border-gray-700 
                         transition-all duration-500 hover:scale-105 hover:shadow-xl group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center size-12 rounded-full bg-gradient-to-r from-[#E6D8C3] to-[#C2A68C] text-[#8B7355] mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mengapa Memilih{" "}
            <span className="bg-gradient-to-r from-[#C2A68C] to-[#8B7355] bg-clip-text text-transparent">
              JobKu?
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Kami berkomitmen memberikan pengalaman terbaik dalam perjalanan karir Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-[#E6D8C3] dark:border-gray-700 
                         transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center size-16 rounded-2xl ${feature.bgColor} text-gray-900 dark:text-white mb-6 
                              group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#8B7355] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Indicator */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-[#E6D8C3] to-[#C2A68C] dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Misi Kami
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
              Kami berkomitmen memberikan pengalaman terbaik dalam perjalanan karir Anda
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Transparan", "Efisien", "Terpercaya", "Inovatif"].map((value, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30"
                >
                  <CheckCircle className="size-4" />
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Siap Memulai Perjalanan Karir Anda?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Bergabung dengan ribuan profesional yang telah menemukan pekerjaan impian mereka melalui JobKu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#8B7355] hover:bg-[#654321] text-white font-bold rounded-xl 
                         transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Star className="size-5" />
              Temukan Lowongan
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent hover:bg-white/50 text-[#8B7355] font-bold rounded-xl 
                         border-2 border-[#C2A68C] transition-all duration-300 transform hover:scale-105"
            >
              Jelajahi Fitur
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;