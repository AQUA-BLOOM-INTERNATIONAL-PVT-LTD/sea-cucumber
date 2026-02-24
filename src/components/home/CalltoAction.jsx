import React from "react";

const CalltoAction = () => {
  return (
    <section className="pb-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Rounded Card */}
        <div className="relative overflow-hidden rounded-[40px] md:rounded-[60px] bg-gradient-to-r from-[#0A2365] to-[#1e3a8a] shadow-3xl">

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row items-center">

            {/* LEFT CONTENT */}
            <div className="w-full md:w-1/2 px-8 py-10 md:px-14 md:py-14 text-white">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-snug mb-4">
                Partner With Aqua Bloom International Pvt Ltd
              </h2>

              <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6">
                Looking for a reliable seafood processing and export partner?
                Our team is ready to support your business needs.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-white text-[#0A2365] text-sm font-semibold shadow hover:bg-slate-100 transition"
              >
                Contact Us
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full md:w-1/2 h-[260px] md:h-[320px] lg:h-[360px] relative">
              <img
                src="/Sea_Cucumber_4.png"
                alt="Sea cucumber"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 " />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CalltoAction;