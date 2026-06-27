import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const CountUpComponent = CountUp?.default ?? CountUp;

export const StaticSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="py-20 border-t border-b border-[#ffffff0f]">
      <div data-aos="fade-up" className="w-full max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between">
          <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out text-left flex-1">
            <div className="text-[48px] font-extrabold tracking-[-0.04em] leading-none mb-[6px]">
              <CountUpComponent start={0} end={50} duration={4} suffix="M+" />
            </div>
            <div className="text-[13px] text-[#55566a] font-medium">
              Events tracked daily
            </div>
          </div>
          <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out text-left flex-1">
            <div className="text-[48px] font-extrabold tracking-[-0.04em] leading-none mb-[6px]">
              <CountUpComponent start={0} end={99.9} duration={4} suffix="%" />
            </div>
            <div className="text-[13px] text-[#55566a] font-medium">
              Uptime SLA
            </div>
          </div>
          <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out text-left flex-1">
            <div className="text-[48px] font-extrabold tracking-[-0.04em] leading-none mb-[6px]">
              <CountUpComponent
                start={2400}
                end={2400}
                duration={4}
                suffix="+"
              />
            </div>
            <div className="text-[13px] text-[#55566a] font-medium">
              Teams worldwide
            </div>
          </div>
          <div className="opacity-100 translate-y-0 transition-all duration-700 ease-in-out text-left flex-1">
            <div className="text-[48px] font-extrabold tracking-[-0.04em] leading-none mb-[6px]">
              <CountUpComponent start={0} end={50} duration={4} suffix="ms" />
            </div>
            <div className="text-[13px] text-[#55566a] font-medium">
              Query response time
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
