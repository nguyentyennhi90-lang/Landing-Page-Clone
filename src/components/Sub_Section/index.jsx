import React from 'react'

export const SubSection = () => {
  return (
  <section className="relative overflow-hidden text-center pt-[100px] pb-[120px]">
        <div className="w-full max-w-[1200px] mx-auto px-6">
            <div className="relative z-[1] max-w-[520px] mx-auto opacity-100 translate-y-0 transition-[opacity,transform] duration-[700ms] ease-in">
                <h2 className="text-[36px] font-extrabold tracking-[-0.04em] leading-[1.1] mb-3">Stay in the loop</h2>
                <p className="max-w-[380px] mx-auto mb-[32px] text-[15px] text-[#8a8b9e] leading-[1.7]">Product updates, engineering insights, and zero spam. Unsubscribe anytime.</p>
                <div className="flex gap-0 bg-[#26262d] border border-[#ffffff0f] rounded-[16px] p-[5px] transition-[border-color,box-shadow] duration-300">
                      <input type="email" placeholder="Enter your email" className="flex-1 min-w-0 bg-transparent border-0 px-[18px] py-[14px] text-[15px] text-[#eeeef0] outline-none placeholder:text-[#55566a]" />
                    <button className="inline-flex items-center justify-center gap-2 rounded-[12px] px-[28px] py-[12px] bg-[#ff6b6b] text-white text-[13.5px] font-semibold tracking-[-0.01em] shadow-[0_0_24px_#ff6b6b59,inset_0_1px_0_#ffffff1a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_#ff6b6b80,inset_0_1px_0_#ffffff1a]">Subscribe</button>
                </div>
                <div className="mt-[20px] flex items-center justify-center gap-[20px]">
                    <span className="flex items-center gap-[6px] text-[12px] text-[#55566a]">
                        <svg className="w-[13px] h-[13px] fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round text-[#ff6b6b]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        6,200+ subscribers
                    </span>
                    <span className="flex items-center gap-[6px] text-[12px] text-[#55566a]">
                        <svg className="w-[13px] h-[13px] fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round text-[#ff6b6b]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Monthly digest
                    </span>
                    <span className="flex items-center gap-[6px] text-[12px] text-[#55566a]">
                        <svg className="w-[13px] h-[13px] fill-none stroke-current stroke-[2.5] stroke-linecap-round stroke-linejoin-round text-[#ff6b6b]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Unsubscribe anytime
                    </span>
                </div>
            </div>
        </div>
    </section>

  )
}
