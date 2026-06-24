import React from "react";

export const Header = () => {
  return (

    <div className="fixed top-0 left-0 w-full z-[1000] py-5 transition-all duration-400">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-6">
      <div className="flex items-center gap-[10px] text-[20px] font-extrabold tracking-[-0.04em]">
        <div className="w-[30px] h-[30px] bg-[#ff6b6b] rounded-[8px] grid place-items-center text-[14px] font-extrabold text-white shadow-[0_0_24px_#ff6b6b59]">
          Q
        </div>
        <div>Quantix</div>
      </div>
      <div className="flex items-center gap-8 list-none">
        <div className="text-[13.5px] font-medium text-[#55566a] tracking-[-0.01em] transition-colors duration-300 hover:text-white">
          Features
        </div>
        <div className="text-[13.5px] font-medium text-[#55566a] tracking-[-0.01em] transition-colors duration-300 hover:text-white">
          Pricing
        </div>
        <div className="text-[13.5px] font-medium text-[#55566a] tracking-[-0.01em] transition-colors duration-300 hover:text-white">
          Docs
        </div>
        <div className="text-[13.5px] font-medium text-[#55566a] tracking-[-0.01em] transition-colors duration-300 hover:text-white">
          Templates
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <div className="inline-flex items-center justify-center gap-2 px-[22px] py-[10px] rounded-full text-[13.5px] font-semibold cursor-pointer border-0 transition-all duration-300 tracking-[-0.01em]">Log in </div>
        <div className="inline-flex items-center justify-center gap-2 px-[22px] py-[10px] rounded-full bg-[#ff6b6b] text-white text-[13.5px] font-semibold tracking-[-0.01em] cursor-pointer border-0 transition-all duration-300 shadow-[0_0_24px_var(--accent-glow),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-[#FF8585] hover:shadow-[0_0_36px_var(--accent-glow),0_1px_0_rgba(255,255,255,0.15)_inset] hover:-translate-y-[1px]"> Start Free Trial</div>
      </div>
    </div>
    </div>
  );
};
