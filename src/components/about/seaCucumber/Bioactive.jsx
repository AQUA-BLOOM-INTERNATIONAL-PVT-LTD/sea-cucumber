import React from "react";

const Bioactive = () => {
  return (
    <main className="bg-[#F5F7FB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <header className="text-center mb-10">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#2774E1] mb-2">
            Bioactive Compounds &amp; Functional Benefits
          </p>
          <h1 className="text-[#0A2365] font-bold text-2xl sm:text-3xl md:text-4xl leading-snug mb-3">
            Naturally Functional Components in Sea Cucumber
          </h1>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
            Sea cucumber contains a variety of naturally occurring bioactive
            compounds that contribute to its nutritional and functional value.
            These components are widely studied for their roles in supporting
            wellness, tissue health, and protective biological activities.
          </p>
        </header>

        {/* Image + simple explanation */}
        <section className="bg-white rounded-3xl shadow-sm border border-slate-100 p-5 sm:p-7 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-52 sm:h-60 md:h-64 rounded-2xl bg-white overflow-hidden border border-slate-100">
                <img
                  src="/Uses.png"
                  alt="Bioactive compounds in sea cucumber"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Simple bullet list */}
            <div className="w-full md:w-1/2">
              <h2 className="text-[#0A2365] font-semibold text-lg sm:text-xl mb-3">
                Key Bioactive Components
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                Researchers have identified several important compounds in sea
                cucumber. Each plays a different role, but together they help
                explain why sea cucumber is used in food, health, and research.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li>
                  <span className="font-semibold text-[#0A2365]">
                    Amino acids &amp; collagen —
                  </span>{" "}
                  support tissue structure, repair, and skin elasticity.
                </li>
                <li>
                  <span className="font-semibold text-[#0A2365]">
                    Chondroitin sulfate &amp; fucoidan —
                  </span>{" "}
                  studied for joint health, protective, and anti-inflammatory
                  properties.
                </li>
                <li>
                  <span className="font-semibold text-[#0A2365]">
                    Phenolic compounds —
                  </span>{" "}
                  associated with antioxidant and antibacterial activity.
                </li>
                <li>
                  <span className="font-semibold text-[#0A2365]">
                    Glycosides &amp; other bioactives —
                  </span>{" "}
                  investigated for potential roles in immune support and
                  cellular protection.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Bioactive;