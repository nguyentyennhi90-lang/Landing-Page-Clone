import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const PriceSection = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const onToggleClick = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <section // className="relative py-[120px] bg-[linear-gradient(180deg,_#1e1e24_0%,_#ff6b6b05_50%,_#1e1e24_100%)]"
    >
      <div data-aos="fade-up" className="w-full max-w-[1200px] mx-auto px-6">
        <div className="opacity-100 translate-y-0 text-center mb-16">
          <p className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#ff6b6b] uppercase tracking-[0.1em] mb-[14px] font-mono">
            Pricing
          </p>
          <h2 className="text-[clamp(46px)] font-extrabold tracking-[-0.04em] leading-[1.1] mb-[14px]">
            Start free. Scale as you grow.
          </h2>
          <p className="text-[16px] text-[#8a8b9e] max-w-[480px] leading-[1.7] mx-auto">
            No credit card required. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>

        <div className="opacity-100 translate-y-0 flex items-center justify-center gap-[14px] mb-[56px]">
          <span className="text-[#eeeef0] text-[14px] font-medium transition-colors duration-300">
            Monthly
          </span>
          <button onClick={onToggleClick}
            className="relative w-[48px] h-[26px] rounded-full
         after:content-[''] after:absolute
         after:top-[3px] after:left-[3px]
         after:w-[18px] after:h-[18px]
         after:bg-[#ff6b6b]
         after:rounded-full
         after:shadow-[0_0_12px_#ff6b6b59]
         after:transition-transform
         after:duration-300
         after:ease-[cubic-bezier(0.4,0,0.2,1)]"
            id="pricingToggle"
            aria-label="Toggle pricing period" 
          ></button>
          <span className="text-[14px] font-medium text-[#55566a] transition-colors duration-300">
            Annually
          </span>
          <span className="text-[11px] font-bold text-[#22c55e] bg-[#22c55e1a] px-[10px] py-[3px] rounded-full border border-[#22c55e33]">
            Save 30%
          </span>
        </div>

        <div className="grid grid-cols-3 gap-[20px] items-center">
          <div className="opacity-100 translate-y-0 transition-[opacity,transform] duration-[700ms] ease-in bg-[#26262d] border border-[#ffffff0f] rounded-[20px] p-[40px_32px] relative">
            <div className="text-[15px] font-semibold text-[#8a8b9e] mb-[20px]">
              Starter
            </div>
            <div className="flex items-start gap-[2px] mb-[4px] min-h-[56px]">
              <span className="text-[44px] tracking-[-0.03em] font-extrabold leading-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
                FREE
              </span>
            </div>
            <div className="text-[13px] text-[#55566a] mb-[28px]">
              Free forever 
            </div>
            <a className="w-full inline-flex items-center justify-center gap-2 px-[22px] py-[10px] rounded-full font-semibold text-[13.5px] cursor-pointer border-none transition-all duration-300 tracking-[-0.01em] bg-[#ffffff0d] text-[#eeeef0] border border-[#ffffff09]">
              Get Started
            </a>
            <div className="h-px bg-[#ffffff0f] my-[24px]"></div>
            <ul className="list-none mb-[32px]">
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Up to 10K events/mo
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                1 project
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Core analytics
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Community support
              </li>
            </ul>
          </div>

          {/* Pro: $25 / $17.50 */}
          <div className="relative block opacity-100 scale-105 z-[2] bg-[#26262d] border border-[#ff6b6b40] rounded-[20px] px-[32px] py-[40px] shadow-[0_0_80px_#ff6b6b0f,0_24px_48px_#00000066] transition-[opacity,transform] duration-[700ms] ease-in">
            <span className="absolute top-[-11px] left-1/2 -translate-x-1/2 bg-[#ff6b6b] text-white text-[11px] font-bold px-[14px] py-[4px] rounded-full uppercase tracking-[0.06em] shadow-[0_0_20px_#ff6b6b59]">
              Most Popular
            </span>
            <div className="text-[15px] font-semibold text-[#8a8b9e] mb-[20px]">
              Pro
            </div>
            <div className="flex items-start gap-[2px] mb-[4px] min-h-[56px]">
              <span className="text-[18px] font-bold text-[#55566a] mt-[8px]">
                $
              </span>
              <span
                className="text-[52px] font-extrabold tracking-[-0.04em] leading-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                data-monthly="25"
                data-annual="17.50"
              >
                {isMonthly ? "25" : "17.50"}
              </span>
            </div>
            <div
              className="text-[13px] text-[#55566a] mb-[28px] flex"
              data-monthly="per month"
              data-annual-total="210"
            >
              per month
              <div className={isMonthly ? "hidden" : "text-[#eeeef0]"}>($210 per year)</div>
            </div>
            <a
              className="w-full bg-[#ff6b6b] text-white shadow-[0_0_24px_#ff6b6b59,inset_0_1px_0_#ffffff1a] inline-flex items-center justify-center gap-2 py-[10px] px-[22px] rounded-full text-[13.5px] font-semibold cursor-pointer border-0 transition-all duration-300 ease-in-out tracking-[-0.01em]"
              onclick="return false;"
            >
              Start Free Trial
            </a>
            <div className="h-px bg-[#ffffff0f] my-[24px]"></div>
            <ul className="list-none mb-[32px]">
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Up to 1M events/mo
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Unlimited projects
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Session replay
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Feature flags & A/B
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Priority support
              </li>
            </ul>
          </div>

          {/* Scale: $120 / $84 */}
          <div className="opacity-100 translate-y-0 transition-[opacity,transform] duration-[700ms] ease-in bg-[#26262d] border border-[#ffffff0f] rounded-[20px] p-[40px_32px] relative">
            <div className="text-[15px] font-semibold text-[#8a8b9e] mb-[20px]">
              Scale
            </div>
            <div className="flex items-start gap-[2px] mb-[4px] min-h-[56px]">
              <span className="text-[18px] font-bold text-[#55566a] mt-[8px]">
                $
              </span>
              <span
                className="text-[52px] font-extrabold tracking-[-0.04em] leading-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                data-monthly="120"
                data-annual="84"
              >
                {isMonthly ? "120" : "84"}
              </span>
            </div>
            <div
              className="text-[13px] text-[#55566a] mb-[28px] flex"
              data-monthly="per month"
              data-annual-total="1,008"
            >
              per month
           <div className={isMonthly ? "hidden" : "text-[#eeeef0]"}>($84 per year)</div>

            </div>
            <a className="w-full inline-flex items-center justify-center gap-2 px-[22px] py-[10px] rounded-full font-semibold text-[13.5px] cursor-pointer border-none transition-all duration-300 tracking-[-0.01em] bg-[#ffffff0d] text-[#eeeef0] border border-[#ffffff09]">
              Contact Sales
            </a>
            <div className="h-px bg-[#ffffff0f] my-[24px]"></div>
            <ul className="list-none mb-[32px]">
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Unlimited events
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                SSO & SAML
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Custom retention
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                Dedicated CSM
              </li>
              <li className="flex items-center gap-[10px] text-[13.5px] text-[#8a8b9e] py-[7px]">
                <svg className="w-[15px] h-[15px] fill-none stroke-current stroke-[2.5] shrink-0 text-[#ff6b6b]">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>{" "}
                SLA guarantee
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
