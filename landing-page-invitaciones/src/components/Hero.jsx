import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      <div className="absolute inset-0 bg-[url('/assets/bg-bottom.svg')] bg-cover bg-center opacity-20"></div>

      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 font-playfair"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            Valentina
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-white/90 mb-8 font-great-vibes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Te invita a celebrar sus XV años
          </motion.div>

          <motion.div
            className="text-lg md:text-xl text-white/80 mb-12 font-poppins"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <p className="mb-2">📅 Sábado 15 de Marzo de 2025</p>
            <p className="mb-2">🕕 20:00 horas</p>
            <p>📍 Salón Eventos Elegance</p>
          </motion.div>

          <motion.button
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-poppins backdrop-blur-sm border border-white/30 transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
          >
            Ver más detalles
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;