// ===== CONFIGURACIÓN DE EMAILJS =====
// Alternativa a Google Apps Script para envío de emails

export const EMAIL_CONFIG = {
  // Configuración de EmailJS
  serviceId: 'service_xxxxxxx', // Tu Service ID de EmailJS
  templateId: 'template_xxxxxxx', // Tu Template ID de EmailJS
  publicKey: 'xxxxxxxxxxxxxxxx', // Tu Public Key de EmailJS
  
  // Email de destino
  toEmail: 'xvvalentina25@gmail.com',
  
  // Configuración del template
  templateParams: {
    to_name: 'Familia de Valentina',
    from_name: 'Sistema de Confirmación',
    event_name: 'XV Años de Valentina',
    reply_to: 'noreply@tudominio.com'
  }
};

// ===== FUNCIÓN PARA ENVIAR EMAIL CON EMAILJS =====
export const sendEmailWithEmailJS = async (formData) => {
  try {
    // Importar EmailJS dinámicamente
    const emailjs = await import('@emailjs/browser');
    
    const templateParams = {
      ...EMAIL_CONFIG.templateParams,
      // Datos del formulario
      guest_name: formData.nombre,
      attendance: formData.asistencia,
      family_members: formData.familiares || 'No especificado',
      dietary_restrictions: formData.restricciones || 'Ninguna',
      confirmation_date: new Date().toLocaleDateString('es-AR'),
      confirmation_time: new Date().toLocaleTimeString('es-AR')
    };

    const result = await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    );

    return { success: true, result };
  } catch (error) {
    console.error('Error enviando email con EmailJS:', error);
    return { success: false, error: error.message };
  }
};

// ===== TEMPLATE DE EMAIL PARA EMAILJS =====
export const EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nueva Confirmación RSVP</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8b0000, #d4af37); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; }
        .info-box { background: white; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #8b0000; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Nueva Confirmación RSVP</h1>
            <p>{{event_name}}</p>
        </div>
        
        <div class="content">
            <h2>Detalles de la Confirmación:</h2>
            
            <div class="info-box">
                <strong>👤 Invitado:</strong> {{guest_name}}
            </div>
            
            <div class="info-box">
                <strong>✅ Asistencia:</strong> {{attendance}}
            </div>
            
            {{#if family_members}}
            <div class="info-box">
                <strong>👨‍👩‍👧‍👦 Familiares:</strong> {{family_members}}
            </div>
            {{/if}}
            
            {{#if dietary_restrictions}}
            <div class="info-box">
                <strong>🍽️ Restricciones alimenticias:</strong> {{dietary_restrictions}}
            </div>
            {{/if}}
            
            <div class="info-box">
                <strong>📅 Fecha de confirmación:</strong> {{confirmation_date}} a las {{confirmation_time}}
            </div>
        </div>
        
        <div class="footer">
            <p>Este email fue enviado automáticamente desde el formulario de confirmación de asistencia.</p>
        </div>
    </div>
</body>
</html>
`;

export default EMAIL_CONFIG;