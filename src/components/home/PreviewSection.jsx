import React from "react";

const PreviewSection = () => {
    return (
        <section className="relative overflow-hidden pb-16">
            {/* Boat image in corner (left) */}
            <div className="hidden md:flex pointer-events-none absolute -bottom-20 lg:-bottom-40 -left-10 sm:-left-16 md:-left-24 lg:-left-32 flip-horizontal">
                <img
                    src="/boat_1.png"
                    alt="Fishing boat"
                    className="w-[240px] sm:w-[320px] md:w-[380px] lg:w-[460px] h-auto"
                />
            </div>

            <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 text-center relative z-10">
                <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#2774E1] mb-3">
                    About Preview Section
                </p>

                <h2 className="text-[#0A2365] font-bold text-2xl sm:text-3xl md:text-4xl leading-snug mb-4">
                    Who We Are
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                    We are a dedicated seafood processing and export company specializing
                    in sea cucumber products. Our experienced team works closely with
                    local suppliers and international partners to maintain ethical
                    sourcing practices while supporting sustainable marine resources.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                    Through innovation and continuous improvement, Aqua Bloom
                    International Pvt Ltd aims to be a leading exporter in the seafood
                    industry.
                </p>

                <button className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[#0A2365] text-white text-sm sm:text-base font-semibold shadow-md hover:bg-[#0A2365]/90 transition">
                    Learn More About Us
                </button>
            </div>

            {/* Boat image in corner (right) */}
            <div className="hidden md:flex pointer-events-none absolute -bottom-20 lg:-bottom-40 -right-10 sm:-right-16 md:-right-24 lg:-right-32">
                <img
                    src="/boat_2.png"
                    alt="Fishing boat"
                    className="w-[240px] sm:w-[320px] md:w-[380px] lg:w-[460px] h-auto"
                />
            </div>
        </section>
    );
};

export default PreviewSection;