// src/app/components/layout/Header/Header.tsx
"use client"; // PENTING: Mengubahnya menjadi Client Component

import dynamic from 'next/dynamic';
import { CardNavItem } from '@/app/components/Navbar/CardNav';

// Dynamic import CardNav karena CardNav adalah Client Component (menggunakan GSAP & hooks)
const CardNav = dynamic(() => import('@/app/components/Navbar/CardNav'), {
  ssr: false, 
  // Biarkan CardNav dimuat tanpa placeholder karena CardNav menangani posisinya sendiri
});

// Data Menu (dibiarkan sama)
const CARD_NAV_ITEMS: CardNavItem[] = [
  {
    label: 'Cari Kerja',
    bgColor: '#E6D8C3', // Secondary-Light
    textColor: '#333333',
    links: [
      { label: 'Semua Lowongan', href: '/jobs', ariaLabel: 'Lihat semua lowongan' },
      { label: 'Lowongan Terbaru', href: '/jobs?sort=new', ariaLabel: 'Lihat lowongan terbaru' },
      { label: 'Gaji Terbaik', href: '/jobs?sort=salary', ariaLabel: 'Cari berdasarkan gaji' },
    ],
  },
  {
    label: 'Perusahaan',
    bgColor: '#C2A68C', // Accent-Dark
    textColor: '#F5F5F0',
    links: [
      { label: 'Daftar Perusahaan', href: '/companies', ariaLabel: 'Lihat daftar perusahaan' },
      { label: 'Pusat Perekrut', href: '/dashboard/employer', ariaLabel: 'Login untuk perusahaan' },
    ],
  },
  {
    label: 'Akun Saya',
    bgColor: '#F5F5F0', // Primary-Light
    textColor: '#C2A68C', // Accent-Dark
    links: [
      { label: 'Daftar Akun', href: '/register', ariaLabel: 'Daftar sebagai pencari kerja' },
      { label: 'Masuk', href: '/login', ariaLabel: 'Masuk ke akun Anda' },
    ],
  },
];

export function Header() {
  return (
    <div className="w-full relative z-50"> 
      <CardNav
        items={CARD_NAV_ITEMS}
        // Penerapan Warna Kustom ke props CardNav:
        baseColor="#F5F5F0" 
        // menuColor="#C2A68C" <-- BARIS INI DIHAPUS KARENA TIDAK ADA DI CardNavProps
        buttonBgColor="#C2A68C" 
        buttonTextColor="#F5F5F0" 
      />
    </div>
  );
}