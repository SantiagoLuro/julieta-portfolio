import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ConfirmPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    asistencia: '',
    cantidadAcompanantes: '',
    nombresAcompanantes: '',
    restriccionesAlimenticias: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Guardar en Google Sheets
      const sheetData = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        telefono: formData.telefono,
        asistencia: formData.asistencia,
        cantidadAcompanantes: formData.cantidadAcompanantes,
        nombresAcompanantes: formData.nombresAcompanantes,
        restriccionesAlimenticias: formData.restriccionesAlimenticias,
        mensaje: formData.mensaje,
        fecha: new Date().toLocaleString('es-AR')
      };

      const scriptUrl = 'https://script.google.com/macros/s/YOUR_GOOGLE_APPS_SCRIPT_ID/exec';

      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData)
      });

      // 2. Enviar email con EmailJS
      const emailParams = {
        to_email: 'xvvalentina25@gmail.com',
        from_name: `${formData.nombre} ${formData.apellido}`,
        from_email: formData.email,
        telefono: formData.telefono,
        asistencia: formData.asistencia,
        cantidad_acompanantes: formData.cantidadAcompanantes,
        nombres_acompanantes: formData.nombresAcompanantes,
        restricciones: formData.restriccionesAlimenticias,
        mensaje: formData.mensaje,
        fecha: new Date().toLocaleString('es-AR')
      };

      await emailjs.send(
        'YOUR_EMAILJS_SERVICE_ID', // Reemplazar con el service ID real
        'YOUR_EMAILJS_TEMPLATE_ID', // Reemplazar con el template ID real
        emailParams,
        'YOUR_EMAILJS_PUBLIC_KEY' // Reemplazar con la public key real
      );

      // Mostrar toast de éxito
      toast.success('¡Confirmación enviada exitosamente! 🎉', {
        duration: 6000,
        style: {
          background: '#1f2937',
          color: '#fff',
          fontSize: '16px',
          padding: '16px',
          borderRadius: '12px',
          border: '2px solid #10b981'
        },
        icon: '🎉'
      });

      // Resetear formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        asistencia: '',
        cantidadAcompanantes: '',
        nombresAcompanantes: '',
        restriccionesAlimenticias: '',
        mensaje: ''
      });

    } catch (error) {
      console.error('Error al enviar confirmación:', error);

      // Mostrar toast de error
      toast.error('Error al enviar confirmación. Por favor intenta nuevamente. ❌', {
        duration: 6000,
        style: {
          background: '#1f2937',
          color: '#fff',
          fontSize: '16px',
          padding: '16px',
          borderRadius: '12px',
          border: '2px solid #ef4444'
        },
        icon: '❌'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <Toaster position="top-center" />

      {/* Header */}
      <motion.header
        className="bg-white/80 backdrop-blur-sm shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              className="text-2xl font-bold text-gray-800 font-playfair"
              whileHover={{ scale: 1.05 }}
            >
              Valentina - Confirmación
            </motion.h1>
            <motion.a
              href="/"
              className="text-purple-600 hover:text-purple-800 font-poppins"
              whileHover={{ scale: 1.05 }}
            >
              ← Volver al inicio
            </motion.a>
          </div>
        </div>
      </motion.header>

      <div className="container mx-auto px-6 py-12">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Información del evento */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">
                🎉 XV Años de Valentina
              </h2>
              <div className="text-gray-600 space-y-1 font-poppins">
                <p>📅 Sábado 15 de Marzo de 2025</p>
                <p>🕕 20:00 horas</p>
                <p>📍 Salón Eventos Elegance</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <motion.form
            className="bg-white rounded-2xl shadow-xl p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center font-playfair">
              Confirma tu asistencia
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Nombre *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-poppins"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Apellido *
                </label>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-poppins"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-poppins"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-poppins"
                  placeholder="+54 11 1234-5678"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3 font-poppins">
                ¿Asistirás al evento? *
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="asistencia"
                    value="Sí"
                    checked={formData.asistencia === 'Sí'}
                    onChange={handleInputChange}
                    required
                    className="mr-2 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="font-poppins">Sí, asistiré</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="asistencia"
                    value="No"
                    checked={formData.asistencia === 'No'}
                    onChange={handleInputChange}
                    required
                    className="mr-2 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="font-poppins">No podré asistir</span>
                </label>
              </div>
            </div>

            {formData.asistencia === 'Sí' && (
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                  ¿Cuántos acompañantes llevarás?
                </label>
                <select
                  name="cantidadAcompanantes"
                  value={formData.cantidadAcompanantes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-poppins"
                >
                  <option value="">Seleccionar cantidad</option>
                  <option value="0">Solo yo</option>
                  <option value="1">1 acompañante</option>
                  <option value="2">2 acompañantes</option>
                  <option value="3">3 acompañantes</option>
                  <option value="4">4 acompañantes</option>
                  <option value="5+">5 o más</option>
                </select>

                {formData.cantidadAcompanantes && formData.cantidadAcompanantes !== '0' && (
                  <motion.div
                    className="mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                      Nombres de los acompañantes
                    </label>
                    <textarea
                      name="nombresAcompanantes"
                      value={formData.nombresAcompanantes}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-poppins"
                      placeholder="Ej: Juan Pérez, María González..."
                    />
                  </motion.div>
                )}
              </motion.div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                Restricciones alimenticias o alergias
              </label>
              <textarea
                name="restriccionesAlimenticias"
                value={formData.restriccionesAlimenticias}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-poppins"
                placeholder="Vegetariano, celíaco, alergia a frutos secos, etc."
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2 font-poppins">
                Mensaje adicional (opcional)
              </label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-poppins"
                placeholder="¿Quieres agregar algún mensaje especial para Valentina?"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-poppins"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando confirmación...
                </span>
              ) : (
                'Enviar Confirmación'
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ConfirmPage;