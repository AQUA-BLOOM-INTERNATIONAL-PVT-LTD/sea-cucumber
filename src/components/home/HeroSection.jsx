import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-100 pt-16 sm:pt-20 overflow-hidden pb-24 sm:pb-40 lg:pb-48">

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <span className="bubble bubble1"></span>
        <span className="bubble bubble2"></span>
        <span className="bubble bubble3"></span>
        <span className="bubble bubble4"></span>
        <span className="bubble bubble5"></span>
      </div>

      {/* Swimming fish */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <img src="/fish_1.png" className="fish fishA" alt="" />
        <img src="/fish_2.png" className="fish fishC" alt="" />
        <img src="/crab.png" className="fish fishB" alt="" />
        <img src="/shrimp.png" className="fish fishD" alt="" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto pl-5 sm:pl-8 lg:pl-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div className="text-center lg:text-left">

            <h1 className="text-[#0A2365] font-bold 
              text-xl sm:text-2xl md:text-4xl lg:text-5xl
              leading-tight mb-4 sm:mb-6">
              Premium Sea Cucumbers From Ocean to Global Markets
            </h1>

            <p className="text-[#2774E1] 
              text-sm sm:text-base md:text-lg
              mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              Sustainably harvested, carefully processed, and delivered worldwide with uncompromising quality standards.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-[#0A2365] text-white font-semibold 
                px-5 py-2.5 sm:px-8 sm:py-3 rounded-lg
                hover:bg-[#0A2365]/90 transition shadow-md"
            >
              Join with Us
            </Link>

          </div>

          {/* IMAGE — HIDDEN ON MOBILE */}
          <div className="hidden lg:flex justify-end">
            <div className="w-full max-w-xl">
              <img
                src="/home_image_1.png"
                alt="Premium sea cucumbers"
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-32 sm:h-40 md:h-48 lg:h-56" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGrad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#81BFEE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#056CB5" />
            </linearGradient>
            <linearGradient id="waveGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#056CB5" />
              <stop offset="100%" stopColor="#043488" />
            </linearGradient>
          </defs>

          <path fill="url(#waveGrad1)">
            <animate attributeName="d" dur="12s" repeatCount="indefinite"
              values="M0,160 C240,140 480,200 720,170 C960,140 1200,190 1440,160 L1440,320 L0,320 Z;
                      M0,170 C240,160 480,180 720,150 C960,120 1200,180 1440,170 L1440,320 L0,320 Z;
                      M0,160 C240,140 480,200 720,170 C960,140 1200,190 1440,160 L1440,320 L0,320 Z"/>
          </path>

          <path fill="url(#waveGrad2)">
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,200 C200,170 400,210 600,190 C800,170 1000,210 1200,190 C1320,180 1400,195 1440,190 L1440,320 L0,320 Z;
                      M0,190 C200,180 400,200 600,180 C800,160 1000,200 1200,180 C1320,170 1400,185 1440,180 L1440,320 L0,320 Z;
                      M0,200 C200,170 400,210 600,190 C800,170 1000,210 1200,190 C1320,180 1400,195 1440,190 L1440,320 L0,320 Z"/>
          </path>
        </svg>
      </div>

    </section>
  );
};

export default HeroSection;