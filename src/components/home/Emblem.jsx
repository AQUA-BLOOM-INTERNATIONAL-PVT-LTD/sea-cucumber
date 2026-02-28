import React from 'react'
import { motion } from 'framer-motion'

const emblems = [
  { src: '/GMP.jpeg', alt: 'Good Manufacturing Practice Certified' },
  { src: '/HACCP.jpeg', alt: 'Certified HACCP' },
  { src: '/ISO%2022000.jpeg', alt: 'Certified ISO 22000 : 2018 Company' },
]

const Emblem = () => {
  return (
    <section className="relative py-10 overflow-hidden ">
      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8">
        <header className="text-center mb-6">
          <h2 className="text-[#0A2365] font-bold text-3xl">
            Quality Assured
          </h2>
        </header>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {emblems.map((emblem, index) => (
            <motion.div
              key={emblem.alt}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.img
                src={emblem.src}
                alt={emblem.alt}
                className="w-32 h-32 rounded-full object-cover shadow-xl bg-white p-3"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-slate-700 max-w-2xl mx-auto">
          We operate under globally recognized food safety and
          quality management standards to ensure consistent excellence.
        </p>
      </div>
    </section>
  )
}

export default Emblem