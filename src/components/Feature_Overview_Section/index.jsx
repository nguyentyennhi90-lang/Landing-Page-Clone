import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const FeatureOverviewSection = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const handleTabClick = (e) => {
    setActiveTab(e.currentTarget.dataset.tab);
  };
  return (
    <section className="border-t border-[#ffffff0f] py-[120px] relative">
      <div
        data-aos="fade-up"
        className="w-full max-w-[1200px] mx-auto px-6 m-0 p-0 box-border"
      >
        <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out text-center mb-16">
          <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#ff6b6b] uppercase tracking-[0.1em] mb-[14px] font-mono">
            {" "}
            Features
          </p>
          <h2 className="text-[46px] font-extrabold tracking-[-0.04em] leading-[1.1] mb-[14px]">
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
          <p className="mx-auto text-[16px] text-[#8a8b9e] max-w-[480px] leading-[1.7]">
            A complete analytics toolkit that replaces five tools in your stack.
          </p>
        </div>
        <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out flex justify-center gap-1 mb-14 bg-[#26262d] border border-[#ffffff0f] rounded-full p-1 w-fit mx-auto">
          <button
            onClick={handleTabClick}
            data-tab="dashboard"
            className={` px-6 py-[10px] rounded-full text-[13.5px] font-semibold border-0 cursor-pointer transition-all duration-300 whitespace-nowrap tracking-[-0.01em] ${activeTab === "dashboard" ? "bg-[#ff6b6b] text-white shadow-[0_0_20px_#ff6b6b59]" : "bg-transparent text-[#55566a] hover:text-[#8a8b9e]"}`}
          >
            Dashboard
          </button>
          <button
            onClick={handleTabClick}
            data-tab="funnels"
            className={`px-6 py-[10px] rounded-full text-[13.5px] font-semibold border-0 cursor-pointer transition-all duration-300 whitespace-nowrap tracking-[-0.01em] ${activeTab === "funnels" ? "bg-[#ff6b6b] text-white" : "bg-transparent text-[#55566a] hover:text-[#8a8b9e]"}`}
          >
            Funnels
          </button>
          <button
            onClick={handleTabClick}
            data-tab="sdk"
            className={`px-6 py-[10px] rounded-full text-[13.5px] font-semibold border-0 cursor-pointer transition-all duration-300 whitespace-nowrap tracking-[-0.01em] ${activeTab === "sdk" ? "bg-[#ff6b6b] text-white" : "bg-transparent text-[#55566a] hover:text-[#8a8b9e]"}`}
          >
            SDK
          </button>
          <button
            onClick={handleTabClick}
            data-tab="session-replay"
            className={`px-6 py-[10px] rounded-full text-[13.5px] font-semibold border-0 cursor-pointer transition-all duration-300 whitespace-nowrap tracking-[-0.01em] ${activeTab === "session-replay" ? "bg-[#ff6b6b] text-white" : "bg-transparent text-[#55566a] hover:text-[#8a8b9e]"}`}
          >
            Session Replay
          </button>
          <button
            onClick={handleTabClick}
            data-tab="privacy"
            className={`px-6 py-[10px] rounded-full text-[13.5px] font-semibold border-0 cursor-pointer transition-all duration-300 whitespace-nowrap tracking-[-0.01em] ${activeTab === "privacy" ? "bg-[#ff6b6b] text-white" : "bg-transparent text-[#55566a] hover:text-[#8a8b9e]"}`}
          >
            Privacy
          </button>
        </div>
        {activeTab === "dashboard" && (
          <div className="relative">
            <div className="grid grid-cols-[1fr_1.2fr] gap-16 items-center animate-[panelIn_0.45s_ease_forwards]">
              <div className="max-w-[440px]">
                <div className="w-12 h-12 bg-[#ff6b6b14] border border-[#ff6b6b1a] rounded-[12px] grid place-items-center mb-6 text-[#ff6b6b]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 12 A9 9 0 1 1 12 3"></path>
                    <path d="M21 3v9h-9"></path>
                  </svg>
                </div>
                <div className="text-[28px] font-extrabold tracking-[-0.04em] mb-[14px] leading-[1.15]">
                  Real-Time Dashboard
                </div>
                <div className="text-[15px] text-[#8a8b9e] leading-[1.75] mb-6">
                  Watch your metrics update live with sub-second latency. Custom
                  widgets, drag-and-drop layout, and instant sharing with your
                  team.
                </div>
                <ul className="list-none flex flex-col gap-3">
                  <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e]">
                    <svg
                      className="text-[#ff6b6b] shrink-0"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Sub-second data refresh
                  </li>
                  <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e]">
                    <svg
                      className="text-[#ff6b6b] shrink-0"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Drag-and-drop widgets
                  </li>
                  <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e]">
                    <svg
                      className="text-[#ff6b6b] shrink-0"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>{" "}
                    Scheduled email reports
                  </li>
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
                      <div className="text-[9.5px] text-[#55566a] uppercase tracking-[0.08em] mb-[6px] font-mono">
                        Active Users
                      </div>
                      <div className="text-[22px] font-extrabold tracking-[-0.04em] mb-1">
                        3,842
                      </div>
                      <div className="text-[#22c55e] text-[10px] font-semibold">
                        +12.3%
                      </div>
                    </div>
                    <div className="bg-[#2e2e36] border border-[#ffffff0f] rounded-[10px] p-[14px]">
                      <div className="text-[9.5px] text-[#55566a] uppercase tracking-[0.08em] mb-[6px] font-mono">
                        Conversion
                      </div>
                      <div className="text-[22px] font-extrabold tracking-[-0.04em] mb-1">
                        12.4%
                      </div>
                      <div className="text-[#22c55e] text-[10px] font-semibold">
                        +2.1%
                      </div>
                    </div>
                    <div className="bg-[#2e2e36] border border-[#ffffff0f] rounded-[10px] p-[14px]">
                      <div className="text-[9.5px] text-[#55566a] uppercase tracking-[0.08em] mb-[6px] font-mono">
                        Churn
                      </div>
                      <div className="text-[22px] font-extrabold tracking-[-0.04em] mb-1">
                        1.8%
                      </div>
                      <div className="text-[#f43f5e] text-[10px] font-semibold">
                        -0.4%
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#2e2e36] border border-[#ffffff0f] rounded-[10px] p-4 h-[140px] relative">
                    <div className="text-[10px] text-[#55566a] uppercase tracking-[0.08em] font-mono mb-2">
                      Revenue — Last 7 days
                    </div>
                    <svg viewBox="0 0 400 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient
                          id="areaGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stop-color="rgba(255,107,107,0.2)"
                          ></stop>
                          <stop
                            offset="100%"
                            stop-color="rgba(255,107,107,0)"
                          ></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5 V80 H0Z"
                        fill="url(#areaGrad)"
                      ></path>
                      <path
                        d="M0 60 C40 55 60 40 100 35 S160 30 200 20 S280 25 320 15 S380 10 400 5"
                        fill="none"
                        stroke="#FF6B6B"
                        stroke-width="2"
                      ></path>
                      <circle
                        cx="320"
                        cy="15"
                        r="4"
                        fill="#FF6B6B"
                        stroke="#1E1E24"
                        stroke-width="2"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "funnels" && (
          <div className="grid grid-cols-[1fr_1.2fr] gap-16 items-center animate-[panelIn_0.45s_ease_forwards]">
            <div className="max-w-[440px]">
              <div className="w-12 h-12 bg-[#ff6b6b14] border border-[#ff6b6b1a] rounded-[12px] grid place-items-center mb-6 text-[#ff6b6b]">
                <svg
                  className="w-[22px] h-[22px] fill-none stroke-current stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20V10"></path>
                  <path d="M18 20V4"></path>
                  <path d="M6 20v-4"></path>
                </svg>
              </div>
              <h3 className="text-[28px] font-extrabold tracking-[-0.04em] mb-[14px] leading-[1.15]">
                Funnel Analytics
              </h3>
              <p className="text-[15px] text-[#8a8b9e] leading-[1.75] mb-[28px]">
                Identify exactly where users drop off and why. Build funnels in
                seconds and correlate drop-off with user segments.
              </p>
              <ul className="list-none flex flex-col gap-3">
                <li class="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e]">
                  <svg
                    className="text-[#ff6b6b] shrink-0"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Visual drop-off analysis
                </li>
                <li class="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e]">
                  <svg
                    className="text-[#ff6b6b] shrink-0"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Segment correlation
                </li>
                <li class="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e]">
                  <svg
                    className="text-[#ff6b6b] shrink-0"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  Historical comparison
                </li>
              </ul>
            </div>
            <div className="bg-[#26262d] border border-[#ffffff0f] rounded-[16px] overflow-hidden shadow-[0_20px_60px_#0000004d] relative">
              <div className="flex items-center gap-1.5 px-4 py-[11px] border-b border-[#ffffff0f] bg-[#ffffff05]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#f43f5e] opacity-60"></span>
                <span className="w-[8px] h-[8px] rounded-full bg-[#f59e0b] opacity-60"></span>
                <span className="w-[8px] h-[8px] rounded-full bg-[#22c55e] opacity-60"></span>
              </div>
              <div className="p-6">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-3.5 px-[14px] py-[10px] bg-[#2e2e36] border border-[#ffffff0f] rounded-[6px]">
                    <div className="flex-1">
                      <div className="flex justify-between text-[11px] mb-[5px]">
                        <span className="text-[#8a8b9e]">Landing Page</span>
                        <span className="font-['JetBrains_Mono',monospace] text-[#55566a] text-[10.5px]">
                          12,480
                        </span>
                      </div>
                      <div className="h-[6px] bg-[#ffffff0f] rounded-[6px] overflow-hidden">
                        <div
                          className="h-full rounded-[6px] bg-[#ff6b6b] transition-[width] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-[44px] flex-shrink-0 text-right font-['JetBrains_Mono',monospace] text-[10px] font-semibold text-[#f43f5e]">
                      —
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 px-[14px] py-[10px] bg-[#2e2e36] border border-[#ffffff0f] rounded-[6px]">
                    <div className="flex-1">
                      <div className="flex justify-between text-[11px] mb-[5px]">
                        <span className="text-[#8a8b9e]">Sign Up Started</span>
                        <span className="font-['JetBrains_Mono',monospace] text-[#55566a] text-[10.5px]">
                          8,736
                        </span>
                      </div>
                      <div className="h-[6px] bg-[#ffffff0f] rounded-[6px] overflow-hidden">
                        <div
                          className="h-full rounded-[6px] bg-[#ff6b6b] transition-[width] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-[44px] flex-shrink-0 text-right font-['JetBrains_Mono',monospace] text-[10px] font-semibold text-[#f43f5e]">
                      -30%
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 px-[14px] py-[10px] bg-[#2e2e36] border border-[#ffffff0f] rounded-[6px]">
                    <div className="flex-1">
                      <div className="flex justify-between text-[11px] mb-[5px]">
                        <span className="text-[#8a8b9e]">Email Verified</span>
                        <span className="font-['JetBrains_Mono',monospace] text-[#55566a] text-[10.5px]">
                          6,115
                        </span>
                      </div>
                      <div className="h-[6px] bg-[#ffffff0f] rounded-[6px] overflow-hidden">
                        <div
                          className="h-full rounded-[6px] bg-[#f59e0b] transition-[width] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                          style={{ width: "49%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-[44px] flex-shrink-0 text-right font-['JetBrains_Mono',monospace] text-[10px] font-semibold text-[#f43f5e]">
                      -30%
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 px-[14px] py-[10px] bg-[#2e2e36] border border-[#ffffff0f] rounded-[6px]">
                    <div className="flex-1">
                      <div className="flex justify-between text-[11px] mb-[5px]">
                        <span className="text-[#8a8b9e]">Onboarding Done</span>
                        <span className="font-['JetBrains_Mono',monospace] text-[#55566a] text-[10.5px]">
                          3,670
                        </span>
                      </div>
                      <div className="h-[6px] bg-[#ffffff0f] rounded-[6px] overflow-hidden">
                        <div
                          className="h-full rounded-[6px] bg-[#f59e0b] transition-[width] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                          style={{ width: "29%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-[44px] flex-shrink-0 text-right font-['JetBrains_Mono',monospace] text-[10px] font-semibold text-[#f43f5e]">
                      -40%
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 px-[14px] py-[10px] bg-[#2e2e36] border border-[#ffffff0f] rounded-[6px]">
                    <div className="flex-1">
                      <div className="flex justify-between text-[11px] mb-[5px]">
                        <span className="text-[#8a8b9e]">First Action</span>
                        <span className="font-['JetBrains_Mono',monospace] text-[#55566a] text-[10.5px]">
                          2,569
                        </span>
                      </div>
                      <div className="h-[6px] bg-[#ffffff0f] rounded-[6px] overflow-hidden">
                        <div
                          className="h-full rounded-[6px] bg-[#22C55E] transition-[width] duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                          style={{ width: "20.5%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-[44px] flex-shrink-0 text-right font-['JetBrains_Mono',monospace] text-[10px] font-semibold text-[#f43f5e]">
                      -30%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "sdk" && (
          <div className="grid grid-cols-2 gap-[60px] items-center animate-[panelIn_0.45s_ease_forwards]">
            {/* Left */}
            <div className="max-w-[440px]">
              <div className="w-12 h-12 mb-6 rounded-xl bg-[#ff6b6b14] border border-[#ff6b6b1a] grid place-items-center text-[#ff6b6b]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>

              <h3 className="text-[28px] font-extrabold tracking-[-0.04em] leading-[1.15] mb-[14px]">
                One-Line SDK
              </h3>

              <p className="text-[15px] leading-[1.75] text-[#8a8b9e] mb-7">
                Drop in a single script tag or npm package. Auto-capture
                pageviews, clicks, and custom events out of the box.
              </p>

              <ul className="flex flex-col gap-3 text-[#8a8b9e]">
                {[
                  "Under 4KB gzipped",
                  "Zero config autocapture",
                  "TypeScript-first API",
                ].map((item) => (
                  <li className="flex items-center gap-2.5 text-[15px] text-[#8a8b9e]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-[#ff6b6b] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="relative overflow-hidden rounded-2xl bg-[#26262d] border border-[#ffffff0f] shadow-[0_20px_60px_#0000004d]">
              {/* Toolbar */}
              <div className="flex items-center gap-1.5 px-4 py-[11px] border-b border-[#ffffff0f] bg-[#ffffff05]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#f43f5e] opacity-60"></span>
                <span className="w-[8px] h-[8px] rounded-full bg-[#f59e0b] opacity-60"></span>
                <span className="w-[8px] h-[8px] rounded-full bg-[#22c55e] opacity-60"></span>
              </div>

              <div className="p-6">
                {/* Code */}
                <div className="rounded-xl bg-[#1f1f25] border border-[#ffffff08] p-5 font-['JetBrains_Mono',monospace] text-[12px] leading-7 text-[#8a8b9e]">
                  <span className="text-[#55566a]">
                    // Install: npm i @quantix/sdk
                  </span>
                  <br />
                  <br />
                  <span className="text-[#ff9b9b]">import</span> {"{ Quantix }"}{" "}
                  <span className="text-[#ff9b9b]">from</span>{" "}
                  <span className="text-[#22c55e]">'@quantix/sdk'</span>
                  <br />
                  <br />
                  <span className="text-[#ff9b9b]">const</span> qx ={" "}
                  <span className="text-[#ff9b9b]">new</span>{" "}
                  <span className="text-[#f59e0b]">Quantix</span>
                  {"({"}
                  <br />
                  <span className="ml-5 block">
                    apiKey:
                    <span className="text-[#22c55e]"> 'qx_live_k8x2...'</span>,
                  </span>
                  <span className="ml-5 block">
                    autocapture:
                    <span className="text-[#60a5fa]"> true</span>,
                  </span>
                  <span className="ml-5 block">
                    sessionReplay:
                    <span className="text-[#60a5fa]"> true</span>,
                  </span>
                  {"})"}
                  <br />
                  <br />
                  <span className="text-[#55566a]">// Track custom events</span>
                  <br />
                  qx.
                  <span className="text-[#f59e0b]">track</span>
                  <span className="text-[#22c55e]">'checkout'</span>,
                  <br />
                  <span className="ml-5 block">
                    value:
                    <span className="text-[#ef4444]"> 49.99</span>,
                  </span>
                  <span className="ml-5 block">
                    plan:
                    <span className="text-[#22c55e]"> 'pro'</span>
                  </span>
                  {"})"}
                </div>

                {/* Output */}
                <div className="mt-4 rounded-xl bg-[#2d2d35] border border-[#ffffff0f] px-5 py-4">
                  <div className="uppercase text-[10px] tracking-[0.15em] text-[#55566a] mb-2">
                    Output
                  </div>

                  <div className="flex items-center gap-3 text-[#22c55e] font-['JetBrains_Mono',monospace] text-[12px]">
                    <span className="relative flex w-2.5 h-2.5">
                      <span class="w-2 h-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e80]"></span>
                    </span>
                    Event tracked in 8ms — 200 OK
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "session-replay" && (
          <div className="grid grid-cols-2 gap-[60px] items-center animate-[panelIn_0.45s_ease_forwards]">
            {/* Left */}
            <div className="max-w-[440px]">
              <div className="w-12 h-12 mb-6 rounded-xl bg-[#ff6b6b14] border border-[#ff6b6b1a] grid place-items-center text-[#ff6b6b]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>

              <h3 className="text-[28px] font-extrabold tracking-[-0.04em] leading-[1.15] mb-[14px]">
                Session Replay
              </h3>

              <p className="text-[15px] leading-[1.75] text-[#8a8b9e] mb-7">
                See exactly what your users see. Replay sessions with
                pixel-perfect accuracy and zero performance impact on your app.
              </p>

              <ul className="flex flex-col gap-3  text-[#8a8b9e] mb-7">
                {[
                  "Pixel-perfect playback",
                  "Console log capture",
                  "Rage click detection",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[15px]"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-[#ff6b6b] shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right */}
            <div className="relative overflow-hidden rounded-2xl bg-[#26262d] border border-[#ffffff0f] shadow-[0_20px_60px_#0000004d]">
              {/* Toolbar */}
              <div className="flex items-center gap-1.5 px-4 py-[11px] border-b border-[#ffffff0f] bg-[#ffffff05]">
                <span className="w-[8px] h-[8px] rounded-full bg-[#f43f5e] opacity-60"></span>
                <span className="w-[8px] h-[8px] rounded-full bg-[#f59e0b] opacity-60"></span>
                <span className="w-[8px] h-[8px] rounded-full bg-[#22c55e] opacity-60"></span>
              </div>

              <div className="p-6">
                {/* Replay UI */}
                <div className="rounded-2xl border border-[#ffffff0f] bg-[#2e2e36] overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-[#ffffff0f]">
                    <div className="flex items-center gap-2 text-[#8a8b9e]">
                      <span className="w-2 h-2 rounded-full bg-[#ff6b6b] shadow-[0_0_8px_#ff6b6b80]" />
                      Recording
                    </div>

                    <span className="font-['JetBrains_Mono',monospace] text-[12px] text-[#55566a]">
                      02:34 / 05:12
                    </span>
                  </div>

                  {/* Viewport */}
                  <div className="relative p-7 bg-[#2a2a31]">
                    <div className="rounded-xl border border-[#ffffff0f] bg-[#24242b] p-5">
                      <div className="space-y-4">
                        <div className="h-3 w-[60%] rounded-full bg-[#3a3a43]" />
                        <div className="h-3 w-[85%] rounded-full bg-[#3a3a43]" />
                        <div className="h-3 w-[48%] rounded-full bg-[#3a3a43]" />
                        <div className="h-3 w-[70%] rounded-full bg-[#3a3a43]" />

                        <div className="h-3 w-[70px] rounded-full bg-[#b96565]" />

                        <div className="grid grid-cols-3 gap-3 pt-4">
                          <div className="h-12 rounded-lg border border-[#ffffff0f] bg-[#2f2f38]" />
                          <div className="h-12 rounded-lg border border-[#ffffff0f] bg-[#2f2f38]" />
                          <div className="h-12 rounded-lg border border-[#ffffff0f] bg-[#2f2f38]" />
                        </div>
                      </div>
                    </div>

                    {/* Cursor */}
                    <div className="absolute w-3 h-3 border-l-2 border-t-2 border-[#ff6b6b] rotate-[-45deg] drop-shadow-[0_0_6px_rgba(255,107,107,0.4)] animate-[cursorMove_4s_ease-in-out_infinite]"></div>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center gap-4 px-5 py-4 border-t border-[#ffffff0f]">
                    <div className="w-7 h-7 rounded-full bg-[#e67672] flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="#fff">
                        <polygon points="5 3 19 12 5 21" />
                      </svg>
                    </div>

                    <div className="flex-1 h-[4px] rounded-full bg-[#3a3a43] overflow-hidden">
                      <div className="w-[48%] h-full bg-[#f08080]" />
                    </div>
                  </div>
                </div>

                {/* Events */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {[
                    ["click", "#ff6b6b"],
                    ["scroll", "#f59e0b"],
                    ["rage_click", "#f43f5e"],
                    ["input", "#22c55e"],
                  ].map(([name, color]) => (
                    <div
                      key={name}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2d2d35] border border-[#ffffff0f] text-[#55566a] text-[13px] font-['JetBrains_Mono',monospace]"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeTab === "privacy" && (
          <div class="flex items-center justify-between gap-12">
            <div class="max-w-md">
              <div class="w-10 h-10 rounded-xl bg-[#ff6b6b]/10 flex items-center justify-center mb-4">
                <svg
                  class="w-5 h-5 text-[#ff6b6b]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>

              <h3 className="text-[28px] font-extrabold tracking-[-0.04em] leading-[1.15] mb-[14px]">
                Privacy First
              </h3>

              <p class="text-sm text-gray-400 leading-relaxed mb-6">
                GDPR and CCPA compliant out of the box. Cookieless tracking,
                automatic PII masking, and EU hosting available.
              </p>

              <ul class="space-y-3 text-sm text-[#8a8b9e] mb-7">
                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-[#ff6b6b]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  No cookie banners needed
                </li>

                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-[#ff6b6b]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  EU data residency
                </li>

                <li class="flex items-center gap-2">
                  <svg
                    class="w-4 h-4 text-[#ff6b6b]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  SOC 2 Type II certified
                </li>
              </ul>
            </div>

            <div class="w-[420px] rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-md">
              <div class="flex gap-2 mb-4">
                <span className="w-[8px] h-[8px] rounded-full bg-[#f43f5e] opacity-60"></span>
                <span className="w-[8px] h-[8px] rounded-full bg-[#f59e0b] opacity-60"></span>
                <span className="w-[8px] h-[8px] rounded-full bg-[#22c55e] opacity-60"></span>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
                    <svg
                      class="w-4 h-4 text-green-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-white">GDPR Compliant</h4>
                  <p class="text-xs text-gray-400">
                    Full compliance with European data regulations
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
                    <svg
                      class="w-4 h-4 text-green-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-white">No Cookies</h4>
                  <p class="text-xs text-gray-400">
                    Cookieless tracking — no annoying banners
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
                    <svg
                      class="w-4 h-4 text-green-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <rect x="3" y="11" width="18" height="11"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-white">SOC 2 Type II</h4>
                  <p class="text-xs text-gray-400">
                    Enterprise-grade security certification
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
                    <svg
                      class="w-4 h-4 text-green-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-white">EU Hosting</h4>
                  <p class="text-xs text-gray-400">
                    Data residency in Frankfurt, Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
