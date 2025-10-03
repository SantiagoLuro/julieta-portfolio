// ===== CONFIGURACIÓN DEL EVENTO =====
// Cambia estos valores para personalizar tu evento

export const EVENT_CONFIG = {
  // Información básica del evento
  name: 'Valentina',
  eventType: 'XV Años',
  eventTitle: 'XV Años de Valentina',
  
  // Fecha y hora del evento
  eventDate: '2025-11-10T21:30:00', // Formato: YYYY-MM-DDTHH:mm:ss
  eventDateFormatted: 'Viernes 10 de Noviembre de 2025',
  eventTime: '21:30 hs - 5:30hs',
  
  // Ubicación
  venue: '"Nombre del lugar de la fiesta"',
  address: '"Calle de la fiesta 123, Ciudad, País"',
  mapUrl: '', // URL de Google Maps (opcional)
  
  // Fecha límite para confirmación
  rsvpDeadline: '10 de Octubre',
  
  // Email de contacto
  contactEmail: 'xvvalentina25@gmail.com',
  
  // URLs de integración
  googleAppsScriptUrl: 'https://script.google.com/macros/s/AKfycbwWAC77Q6eDfhBcwEb_p-R1M3JBMS_9vPC7JDLcUFYWniN0ku9VfFNY7D88zZDzD3sk/exec',
  sharedSecret: 'abc123-valentina-xv',
  
  // Archivos multimedia
  backgroundMusic: '/maxi-trusso.mp3',
  backgroundImage: '/bg-bottom.jpg',
  
  // Colores del tema
  colors: {
    primary: '#8b0000',    // Bordó
    secondary: '#d4af37',  // Dorado
    accent: '#50010c',     // Púrpura oscuro
  },
  
  // Textos personalizados
  texts: {
    heroSubtitle: '¡Let\'s party!',
    heroDescription: 'Te invitamos a celebrar este momento tan especial',
    countdownTitle: '¡Empezó la cuenta regresiva!',
    countdownSubtitle: '¡Cada segundo cuenta para esta celebración única!',
    eventDetailsTitle: 'Detalles de la Fiesta',
    eventDetailsSubtitle: 'Todo lo que necesitas saber para esta noche especial',
    rsvpTitle: 'Confirmación de Asistencia',
    rsvpSubtitle: 'Cuento con tu presencia.',
    rsvpButton: '¡Confirmá tu asistencia!',
  }
};

// ===== CONFIGURACIÓN DE SEO =====
export const SEO_CONFIG = {
  title: `${EVENT_CONFIG.eventTitle} - ¡Celebremos Juntos!`,
  description: `Te invitamos a celebrar los ${EVENT_CONFIG.eventType.toLowerCase()} de ${EVENT_CONFIG.name}. Una noche mágica llena de música, baile y momentos inolvidables.`,
  keywords: [
    'XV años',
    'fiesta de quince',
    'Valentina',
    'celebración',
    'evento',
    'invitación',
    'RSVP'
  ],
  ogImage: '/og-image.jpg', // Imagen para redes sociales
};

// ===== CONFIGURACIÓN DE ANIMACIONES =====
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
  },
  easing: {
    easeOut: 'easeOut',
    easeInOut: 'easeInOut',
  },
  delays: {
    stagger: 0.1,
    section: 0.2,
  }
};

export default EVENT_CONFIG;