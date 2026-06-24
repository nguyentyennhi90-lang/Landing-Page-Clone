import React from 'react'

export const FeatureOverviewSection = () => {
  return (
   <section className="border-t border-[#ffffff0f] py-[120px] relative">
  <div className="w-full max-w-[1200px] mx-auto px-6 m-0 p-0 box-border">
    <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out text-center mb-16">
      <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#ff6b6b] uppercase tracking-[0.1em] mb-[14px] font-mono"> Features</p>
      <h2 className="text-[46px] font-extrabold tracking-[-0.04em] leading-[1.1] mb-[14px]">Everything you need.<br />Nothing you don't.</h2>
      <p className="mx-auto text-[16px] text-[#8a8b9e] max-w-[480px] leading-[1.7]">A complete analytics toolkit that replaces five tools in your stack.</p>
    </div>
    <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out flex justify-center gap-1 mb-14 bg-[#26262d] border border-[#ffffff0f] rounded-full p-1 w-fit mx-auto">
                <button className="bg-[#ff6b6b] text-white shadow-[0_0_20px_#ff6b6b59] px-6 py-[10px] rounded-full text-[13.5px] font-semibold border-0 cursor-pointer transition-all duration-300 whitespace-nowrap tracking-[-0.01em]">Dashboard</button>
                <button className="px-6 py-[10px] rounded-full text-[13.5px] font-semibold text-[#55566a] bg-transparent border-0 cursor-pointer transition-all duration-300 whitespace-nowrap tracking-[-0.01em] hover:text-[#8a8b9e]">Funnels</button>
                <button className="px-6 py-[10px] rounded-full text-[13.5px] font-semibold text-[#55566a] bg-transparent border-0 cursor-pointer transition-all duration-300 whitespace-nowrap tracking-[-0.01em] hover:text-[#8a8b9e]">SDK</button>
                <button className="px-6 py-[10px] rounded-full text-[13.5px] font-semibold text-[#55566a] bg-transparent border-0 cursor-pointer transition-all duration-300 whitespace-nowrap tracking-[-0.01em] hover:text-[#8a8b9e]">Session Replay</button>
                <button className="px-6 py-[10px] rounded-full text-[13.5px] font-semibold text-[#55566a] bg-transparent border-0 cursor-pointer transition-all duration-300 whitespace-nowrap tracking-[-0.01em] hover:text-[#8a8b9e]">Privacy</button>
            </div>
    <div className="relative">
                <div className="grid grid-cols-[1fr_1.2fr] gap-16 items-center animate-[panelIn_0.45s_ease_forwards]">
                    <div className="max-w-[440px]">
                        <div className="w-12 h-12 bg-[#ff6b6b14] border border-[#ff6b6b1a] rounded-[12px] grid place-items-center mb-6 text-[#ff6b6b]">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12 A9 9 0 1 1 12 3"></path><path d="M21 3v9h-9"></path></svg>
                        </div>
                        <div className="text-[28px] font-extrabold tracking-[-0.04em] mb-[14px] leading-[1.15]">Real-Time Dashboard</div>
                        <div className="text-[15px] text-[#8a8b9e] leading-[1.75] mb-6">Watch your metrics update live with sub-second latency. Custom widgets, drag-and-drop layout, and instant sharing with your team.</div>
                        <ul className="list-none flex flex-col gap-3">
                            <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e]"><svg className="text-[#ff6b6b] shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Sub-second data refresh</li>
                            <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e]"><svg className="text-[#ff6b6b] shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Drag-and-drop widgets</li>
                            <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e]"><svg className="text-[#ff6b6b] shrink-0" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Scheduled email reports</li>
                        </ul>
                    </div>
                    <div className="bg-[#26262d] border border-[#ffffff0f] rounded-2xl overflow-hidden shadow-[0_20px_60px_#0000004d] relative">
                        <div className="flex items-center gap-[6px] px-4 py-[11px] border-b border-[#ffffff0f] bg-[#ffffff05]">
                           <span className="w-[8px] h-[8px] rounded-full bg-[#f43f5e] opacity-60"></span>
                           <span className="w-[8px] h-[8px] rounded-full bg-[#f59e0b] opacity-60"></span>
                           <span className="w-[8px] h-[8px] rounded-full bg-[#22c55e] opacity-60"></span>
                         </div>
                        <div className="p-6">
                            <div className="grid grid-cols-3 gap-[10px] mb-4">
                                <div className="bg-[#2e2e36] border border-[#ffffff0f] rounded-[10px] p-[14px]">
                                    <div className="text-[9.5px] text-[#55566a] uppercase tracking-[0.08em] mb-[6px] font-mono">Active Users</div>
                                    <div className="text-[22px] font-extrabold tracking-[-0.04em] mb-1">3,842</div>
                                    <div className="text-[#22c55e] text-[10px] font-semibold">+12.3%</div>
                                </div>
                                <div className="bg-[#2e2e36] border border-[#ffffff0f] rounded-[10px] p-[14px]">
                                    <div className="text-[9.5px] text-[#55566a] uppercase tracking-[0.08em] mb-[6px] font-mono">Conversion</div>
                                    <div className="text-[22px] font-extrabold tracking-[-0.04em] mb-1">12.4%</div>
                                    <div className="text-[#22c55e] text-[10px] font-semibold">+2.1%</div>
                                </div>
                                <div className="bg-[#2e2e36] border border-[#ffffff0f] rounded-[10px] p-[14px]">
                                    <div className="text-[9.5px] text-[#55566a] uppercase tracking-[0.08em] mb-[6px] font-mono">Churn</div>
                                    <div className="text-[22px] font-extrabold tracking-[-0.04em] mb-1">1.8%</div>
                                    <div className="text-[#f43f5e] text-[10px] font-semibold">-0.4%</div>
                                </div>
                            </div>
                            <div className="bg-[#2e2e36] border border-[#ffffff0f] rounded-[10px] p-4 h-[140px] relative">
                                <div className="text-[10px] text-[#55566a] uppercase tracking-[0.08em] font-mono mb-2">Revenue — Last 7 days</div>
                                <svg viewBox="0 0 400 80" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stop-color="rgba(255,107,107,0.2)"></stop>
                                            <stop offset="100%" stop-color="rgba(255,107,107,0)"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5 V80 H0Z" fill="url(#areaGrad)"></path>
                                    <path d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5" fill="none" stroke="#FF6B6B" stroke-width="2"></path>
                                    <circle cx="320" cy="15" r="4" fill="#FF6B6B" stroke="#1E1E24" stroke-width="2"></circle>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                </div>   
               {/* <div className="hidden items-center animate-[panelIn_0.45s_ease_forwards]">
                    <div className="max-w-[440px]">
                        <div className="w-12 h-12 bg-[#ff6b6b14] border border-[#ff6b6b1a] rounded-[12px] grid place-items-center mb-6 text-[#ff6b6b]">
                            <svg className="w-[22px] h-[22px] fill-none stroke-current stroke-2"  viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
                        </div>
                        <h3 className="text-[28px] font-extrabold tracking-[-0.04em] mb-[14px] leading-[1.15]">Funnel Analytics</h3>
                        <p className="text-[15px] text-[#8a8b9e] leading-[1.75] mb-[28px]">Identify exactly where users drop off and why. Build funnels in seconds and correlate drop-off with user segments.</p>
                        <ul  className="list-none flex flex-col gap-3">
                            <li><svg  className="w-[15px] h-[15px] shrink-0 text-[#ff6b6b] fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Visual drop-off analysis</li>
                            <li><svg  className="w-[15px] h-[15px] shrink-0 text-[#ff6b6b] fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Segment correlation</li>
                            <li><svg  className="w-[15px] h-[15px] shrink-0 text-[#ff6b6b] fill-none stroke-current stroke-[2.5]" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Historical comparison</li>
                        </ul>
                    </div>
                    <div className="bg-[#26262d] border border-[#ffffff0f] rounded-[16px] overflow-hidden shadow-[0_20px_60px_#0000004d] relative">
                        <div class="flex items-center gap-1.5 px-4 py-[11px] border-b border-[#ffffff0f] bg-[#ffffff05]">
                         <span className="w-[8px] h-[8px] rounded-full bg-[#f43f5e] opacity-60"></span>
                           <span className="w-[8px] h-[8px] rounded-full bg-[#f59e0b] opacity-60"></span>
                           <span className="w-[8px] h-[8px] rounded-full bg-[#22c55e] opacity-60"></span>
                        </div>
                        <div className="fv-body">
                            <div className="p-6">
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex items-center gap-3.5 px-[14px] py-[10px] bg-[#2e2e36] border border-[#ffffff0f] rounded-[6px]"><span>Landing Page</span><span>12,480</span></div>
                                        <div className="funnel-track"><div className="funnel-fill" style="width:100%"></div></div>
                                    </div>
                                    <div className="funnel-drop">—</div>
                                </div>
                                <div className="flex items-center gap-3.5 px-[14px] py-[10px] bg-[#2e2e36] border border-[#ffffff0f] rounded-[6px]">
                                    <div class="funnel-bar-wrap">
                                        <div class="funnel-bar-label"><span>Sign Up Started</span><span>8,736</span></div>
                                        <div class="funnel-track"><div class="funnel-fill" style="width:70%"></div></div>
                                    </div>
                                    <div class="funnel-drop">-30%</div>
                                </div>
                                <div class="flex items-center gap-3.5 px-[14px] py-[10px] bg-[#2e2e36] border border-[#ffffff0f] rounded-[6px]">
                                    <div class="funnel-bar-wrap">
                                        <div class="funnel-bar-label"><span>Email Verified</span><span>6,115</span></div>
                                        <div class="funnel-track"><div class="funnel-fill amber" style="width:49%"></div></div>
                                    </div>
                                    <div class="funnel-drop">-30%</div>
                                </div>
                                <div class="flex items-center gap-3.5 px-[14px] py-[10px] bg-[#2e2e36] border border-[#ffffff0f] rounded-[6px]">
                                    <div class="funnel-bar-wrap">
                                        <div class="funnel-bar-label"><span>Onboarding Done</span><span>3,670</span></div>
                                        <div class="funnel-track"><div class="funnel-fill amber" style="width:29%"></div></div>
                                    </div>
                                    <div class="funnel-drop">-40%</div>
                                </div>
                                <div class="flex items-center gap-3.5 px-[14px] py-[10px] bg-[#2e2e36] border border-[#ffffff0f] rounded-[6px]">
                                    <div class="funnel-bar-wrap">
                                        <div class="funnel-bar-label"><span>First Action</span><span>2,569</span></div>
                                        <div class="funnel-track"><div class="funnel-fill green" style="width:20.5%"></div></div>
                                    </div>
                                    <div class="funnel-drop">-30%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* </div> */}
                </div>
    </section>
  )
}
