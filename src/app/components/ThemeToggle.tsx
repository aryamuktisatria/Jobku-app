"use client";

import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';

// Komponen Toggle Theme
export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return placeholder untuk mencegah flicker/hydration mismatch
    return <div className="size-10 flex items-center justify-center opacity-0 pointer-events-none"></div>;
  }

  // Gunakan 'resolvedTheme' dari next-themes untuk status yang akurat di client
  const isDark = theme === 'dark'; 

  const toggleTheme = () => {
    // BUG FIX: Gunakan setTheme untuk beralih mode
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <button
      type="button"
      className={`size-10 flex items-center justify-center rounded-full transition-colors duration-300 
                  ${isDark 
                    ? 'bg-gray-700/80 text-yellow-300 hover:bg-gray-700' // Dark mode style
                    : 'bg-white/80 text-gray-500 hover:bg-white' // Light mode style
                  }
                  shadow-lg backdrop-blur-sm
                  `}
      onClick={toggleTheme}
      aria-label={isDark ? 'Ganti ke mode terang' : 'Ganti ke mode gelap'}
    >
      {isDark ? (
        <IoSunnyOutline className="size-6" /> // Tampilkan matahari di dark mode
      ) : (
        <IoMoonOutline className="size-6" /> // Tampilkan bulan di light mode
      )}
    </button>
  );
};

export default ThemeToggle;