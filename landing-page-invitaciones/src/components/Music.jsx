import React from 'react';
import { motion } from 'framer-motion';

const Music = () => {
  const playlist = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      mood: "Romántica"
    },
    {
      title: "All of Me",
      artist: "John Legend",
      mood: "Emocional"
    },
    {
      title: "Thinking Out Loud",
      artist: "Ed Sheeran",
      mood: "Romántica"
    },
    {
      title: "A Thousand Years",
      artist: "Christina Perri",
      mood: "Emocional"
    },
    {
      title: "Can't Help Falling in Love",
      artist: "Elvis Presley",
      mood: "Clásica"
    },
    {
      title: "At Last",
      artist: "Etta James",
      mood: "Clásica"
    }
  ];

  const djs = [
    {
      name: "DJ Alex",
      specialty: "Música electrónica y pop",
      experience: "5 años de experiencia"
    },
    {
      name: "DJ Maria",
      specialty: "Música latina y reggaeton",
      experience: "7 años de experiencia"
    }
  ];

  return (
    <section id="music" className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 text-white relative">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Música del Evento
          </h2>
          <p className="text-xl text-white/90 font-poppins">
            Una selección musical especialmente curada para esta ocasión especial
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Playlist */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center font-playfair">
              🎵 Playlist Destacada
            </h3>

            <div className="space-y-4">
              {playlist.map((song, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-between bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <h4 className="font-semibold font-poppins">{song.title}</h4>
                    <p className="text-white/70 text-sm font-poppins">{song.artist}</p>
                  </div>
                  <span className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full text-sm font-poppins">
                    {song.mood}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DJs */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center font-playfair">
              🎧 DJs del Evento
            </h3>

            <div className="space-y-6">
              {djs.map((dj, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (index * 0.2) }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                    🎵
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-poppins">{dj.name}</h4>
                  <p className="text-white/80 mb-1 font-poppins">{dj.specialty}</p>
                  <p className="text-white/60 text-sm font-poppins">{dj.experience}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-playfair">
              Sobre la música del evento
            </h3>
            <p className="text-white/90 mb-6 font-poppins">
              La noche comenzará con música suave y romántica durante la cena,
              para luego pasar a ritmos más movidos que inviten a bailar hasta el amanecer.
              ¡Prepara tus mejores pasos de baile!
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full font-poppins">🎶 Música en vivo</span>
              <span className="bg-white/20 px-4 py-2 rounded-full font-poppins">💃 Pista de baile</span>
              <span className="bg-white/20 px-4 py-2 rounded-full font-poppins">🎤 Canciones especiales</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Music;