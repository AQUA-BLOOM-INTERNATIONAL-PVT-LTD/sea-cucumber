import React from "react";

const AboutUs = () => {
  return (
    <main className="bg-[#F5F7FB] py-10">
      <div className="max-w-8xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[2fr,1fr] gap-10 lg:gap-12">
          {/* MAIN CONTENT */}
          <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Header image */}
            <div className="w-full h-56 sm:h-72 md:h-80 overflow-hidden">
              <img
                src="/office/Office_1.JPG"
                alt="Sea cucumber processing at Aqua Bloom"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-6 sm:px-8 lg:px-10 py-8 sm:py-9">
              {/* Title */}
              <header className="mb-6 sm:mb-7">
                <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#2774E1] mb-2">
                  About Aqua Bloom International Pvt Ltd
                </p>
                <h1 className="text-[#0A2365] font-bold text-2xl sm:text-3xl md:text-4xl leading-snug mb-3">
                  Building Excellence in Sea Cucumber Processing &amp; Global
                  Export
                </h1>
                <p className="text-xs sm:text-sm text-slate-500">
                  Established with a vision for quality • Trusted by global
                  partners • Committed to sustainability
                </p>
              </header>

              {/* Body paragraphs */}
              <section className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Aqua Bloom International Pvt Ltd is a dedicated seafood
                  processing and export company specializing in premium sea
                  cucumber products. With a strong foundation built on quality,
                  integrity, and industry expertise, we proudly serve both local
                  and international markets. Our company focuses on delivering
                  products that meet global standards while supporting
                  sustainable marine practices and responsible sourcing.
                </p>

                <p>
                  Through advanced processing techniques, strict quality
                  control, and efficient logistics, we ensure every shipment
                  maintains the highest level of freshness and safety. Our
                  experienced team works closely with suppliers and partners to
                  build reliable supply chains and long-term business
                  relationships. At Aqua Bloom International Pvt Ltd, we believe
                  that consistent quality and professional service are the keys
                  to earning trust in global markets.
                </p>
              </section>

              {/* Highlight quote */}
              <section className="mb-8">
                <div className="border-l-4 border-[#F97316] bg-[#FFF7ED] rounded-xl px-6 sm:px-7 py-5 sm:py-6 text-sm sm:text-base text-slate-800 relative">
                  <div className="absolute -top-4 left-4 text-4xl text-[#F97316]/40 select-none">
                    ❝
                  </div>
                  <p className="mt-2">
                    Our commitment is to deliver premium sea cucumber products
                    while maintaining sustainability, quality excellence, and
                    strong partnerships across global markets.
                  </p>
                  <div className="mt-3 text-xs sm:text-sm font-semibold text-slate-600">
                    — Aqua Bloom International Pvt Ltd
                  </div>
                </div>
              </section>

              {/* Closing paragraph */}
              <section className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  We continuously strive to improve our processes, adopt modern
                  technologies, and follow international compliance standards to
                  ensure our customers receive only the best products. Our goal
                  is to contribute to the seafood industry with responsibility,
                  innovation, and reliability.
                </p>
              </section>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:space-y-7">
            {/* Company profile card */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-7">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0A2365]/10 mb-3">
                  <img
                    src="/Sea_Cucumber_1.jpeg"
                    alt="Aqua Bloom team member"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-[#0A2365] font-semibold text-lg">
                  Aqua Bloom International Pvt Ltd
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Premium sea cucumber processing and export company committed
                  to quality, sustainability, and global standards.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-2 space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <span className="mt-[2px] text-[#0A2365]">📍</span>
                  <p>
                    <span className="font-semibold">Industry:</span> Seafood
                    Processing &amp; Export
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-[2px] text-[#0A2365]">🌍</span>
                  <p>
                    <span className="font-semibold">Markets:</span> Local &amp;
                    International
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-[2px] text-[#0A2365]">⭐</span>
                  <p>
                    <span className="font-semibold">Specialty:</span> Sea
                    Cucumber Products
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-[2px] text-[#0A2365]">🤝</span>
                  <p>
                    <span className="font-semibold">Focus:</span> Quality &amp;
                    Long-Term Partnerships
                  </p>
                </div>
              </div>
            </section>

            {/* Mission, Vision & Values card */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-7 space-y-5">
              <div>
                <h3 className="text-[#0A2365] font-semibold text-base mb-1 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0A2365] text-white text-xs">
                    🎯
                  </span>
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To provide premium quality sea cucumber products through
                  sustainable sourcing, advanced processing methods, and
                  exceptional customer service while building long-term
                  partnerships with clients worldwide.
                </p>
              </div>

              <div>
                <h3 className="text-[#0A2365] font-semibold text-base mb-1 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0A2365] text-white text-xs">
                    🌊
                  </span>
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To become a leading and trusted exporter of sea cucumber
                  products in the global seafood industry by maintaining
                  excellence, innovation, and environmental responsibility.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h3 className="text-[#0A2365] font-semibold text-base mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#F97316] text-white text-xs">
                    💎
                  </span>
                  Our Values
                </h3>
                <ul className="space-y-5 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="mt-[2px] text-emerald-500">✔</span>
                    <p>
                      <span className="font-semibold">Quality Excellence —</span>{" "}
                      We maintain strict quality standards at every stage of
                      production.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[2px] text-emerald-500">✔</span>
                    <p>
                      <span className="font-semibold">Sustainability —</span> We
                      support responsible sourcing and marine conservation
                      practices.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[2px] text-emerald-500">✔</span>
                    <p>
                      <span className="font-semibold">Integrity —</span> We
                      conduct business with transparency and honesty.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[2px] text-emerald-500">✔</span>
                    <p>
                      <span className="font-semibold">
                        Customer Commitment —
                      </span>{" "}
                      We prioritize customer satisfaction and long-term
                      relationships.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-[2px] text-emerald-500">✔</span>
                    <p>
                      <span className="font-semibold">Innovation —</span> We
                      continuously improve our processes and operations.
                    </p>
                  </li>
                </ul>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;