import { useState } from "react";

const FactoryAndFacility = () => {
  const images = [
    {
      src: "/office/Office_1.JPG",
      alt: "Sea cucumber processing facility exterior",
    },
    {
      src: "/office/Office_2.jpeg",
      alt: "Processing line with workers",
    },
    {
      src: "/office/Office_3.png",
      alt: "Processing line with workers",
    },
    {
      src: "/office/Office_1.JPG",
      alt: "Food safety and quality certifications",
    },
  ];

  const [preview, setPreview] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-14">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-blue-500 mb-3">
              📍 Inside Aqua Bloom International Pvt Ltd
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2365] mb-4">
              Factory & Facilities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Take a look inside our processing facility where quality control,
              hygiene standards, and efficient operations ensure premium sea
              cucumber products for global markets.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From raw material reception to final packaging, every step is
              managed in a controlled, food-safe environment. Our facility is
              equipped with modern infrastructure, dedicated processing zones,
              and certified quality systems that support consistent excellence.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className={`relative overflow-hidden rounded-2xl shadow-md bg-slate-100 aspect-[4/3] group ${index === 1 ? "translate-y-4" : ""
                    } ${index === 2 ? "-translate-y-4" : ""}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    onClick={() => setPreview(image.src)}
                    className="w-full h-full object-cover cursor-zoom-in transition duration-500 group-hover:scale-105 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              ))}
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default FactoryAndFacility;