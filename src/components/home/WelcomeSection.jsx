import React from "react";
import StatsRow from "../StatsRow";

const WelcomeSection = () => {
  return (
    <section className="bg-white py-16 sm:py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 items-center">
          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="w-full max-w-md lg:max-w-4xl">
              <img
                src="/FisherMan.png"
                alt="Fisherman holding fresh catch"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="px-5 sm:px-8 lg:px-10 mt-5">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#2774E1] mb-3 text-center md:text-left">
              About Us
            </p>

            <h2 className="text-[#0A2365] font-bold text-2xl sm:text-3xl md:text-4xl leading-snug mb-4 text-center md:text-left">
              Welcome to Aqua Bloom International Pvt Ltd
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0 text-justify">
              Aqua Bloom International Pvt Ltd is a trusted name in the
              processing and export of premium sea cucumber products. With a
              strong commitment to quality, sustainability, and customer
              satisfaction, we proudly serve both local and international
              markets.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify mb-8">
              Our company combines modern processing techniques with strict
              quality control standards to ensure that every product meets
              global export requirements. We strive to build long-term
              partnerships by delivering consistent quality and reliable
              service.
            </p>

            {/* STATS ROW */}
            <StatsRow/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;