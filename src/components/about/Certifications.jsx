import React from "react";

const certifications = [
  {
    id: "fsms",
    label: "ISO 22000:2018 — Food Safety Management System",
    code: "CC-FS-139-FSMS",
    description:
      "Certified for processing sea cucumber into dried sea cucumber, including packing, labelling, and dispatch, ensuring strict food safety management across all operations.",
    pdf: "/CC-FS-139-FSMS%20Certificate.pdf",
    image: "/CC-FS-139-FSMS%20Certificate.png",
  },
  {
    id: "haccp",
    label: "HACCP — SLS 1266:2023",
    code: "CC-FS-139-HACCP",
    description:
      "Recognized for implementing Hazard Analysis and Critical Control Point systems to identify and control food safety risks throughout our production process.",
    pdf: "/CC-FS-139-HACCP%20Certificate.pdf",
    image: "/CC-FS-139-HACCP%20Certificate.png",
  },
  {
    id: "gmp",
    label: "GMP — Good Manufacturing Practices",
    code: "CC-FS-139-GMP",
    description:
      "Certified for maintaining high standards in manufacturing processes, hygiene, and quality control to ensure consistent product excellence.",
    pdf: "/CC-FS-139-GMP%20Certificate.pdf",
    image: "/CC-FS-139-GMP%20Certificate.png",
  },
];

const Certifications = () => {
  return (
    <section className="bg-[#F5F7FB] py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <header className="text-center mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#2774E1] mb-2">
            Certifications &amp; Compliance
          </p>
          <h2 className="text-[#0A2365] font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
            Demonstrating Trusted Quality Standards
          </h2>
          <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Aqua Bloom International Pvt Ltd is committed to maintaining the
            highest standards of food safety, quality, and operational
            excellence. Our certifications reflect our dedication to producing
            safe, high-quality sea cucumber products that meet international
            requirements.
          </p>
        </header>

        {/* Certification cards */}
        <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden"
            >
              {/* Image / icon */}
              <div className="w-full h-40 border-b border-slate-100 bg-slate-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.image}
                    alt={`${cert.label} certificate`}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col px-5 sm:px-6 py-5">
                <h3 className="text-[#0A2365] font-semibold text-sm sm:text-base mb-2">
                  {cert.label}
                </h3>
                <p className="text-[11px] sm:text-xs font-medium tracking-[0.18em] uppercase text-slate-500 mb-3">
                  Certificate No: {cert.code}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 flex-1">
                  {cert.description}
                </p>

                {/* Download actions */}
                <div className="mt-auto pb-3 border-t border-slate-100 flex flex-wrap gap-3">
                  <a
                    href={cert.pdf}
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-[#0A2365] text-white text-xs sm:text-sm px-3 py-1.5 shadow-sm hover:bg-[#12358A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2365]"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold">
                      PDF
                    </span>
                    <span>Download certificate</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;