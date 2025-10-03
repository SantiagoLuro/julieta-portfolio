import React from 'react';
import { motion } from 'framer-motion';

const EventDetails = () => {
  const details = [
    {
      icon: "📅",
      title: "Fecha",
      description: "Sábado 15 de Marzo de 2025"
    },
    {
      icon: "🕕",
      title: "Horario",
      description: "20:00 horas"
    },
    {
      icon: "📍",
      title: "Lugar",
      description: "Salón Eventos Elegance"
    },
    {
      icon: "👗",
      title: "Dress Code",
      description: "Elegante / Formal"
    }
  ];

  return (
    <section id="details" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Detalles del Evento
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            Toda la información que necesitas saber para celebrar con nosotros
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">
                {detail.title}
              </h3>
              <p className="text-gray-600 font-poppins">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">
              Información adicional
            </h3>
            <p className="text-gray-700 mb-4 font-poppins">
              La celebración incluirá cena, música en vivo y una noche inolvidable llena de sorpresas.
              ¡Esperamos verte allí para compartir este momento especial!
            </p>
            <div className="text-sm text-gray-600 font-poppins">
              <p>📱 Confirmar asistencia: <strong>+54 11 1234-5678</strong></p>
              <p>📧 Email: <strong>xvvalentina25@gmail.com</strong></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;