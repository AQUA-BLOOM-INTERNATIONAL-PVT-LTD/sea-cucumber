import React from "react";

const services = [
  {
    title: "Sea Cucumber Processing",
    description:
      "Advanced processing methods to maintain freshness, quality, and nutritional value.",
    image: "/SeaCucumber_Processing.jpeg",
  },
  {
    title: "Local Market Supply",
    description:
      "Premium products supplied to trusted local buyers, retailers, and partners.",
    image: "/LocalMarketSupply.jpeg",
  },
  {
    title: "Quality Assurance",
    description:
      "Strict quality checks at every stage from sourcing to packaging.",
    image: "/QualityAssurance.jpeg",
  },
  {
    title: "Export Services",
    description:
      "High-grade sea cucumber products exported to international markets with full compliance.",
    image: "/Export Services.jpeg",
  }
];

const ServicesSection = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#2774E1] mb-2">
            Our Services
          </p>
          <h2 className="text-[#0A2365] font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
            What We Do
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col h-full">

              {/* Image */}
              <div className="relative h-44 rounded-xl overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card */}
              <div className="relative text-center -mt-10 mx-3 bg-white/95 backdrop-blur rounded-xl shadow-lg p-4 flex flex-col flex-grow min-h-[140px]">

                <h3 className="text-sm font-semibold text-[#0A2365] mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;