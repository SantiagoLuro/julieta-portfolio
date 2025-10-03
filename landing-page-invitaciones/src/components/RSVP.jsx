import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RSVP = () => {
  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Confirmación de Asistencia
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            Confírmanos tu presencia para esta noche especial
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">
                ¡Te esperamos!
              </h3>
              <p className="text-gray-600 font-poppins">
                Para confirmar tu asistencia, por favor completa el formulario haciendo clic en el botón a continuación.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3 font-poppins">
                  ¿Qué incluye la confirmación?
                </h4>
                <ul className="text-gray-600 space-y-2 font-poppins text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Confirmación de asistencia (Sí/No)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Número de acompañantes
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Restricciones alimenticias
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Email automático de confirmación
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-3 font-poppins">
                  Información de contacto
                </h4>
                <div className="text-gray-600 space-y-2 font-poppins text-sm">
                  <p>📱 Teléfono: +54 11 1234-5678</p>
                  <p>📧 Email: xvvalentina25@gmail.com</p>
                  <p>⏰ Confirmar antes del: 1 de Marzo de 2025</p>
                </div>
              </div>

              <motion.div
                className="text-center pt-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/confirmar"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
                >
                  Confirmar Asistencia
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;