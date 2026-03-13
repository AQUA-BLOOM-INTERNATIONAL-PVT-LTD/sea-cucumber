import FactoryAndFacility from "../components/gallery/FactoryAndFacility";
import FactoryVisitsAndInspections from "../components/gallery/FactoryVisitsAndInspections";
import ProcessingActivities from "../components/gallery/ProcessingActivities";
import SeaCucumberProducts from "../components/gallery/SeaCucumberProducts";

const Gallery = () => {
  return (
    <main className="flex flex-col bg-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 pt-24 sm:pt-28 pb-16 sm:pb-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/ocean_wave.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-sky-300 mb-4">
            📷 Gallery
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Inside Aqua Bloom International Pvt Ltd
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-sky-100 max-w-2xl leading-relaxed">
            Explore our operations, facilities, and products through our gallery.
            These images highlight our sea cucumber processing activities,
            factory environment, and our commitment to quality and
            professionalism.
          </p>
        </div>
      </section>

      <FactoryAndFacility />
      <SeaCucumberProducts />
      <ProcessingActivities />
      <FactoryVisitsAndInspections />
    </main>
  );
};

export default Gallery;
