import { useState } from "react";

const SeaCucumberProducts = () => {
  const products = [
    {
      src: "/sea-cucumber/Specialty_Sizes.jpeg",
      title: "Specialty Sizes",
      subtitle: "Customized cuts",
    },
    {
      src: "/sea-cucumber/Premium_Dried.jpeg",
      title: "Premium Dried",
      subtitle: "Carefully processed",
    },
    {
      src: "/Sea_Cucumber_4.jpeg",
      title: "Export Grade",
      subtitle: "For global buyers",
    },
    {
      src: "/sea-cucumber/Global_Market.jpeg",
      title: "Global Market",
      subtitle: "Ready to ship",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-amber-500 mb-3">
            Sea Cucumber
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            Product Categories
          </h2>
        </div>

        {/* Cards */}
        <div className="relative">

          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex justify-start md:justify-center gap-3 sm:gap-5 overflow-x-auto md:overflow-visible pb-4 snap-x snap-mandatory">

            {products.map((item, index) => {
              const isCenter = index === activeIndex;
              const isNear = Math.abs(index - activeIndex) === 1;

              return (
                <article
                  key={item.src}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer group flex-shrink-0 snap-center text-center rounded-3xl overflow-hidden bg-white shadow-md transition-all duration-300
                  
                  ${isCenter ? "md:scale-110" : isNear ? "md:scale-100" : "md:scale-95"}

                  w-36 sm:w-40 md:w-44 lg:w-48`}
                >
                  <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="py-3 sm:py-4 px-2">
                    <p className="text-sm sm:text-base font-semibold text-slate-800">
                      {item.title}
                    </p>

                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </article>
              );
            })}

          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-1.5">
            {products.map((_, dot) => (
              <span
                key={dot}
                className={`h-1.5 rounded-full transition-all ${
                  dot === activeIndex
                    ? "w-5 bg-slate-900"
                    : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeaCucumberProducts;