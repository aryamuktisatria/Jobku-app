"use client";

import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Waves from "@/components/Waves";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("mblkrbbv");
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  useEffect(() => {
    // Trigger animation when component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Waves Background */}
      <Waves
        lineColor="rgba(194, 166, 140, 0.3)"
        backgroundColor="transparent"
        waveSpeedX={0.01}
        waveSpeedY={0.005}
        waveAmpX={24}
        waveAmpY={12}
        xGap={12}
        yGap={28}
        friction={0.925}
        tension={0.005}
        className="opacity-40"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hubungi{" "}
            <span className="bg-gradient-to-r from-[#C2A68C] to-[#E6D8C3] bg-clip-text text-transparent">
              Kami
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Punya pertanyaan atau butuh bantuan? Tim kami siap membantu karir Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-700 delay-200 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            
            <div className="group">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-[#C2A68C] rounded-lg">
                  <Mail className="size-6 text-white" />
                </div>
                Informasi Kontak
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Kami selalu siap membantu perjalanan karir Anda. Jangan ragu untuk 
                menghubungi kami melalui form di samping atau informasi kontak berikut.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#C2A68C]/30 transition-all duration-300 group">
                <div className="p-3 bg-[#C2A68C] rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="size-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">support@jobku.id</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#C2A68C]/30 transition-all duration-300 group">
                <div className="p-3 bg-[#C2A68C] rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <User className="size-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Jam Operasional</p>
                  <p className="text-white font-medium">Senin - Jumat, 09:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#C2A68C]/30 transition-all duration-300 group">
                <div className="p-3 bg-[#C2A68C] rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="size-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Response Time</p>
                  <p className="text-white font-medium">1-2 jam kerja</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#C2A68C]">24/7</div>
                <div className="text-xs text-gray-400 mt-1">Support</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#C2A68C]">1K+</div>
                <div className="text-xs text-gray-400 mt-1">Clients</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-2xl font-bold text-[#C2A68C]">99%</div>
                <div className="text-xs text-gray-400 mt-1">Satisfied</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              
              {state.succeeded ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center size-16 bg-green-500/20 rounded-full mb-6">
                    <CheckCircle className="size-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Terima kasih telah menghubungi kami. Tim kami akan merespons 
                    pesan Anda dalam 1-2 jam kerja.
                  </p>
                  <button
                    onClick={() => {
                      setFormData({ name: "", email: "", message: "" });
                      // Reset Formspree state
                      window.location.reload();
                    }}
                    className="px-6 py-3 bg-[#C2A68C] hover:bg-[#a58970] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                    <MessageSquare className="size-6 text-[#C2A68C]" />
                    Kirim Pesan
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Isi form berikut dan kami akan segera menghubungi Anda
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name Field */}
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nama Lengkap
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-5 group-hover:text-[#C2A68C] transition-colors duration-300" />
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-gray-600 rounded-xl 
                                   text-white placeholder-gray-400 focus:ring-2 focus:ring-[#C2A68C] 
                                   focus:border-transparent transition-all duration-300
                                   hover:border-gray-500 focus:bg-white/10"
                          placeholder="Masukkan nama lengkap Anda"
                        />
                      </div>
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Alamat Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-5 group-hover:text-[#C2A68C] transition-colors duration-300" />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-gray-600 rounded-xl 
                                   text-white placeholder-gray-400 focus:ring-2 focus:ring-[#C2A68C] 
                                   focus:border-transparent transition-all duration-300
                                   hover:border-gray-500 focus:bg-white/10"
                          placeholder="email@contoh.com"
                        />
                      </div>
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Pesan
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 text-gray-400 size-5 group-hover:text-[#C2A68C] transition-colors duration-300" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-gray-600 rounded-xl 
                                   text-white placeholder-gray-400 focus:ring-2 focus:ring-[#C2A68C] 
                                   focus:border-transparent transition-all duration-300 resize-none
                                   hover:border-gray-500 focus:bg-white/10"
                          placeholder="Tulis pesan Anda di sini..."
                        />
                      </div>
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="text-red-400 text-sm mt-1 flex items-center gap-1"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full py-4 bg-gradient-to-r from-[#C2A68C] to-[#a58970] hover:from-[#a58970] hover:to-[#8B7355] 
                               disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-xl 
                               transition-all duration-300 transform hover:scale-105 disabled:scale-100 
                               disabled:cursor-not-allowed shadow-lg hover:shadow-xl
                               flex items-center justify-center gap-3 group"
                    >
                      {state.submitting ? (
                        <>
                          <Loader2 className="size-5 animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="size-5 group-hover:translate-x-1 transition-transform duration-300" />
                          Kirim Pesan
                        </>
                      )}
                    </button>

                    {/* Error Message */}
                    {state.errors && (
                      <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                        <AlertCircle className="size-5 flex-shrink-0" />
                        <span className="text-sm">
                          Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.
                        </span>
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-gray-400 text-sm">
            🔒 Data Anda aman bersama kami. Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactMe;