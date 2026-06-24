import React from 'react'

export const StaticSection = () => {
  return (
   <section className="py-20 border-t border-b border-[#ffffff0f]">
        <div className="w-full max-w-[1200px] mx-auto px-6">
            <div className="flex justify-between">
                <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out text-left flex-1">
                    <div className="text-[48px] font-extrabold tracking-[-0.04em] leading-none mb-[6px]">50M+</div>
                    <div className="text-[13px] text-[#55566a] font-medium">Events tracked daily</div>
                </div>
                <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out text-left flex-1">
                    <div className="text-[48px] font-extrabold tracking-[-0.04em] leading-none mb-[6px]">99.9%</div>
                    <div className="text-[13px] text-[#55566a] font-medium">Uptime SLA</div>
                </div>
                <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out text-left flex-1">
                    <div className="text-[48px] font-extrabold tracking-[-0.04em] leading-none mb-[6px]">2.400+</div>
                    <div className="text-[13px] text-[#55566a] font-medium">Teams worldwide</div>
                </div>
                <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out text-left flex-1">
                    <div className="text-[48px] font-extrabold tracking-[-0.04em] leading-none mb-[6px]">&lt;50ms</div>
                    <div className="text-[13px] text-[#55566a] font-medium">Query response time</div>
                </div>
            </div>
        </div>
    </section>
  )
}
