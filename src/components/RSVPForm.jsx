import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, CheckCircle, XCircle, Users, Utensils, Send } from 'lucide-react';
import { EVENT_CONFIG } from '@/config/eventConfig';

const RSVPForm = ({ onSubmit, loading = false }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    asistencia: '',
    familiares: '',
    restricciones: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.asistencia || !formData.nombre.trim()) return;
    
    const payload = {
      nombre: formData.nombre.trim(),
      asistencia: formData.asistencia === 'si' ? 'Sí' : 'No',
      familiares: formData.asistencia === 'si' ? (formData.familiares || '') : '',
      restricciones: formData.asistencia === 'si' ? (formData.restricciones || '') : ''
    };

    onSubmit(payload);
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      asistencia: '',
      familiares: '',
      restricciones: ''
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
          <User size={18} className="text-pink-500" />
          Nombre y Apellido *
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="off"
          required
          value={formData.nombre}
          onChange={(e) => handleInputChange('nombre', e.target.value)}
          placeholder="Ej: Juan Pérez"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 transition text-gray-900 placeholder:text-gray-400 caret-pink-500 bg-white"
        />
      </div>

      {/* Asistencia */}
      <div>
        <span className="font-semibold text-gray-700 mb-3 block">Asistencia *</span>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.label
            htmlFor="asiste-si"
            whileTap={{ scale: 0.95 }}
            className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-3 ${
              formData.asistencia === 'si' 
                ? 'bg-green-100 border-green-400 ring-2 ring-green-300' 
                : 'border-gray-300 hover:border-green-300'
            }`}
          >
            <input
              id="asiste-si"
              type="radio"
              name="asistencia"
              value="si"
              required
              checked={formData.asistencia === 'si'}
              onChange={(e) => handleInputChange('asistencia', e.target.value)}
              className="hidden"
            />
            <CheckCircle 
              size={20} 
              className={formData.asistencia === 'si' ? 'text-green-600' : 'text-gray-400'} 
            />
            <span className={formData.asistencia === 'si' ? 'text-green-800 font-semibold' : 'text-gray-700'}>
              Sí, confirmo mi asistencia
            </span>
          </motion.label>

          <motion.label
            htmlFor="asiste-no"
            whileTap={{ scale: 0.95 }}
            className={`flex-1 p-4 border rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-3 ${
              formData.asistencia === 'no' 
                ? 'bg-red-100 border-red-400 ring-2 ring-red-300' 
                : 'border-gray-300 hover:border-red-300'
            }`}
          >
            <input
              id="asiste-no"
              type="radio"
              name="asistencia"
              value="no"
              required
              checked={formData.asistencia === 'no'}
              onChange={(e) => handleInputChange('asistencia', e.target.value)}
              className="hidden"
            />
            <XCircle 
              size={20} 
              className={formData.asistencia === 'no' ? 'text-red-600' : 'text-gray-400'} 
            />
            <span className={formData.asistencia === 'no' ? 'text-red-800 font-semibold' : 'text-gray-700'}>
              No podré asistir
            </span>
          </motion.label>
        </div>
      </div>

      {/* Campos condicionales para quienes asisten */}
      {formData.asistencia === 'si' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="familiares" className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <Users size={18} className="text-purple-500" />
              ¿Asistís con tu grupo familiar?
            </label>
            <textarea
              id="familiares"
              name="familiares"
              rows="2"
              value={formData.familiares}
              onChange={(e) => handleInputChange('familiares', e.target.value)}
              placeholder="Indicar cantidad y nombres (si corresponde)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 transition text-gray-900 placeholder:text-gray-400 caret-pink-500 bg-white"
            />
          </div>
          
          <div>
            <label htmlFor="restricciones" className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <Utensils size={18} className="text-yellow-500" />
              ¿Tenés alguna restricción alimenticia?
            </label>
            <textarea
              id="restricciones"
              name="restricciones"
              rows="2"
              value={formData.restricciones}
              onChange={(e) => handleInputChange('restricciones', e.target.value)}
              placeholder="Vegano/a, celíaco/a, alergias, otra..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-300 transition text-gray-900 placeholder:text-gray-400 caret-pink-500 bg-white"
            />
          </div>
        </motion.div>
      )}

      {/* Botón de envío */}
      <motion.button
        type="submit"
        disabled={loading || !formData.asistencia || !formData.nombre.trim()}
        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
      >
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Enviando...</span>
          </>
        ) : (
          <>
            <Send size={20} />
            <span>Enviar Confirmación</span>
          </>
        )}
      </motion.button>

      {/* Información adicional */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Por favor confirma antes del {EVENT_CONFIG.rsvpDeadline}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Tus datos serán utilizados únicamente para la organización del evento
        </p>
      </div>
    </motion.form>
  );
};

export default RSVPForm;