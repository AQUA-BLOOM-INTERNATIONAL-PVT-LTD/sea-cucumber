const ProcessingActivities = () => {
  const stages = [
    {
      title: "Receiving & Initial Grading",
      desc: "Fresh sea cucumbers arrive from trusted fishermen and are graded based on size, variety, and quality.",
      icon: "⚓",
      image: "/processing/Receiving_SeaCucumber.jpeg",
    },
    {
      title: "Cleaning & Preparation",
      desc: "Careful cleaning, gutting, and preparation ensure that only the best raw material enters the drying process.",
      icon: "🧼",
      image: "/SeaCucumber_Processing.jpeg",
    },
    {
      title: "Drying & Curing",
      desc: "Controlled drying methods help maintain structure, texture, and food safety while achieving ideal moisture levels.",
      icon: "☀️",
      image: "/sea-cucumber/Premium_Dried.jpeg",
    },
    {
      title: "Final Inspection & Packing",
      desc: "Each batch undergoes visual inspection, documentation, and careful packing for export-ready dispatch.",
      icon: "✅",
      image: "/Export Services.jpeg",
    },
  ];

  return (
    <section className="bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-emerald-500 mb-3">
            ⚙ Processing Activities
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2365] mb-4">
            From Ocean Harvest to Finished Product
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            This section showcases various stages of sea cucumber processing,
            from preparation and cleaning to drying, packaging, and final
            quality checks.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row"
            >
              <div className="sm:w-5/12 relative">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover max-h-64 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm font-semibold">
                  <span className="text-lg">{stage.icon}</span>
                  <span>Processing Stage</span>
                </div>
              </div>

              <div className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-semibold text-[#0A2365] mb-2">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessingActivities;