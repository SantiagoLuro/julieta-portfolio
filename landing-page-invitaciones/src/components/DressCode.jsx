import React from 'react';
import { motion } from 'framer-motion';

const DressCode = () => {
  const dressCodes = [
    {
      gender: "Ellas",
      items: [
        "Vestido elegante",
        "Tacones o zapatos formales",
        "Maquillaje y peinado arreglado",
        "Accesorios delicados"
      ],
      color: "from-pink-100 to-rose-100"
    },
    {
      gender: "Ellos",
      items: [
        "Traje oscuro o sport elegante",
        "Camisa de vestir",
        "Corbata o moño",
        "Zapatos formales"
      ],
      color: "from-blue-100 to-indigo-100"
    }
  ];

  return (
    <section id="dresscode" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
            Dress Code
          </h2>
          <p className="text-xl text-gray-600 font-poppins">
            Viste para impresionar en esta noche especial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {dressCodes.map((dressCode, index) => (
            <motion.div
              key={dressCode.gender}
              className={`bg-gradient-to-br ${dressCode.color} p-8 rounded-2xl shadow-lg`}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center font-playfair">
                {dressCode.gender}
              </h3>

              <ul className="space-y-3">
                {dressCode.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-center text-gray-700 font-poppins"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (itemIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </motion.li>
                ))}
              </ul>
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
          <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-playfair">
              Sugerencias adicionales
            </h3>
            <p className="text-gray-700 mb-4 font-poppins">
              Para esta ocasión especial, recomendamos colores sobrios y elegantes.
              El tono del evento es formal pero alegre, ¡así que elige algo que te haga sentir especial!
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-600 font-poppins">
              <span className="bg-white/30 px-3 py-1 rounded-full">🎨 Colores neutros</span>
              <span className="bg-white/30 px-3 py-1 rounded-full">✨ Toque de brillo</span>
              <span className="bg-white/30 px-3 py-1 rounded-full">👠 Comodidad elegante</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DressCode;