const CallToAction = () => {
  return (
    <section className="relative bg-[#F5EBDD] py-10 rounded-3xl mx-4 sm:mx-6 md:mx-10 overflow-hidden shadow-md">
      
      {/* LEFT IMAGE */}
      <div className="hidden sm:block absolute left-0 bottom-0">
        <img
          src="/Sea_Cucumber_3.png"
          alt="Sea cucumber product"
          className="w-28 sm:w-32 md:w-40 object-cover"
        />
      </div>

      {/* RIGHT IMAGE */}
      <div className="hidden sm:block absolute right-0 bottom-0">
        <img
          src="/Sea_Cucumber_2.png"
          alt="Dried sea cucumber"
          className="w-28 sm:w-32 md:w-40 object-cover"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#7A4A1D] mb-2">
          Explore Our Collection
        </p>

        <h2 className="text-[#2A1609] font-bold text-xl sm:text-2xl md:text-3xl mb-2">
          View Our Sea Cucumber Gallery
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-[#5C4330] max-w-xl mx-auto">
          Browse our gallery to discover different varieties, processing stages,
          and premium sea cucumber products showcased with quality and care.
        </p>

        <div className="mt-5">
          <a
            href="/gallery"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#2A1609] text-white text-xs sm:text-sm font-medium shadow hover:bg-[#3C2413] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A1609]"
          >
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;