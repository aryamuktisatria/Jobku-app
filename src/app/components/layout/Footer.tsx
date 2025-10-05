"use client";

import React from "react";
import Link from "next/link";
import { 
  Heart, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink,
  ArrowUp,
  Code
} from "lucide-react";
import ShinyText from "@/app/components/ui/ShinyText"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Lowongan Kerja", href: "/jobs" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Testimoni", href: "#testimoni" },
  ];

  const socialLinks = [
    { name: "Email", href: "mailto:support@jobku.id", icon: Mail },
    { name: "LinkedIn", href: "#", icon: ExternalLink },
    { name: "Instagram", href: "#", icon: ExternalLink },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <ShinyText 
                text="JobKu" 
                speed={3}
                className="text-3xl font-bold"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform pencarian kerja terdepan yang menghubungkan talenta terbaik 
              dengan peluang karir berkualitas di Indonesia.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Code className="size-4" />
              <span>Dibuat dengan</span>
              <Heart className="size-4 text-red-500 fill-red-500" />
              <span>untuk Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C2A68C] rounded-full"></div>
              Navigasi
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#C2A68C] transition-all duration-300 
                             transform hover:translate-x-2 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-[#C2A68C] transition-colors duration-300"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#C2A68C] rounded-full"></div>
              Kontak
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 group hover:text-[#C2A68C] transition-colors duration-300">
                <Mail className="size-4 flex-shrink-0" />
                <span className="text-sm">support@jobku.id</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 group hover:text-[#C2A68C] transition-colors duration-300">
                <Phone className="size-4 flex-shrink-0" />
                <span className="text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 group hover:text-[#C2A68C] transition-colors duration-300">
                <MapPin className="size-4 flex-shrink-0 mt-1" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Social & Back to Top */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#C2A68C] rounded-full"></div>
                Terhubung
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="p-3 bg-gray-800 hover:bg-[#C2A68C] rounded-xl transition-all duration-300 
                               transform hover:scale-110 hover:shadow-lg group"
                      aria-label={social.name}
                    >
                      <Icon className="size-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-full py-3 bg-gray-800 hover:bg-[#C2A68C] rounded-xl transition-all duration-300 
                       transform hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2"
            >
              <ArrowUp className="size-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
              <span className="text-sm text-gray-400 group-hover:text-white font-medium">
                Back to Top
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <ShinyText 
                text={`© ${currentYear} JobKu. All rights reserved.`}
                speed={5}
                className="text-sm"
              />
            </div>

            {/* Credits */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Developed by</span>
              <ShinyText 
                text="Aryamukti Satria Hendrayana"
                speed={4}
                className="font-medium"
              />
            </div>

            {/* Version */}
            <div className="text-gray-500 text-sm">
              v1.0.0
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C2A68C] to-transparent opacity-30"></div>
    </footer>
  );
};

export default Footer;