import { useState } from "react";
import highlights from "../../constants/FactoryVisitsAndInspections";

const FactoryVisitsAndInspections = () => {
    const filters = ["All", "Audits", "Buyer Visits", "Inspections"];
    const [selectedFilter, setSelectedFilter] = useState("All");
    const selectedHighlights =
        selectedFilter === "All"
            ? highlights
            : highlights.filter((item) => item.tag === selectedFilter);
    const [preview, setPreview] = useState(null);

    return (
        <section className="py-10">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl bg-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
                    {/* Top text */}
                    <div className="text-center mb-6 sm:mb-8">
                        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-slate-400 mb-3">
                            🤝 Factory Visits &amp; Inspections
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
                            Open Doors, Transparent Processes
                        </h2>
                        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
                            We welcome partners, inspectors, and visitors to observe our
                            facilities and processes, ensuring transparency and trust in our
                            operations.
                        </p>
                    </div>

                    {/* Filter pills (static, for style only) */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                        {filters.map((label, index) => (
                            <button
                                key={label}
                                type="button"
                                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm border transition ${selectedFilter === label
                                    ? "bg-slate-900 text-white border-slate-900"
                                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                                    }`}
                                onClick={() => setSelectedFilter(label)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Card carousel */}
                    <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

                        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                            {selectedHighlights.map((item, index) => (
                                <article
                                    key={index}
                                    className={`snap-center flex-shrink-0 bg-white rounded-2xl shadow-md overflow-hidden
  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
  w-[200px] sm:w-[220px]`}
                                >
                                    {/* Image */}
                                    <div className="relative h-32 flex items-center justify-center bg-slate-50">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="max-h-full max-w-full object-contain p-3 cursor-pointer transition-transform duration-500 hover:scale-105"
                                            onClick={() => setPreview(item.image)}
                                        />

                                        <span className="absolute bottom-2 left-2 px-2 py-0.5 text-[10px] rounded-full bg-white/90 text-slate-700">
                                            {item.tag}
                                        </span>
                                    </div>

                                    {/* Text */}
                                    <div className="p-3 text-center">
                                        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1">
                                            {item.title}
                                        </h3>

                                        <p className="text-[11px] text-slate-500 leading-snug">
                                            {item.desc}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {preview && (
                            <div
                                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
                                onClick={() => setPreview(null)}
                            >
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                                    onClick={(e) => e.stopPropagation()}
                                />

                                <button
                                    className="absolute top-6 right-6 text-white text-3xl"
                                    onClick={() => setPreview(null)}
                                >
                                    ✕
                                </button>
                            </div>
                        )}

                        {/* Dots (static, visual only) */}
                        <div className="mt-3 flex justify-center gap-1.5">
                            {[0, 1, 2, 3, 4, 5, 6].map((dot) => (
                                <span
                                    key={dot}
                                    className={`h-1.5 rounded-full transition-all ${dot === 1 ? "w-5 bg-slate-900" : "w-2 bg-slate-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bottom helper text */}
                    <p className="mt-6 text-[11px] sm:text-xs text-slate-400 text-center">
                        Whether for compliance checks, partnership evaluations, or technical
                        assessments, our team is ready to guide you through every step of
                        the visit.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FactoryVisitsAndInspections;