import React from 'react'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const HeroSection = () => {
  useEffect(() => {
          AOS.init({
            duration: 800,
            once: true,
          });
        }, []);
  return (
    <section className="relative z-[1] grid grid-cols-2 gap-[60px] items-center max-w-[1200px] w-full mx-auto px-6 px-6 py-[180px] pb-[120px] overflow-hidden">

  <div data-aos="fade-up">

    <div  className="inline-flex items-center gap-2 py-[5px] pr-[16px] pl-[7px] bg-[#ff6b6b14] border border-[rgba(255,107,107,0.2)] rounded-full text-[12.5px] font-semibold text-[#ff9b9b] mb-7">
      <div className="w-[7px] h-[7px] bg-[#22c55e] rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
      <span>Version 2.0 is Live</span>
    </div>

    <h1 className="text-[clamp(40px,5vw,62px)] font-extrabold tracking-[-0.04em] leading-[1.05] mb-5">
      <div>Analytics that</div>
      <div className="bg-gradient-to-br from-[#FFD4D4] via-[#ff6b6b] via-[60%] to-[#FF9B9B] bg-clip-text text-transparent">
        move the needle
      </div>
    </h1>

    <p className="text-[16.5px] text-[#8a8b9e] leading-[1.7] mb-9 max-w-[460px]">
      Ship faster with real-time product analytics, session replay,
      and feature flags — all in one platform built for engineering teams.
    </p>

    <div className="flex items-center gap-[14px] mb-12">

      <button className="inline-flex items-center justify-center gap-2 px-[22px] py-[10px] rounded-full bg-[#ff6b6b] text-white text-[13.5px] font-semibold tracking-[-0.01em] transition-all duration-300 shadow-[0_0_24px_#ff6b6b59,inset_0_1px_0_#ffffff1a]">
        Get Started Free
        <span>→</span>
      </button>

      <button className="inline-flex items-center justify-center gap-2 px-8 py-[14px] rounded-full bg-[rgba(255,255,255,0.05)] border border-[#ffffff0f] text-[#eeeef0] font-semibold tracking-[-0.01em] transition-all duration-300">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
        Watch Demo
      </button>

    </div>

    <div>
      <div className="text-[11.5px] font-medium text-[#55566a] uppercase tracking-[0.1em] mb-4">
        Trusted by 2,400+ teams
      </div>

      <div className="flex flex-wrap items-center gap-6 opacity-25 text-[14px] font-bold text-[#8a8b9e] tracking-[-0.02em]">

        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded bg-[#ffffff26]" />
          <span>Vercel</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded bg-[#ffffff26]" />
          <span>Linear</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded bg-[#ffffff26]" />
          <span>Raycast</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded bg-[#ffffff26]" />
          <span>Resend</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[18px] h-[18px] rounded bg-[#ffffff26]" />
          <span>Supabase</span>
        </div>

      </div>
    </div>

  </div>

  <div className="relative">

    <div className="bg-[#26262d] border border-[#ffffff0f] rounded-[14px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.03)] [transform:perspective(1200px)_rotateY(-4deg)_rotateX(2deg)] transition-transform duration-500">

      <div className="flex items-center gap-[6px] px-4 py-3 border-b border-[#ffffff0f]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#f43f5e] opacity-70"></span>
        <span className="w-[10px] h-[10px] rounded-full bg-[#f59e0b] opacity-70"></span>
        <span className="w-[10px] h-[10px] rounded-full bg-[#22c55e] opacity-70"></span>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-[#2e2e36] rounded-[10px] p-[14px] border border-[#ffffff0f]">
            <div className="text-[10px] text-[#55566a] mb-[6px] uppercase tracking-[0.06em]">Page Views</div>
            <div className="text-[20px] font-extrabold tracking-[-0.04em]">24.8K</div>
            <div className="text-[10px] font-semibold text-[#22c55e] mt-1">+12.3%</div>
          </div>
          <div className="bg-[#2e2e36] rounded-[10px] p-[14px] border border-[#ffffff0f]">
            <div className="text-[10px] text-[#55566a] mb-[6px] uppercase tracking-[0.06em]">Conversions</div>
            <div className="text-[20px] font-extrabold tracking-[-0.04em]">1,847</div>
            <div className="text-[10px] font-semibold text-[#22c55e] mt-1">+8.1%</div>
          </div>
          <div className="bg-[#2e2e36] rounded-[10px] p-[14px] border border-[#ffffff0f]">
            <div className="text-[10px] text-[#55566a] mb-[6px] uppercase tracking-[0.06em]">Bounce Rate</div>
            <div className="text-[20px] font-extrabold tracking-[-0.04em]">32%</div>
            <div className="text-[10px] font-semibold text-[#22c55e] mt-1">-4.2%</div>
          </div>
        </div>

        <div className="bg-[#2e2e36] rounded-[10px] p-4 border border-[#ffffff0f] h-[120px] relative overflow-hidden">
          <div className="text-[10px] text-[#55566a] uppercase tracking-[0.06em]"> Traffic — Last 30 days</div>
          <div className="absolute bottom-4 left-4 right-4 h-[60px]">
            <svg viewBox="0 0 300 60" preserveAspectRatio="none">…
              <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stop-color="rgba(255,107,107,0.25)"></stop>
                 <stop offset="100%" stop-color="rgba(255,107,107,0)"></stop>
               </linearGradient>
              </defs>
              <path d="M0 50 Q20 45 40 40 T80 30 T120 35 T160 20 T200 25 T240 15 T280 10 T300 5 V60 H0Z" fill="url(#lineGrad)"></path>
              <path d="M0 50 Q20 45 40 40 T80 30 T120 35 T160 20 T200 25 T240 15 T280 10 T300 5" fill="none" stroke="#FF6B6B" stroke-width="2"></path>
            </svg>

          </div>
        </div>

      </div>

    </div>

  </div>

</section>
    
  )
}
