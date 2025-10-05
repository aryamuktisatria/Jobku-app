"use client";

import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import Link from 'next/link';
import { BriefcaseIcon } from './BriefcaseIcon'; 

// --- (TYPES) ---
type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}
// ----------------------------

const CardNav: React.FC<CardNavProps> = ({
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  buttonBgColor = '#C2A68C', 
  buttonTextColor = '#FFFFFF' 
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const ctaButtonRef = useRef<HTMLButtonElement | null>(null); 

  // Fungsi untuk scroll ke Jobs Section
  const scrollToJobs = () => {
    // Tutup menu jika terbuka
    if (isExpanded) {
      toggleMenu();
    }
    
    // Scroll ke Jobs Section
    const jobsSection = document.getElementById('jobs');
    if (jobsSection) {
      const offset = 80; // Offset dalam pixels
      const elementPosition = jobsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';
        contentEl.offsetHeight;

        const topBar = 60; 
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding; 
      }
    }
    return 300; 
  }, []); 

  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    
    gsap.set(cardsRef.current, (i: number) => ({ 
        y: 0, 
        opacity: 0, 
        x: i % 2 === 0 ? -50 : 50 
    }));

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight, 
      duration: 0.5, 
      ease
    });

    tl.to(cardsRef.current, { x: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)', stagger: 0.1 }, '-=0.3');

    return tl;
  }, [ease, calculateHeight]); 

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    
    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline]); 


  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1); 
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded, createTimeline, calculateHeight]); 

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[95%] max-w-[1024px] z-[99] top-[3em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-2xl shadow-xl relative overflow-hidden will-change-[height] transition-shadow duration-300 ${isExpanded ? 'shadow-2xl' : 'shadow-xl'} 
        dark:bg-[#2e2e2e] dark:shadow-2xl dark:shadow-gray-900/50`}
        style={{ backgroundColor: baseColor }}
      >
        {/* Top Bar (Selalu terlihat) */}
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-4 pr-3 z-[2]">
          
          {/* Tombol Hamburger (Kiri) */}
          <div
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Tutup menu' : 'Buka menu'}
            tabIndex={0}
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full w-fit flex flex-col items-center justify-center cursor-pointer gap-[6px] order-1 p-2 mr-2 
                       text-gray-900 dark:text-gray-500`} 
          >
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </div>

          {/* Logo/Nama Website (JobKu) - Di tengah */}
          <Link
            href="/"
            onClick={() => { if (isExpanded) toggleMenu(); }} 
            className="logo-container flex items-center space-x-2 font-extrabold tracking-tight text-[22px] md:text-[24px] 
                       order-2 absolute left-1/2 -translate-x-1/2 text-[#C2A68C] transition-colors hover:text-[#C2A68C]/80"
          >
            <BriefcaseIcon className="size-6 shrink-0" />
            <span>JobKu</span>
          </Link>

          {/* Wrapper untuk Tombol CTA (Kanan) */}
          <div className="flex items-center h-full order-3 ml-auto"> 
            
            {/* Tombol CTA (Mulai Sekarang) */}
            <button
              ref={ctaButtonRef}
              type="button"
              onClick={scrollToJobs}
              className="card-nav-cta-button hidden lg:flex border-0 
                         rounded-xl px-5 h-[44px] 
                         font-semibold cursor-pointer transition-all duration-300
                         items-center justify-center
                         hover:opacity-95 active:scale-[0.98]
                         transform hover:scale-105
                         dark:bg-[#a58970] dark:text-white dark:hover:bg-[#b2977f]" 
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
              Mulai Sekarang
            </button>
          </div>
        </div>

        {/* Konten Menu (Tersembunyi secara default) */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-3 flex flex-col items-stretch gap-3 justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-4`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-4 rounded-xl min-w-0 flex-[1_1_auto] h-auto min-h-[70px] md:h-full md:min-h-0 md:flex-[1_1_0%]" 
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-extrabold tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-1">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={toggleMenu} 
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;