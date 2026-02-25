import { useEffect, useRef } from "react";

const CalltoAction = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section className="pb-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[32px] md:rounded-[44px] shadow-xl">

          {/* Background video */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover scale-105"
            src="/video_1.mp4"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Soft dark overlay */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center text-center min-h-[260px] md:min-h-[300px] lg:min-h-[340px] px-8">

            <div className="max-w-2xl text-white">

              <h2 className="font-bold text-lg md:text-2xl lg:text-3xl leading-tight mb-3">
                Partner With Aqua Bloom International Pvt Ltd
              </h2>

              <p className="text-sm md:text-base text-white/90 mb-6">
                Looking for a reliable seafood processing and export partner?
                Our team is ready to support your business needs.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-2 md:px-6 py-2.5 rounded-lg bg-white text-[#0A2365] text-sm font-semibold shadow hover:bg-slate-100 transition"
              >
                Contact Us
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CalltoAction;