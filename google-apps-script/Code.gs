// ===== CONFIGURACIÓN =====
const SHEET_ID = 'TU_SHEET_ID_AQUI'; // Reemplazar con el ID de tu Google Sheet
const SHEET_NAME = 'RSVP_Responses'; // Nombre de la hoja
const SHARED_SECRET = 'abc123-valentina-xv'; // Debe coincidir con el frontend
const EMAIL_TO = 'xvvalentina25@gmail.com'; // Email de destino

// ===== FUNCIÓN PRINCIPAL (doPost) =====
function doPost(e) {
  try {
    // Parsear datos del POST
    const data = JSON.parse(e.postData.contents);
    
    // Validar secret
    if (data.secret !== SHARED_SECRET) {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Invalid secret' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Validar tipo de datos
    if (data.type !== 'rsvp') {
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: 'Invalid type' }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Guardar en Google Sheets
    const sheetResult = saveToSheet(data);
    
    // Enviar email de notificación
    const emailResult = sendEmailNotification(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        sheetSaved: sheetResult,
        emailSent: emailResult
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error en doPost:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ===== FUNCIÓN PARA GUARDAR EN GOOGLE SHEETS =====
function saveToSheet(data) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Si la hoja no existe, crearla
    if (!sheet) {
      const newSheet = SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      // Agregar headers
      newSheet.getRange(1, 1, 1, 6).setValues([
        ['Fecha', 'Nombre', 'Asistencia', 'Familiares', 'Restricciones', 'Timestamp']
      ]);
      newSheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    }
    
    const targetSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    // Agregar nueva fila
    const timestamp = new Date();
    const newRow = [
      Utilities.formatDate(timestamp, 'GMT-3', 'dd/MM/yyyy HH:mm'),
      data.nombre,
      data.asistencia,
      data.familiares || '',
      data.restricciones || '',
      timestamp.getTime()
    ];
    
    targetSheet.appendRow(newRow);
    
    return true;
  } catch (error) {
    console.error('Error guardando en Sheet:', error);
    return false;
  }
}

// ===== FUNCIÓN PARA ENVIAR EMAIL =====
function sendEmailNotification(data) {
  try {
    const subject = `🎉 Nueva confirmación RSVP - ${data.nombre}`;
    
    let body = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #8b0000; text-align: center;">🎉 Nueva Confirmación de Asistencia</h2>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Detalles de la Confirmación:</h3>
        
        <p><strong>👤 Nombre:</strong> ${data.nombre}</p>
        <p><strong>✅ Asistencia:</strong> ${data.asistencia}</p>
    `;
    
    if (data.asistencia === 'Sí' && data.familiares) {
      body += `<p><strong>👨‍👩‍👧‍👦 Familiares:</strong> ${data.familiares}</p>`;
    }
    
    if (data.asistencia === 'Sí' && data.restricciones) {
      body += `<p><strong>🍽️ Restricciones alimenticias:</strong> ${data.restricciones}</p>`;
    }
    
    body += `
        <p><strong>📅 Fecha de confirmación:</strong> ${Utilities.formatDate(new Date(), 'GMT-3', 'dd/MM/yyyy HH:mm')}</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px;">
        <p style="color: #666; font-size: 14px;">
          Este email fue enviado automáticamente desde el formulario de confirmación de asistencia.
        </p>
      </div>
    </div>
    `;
    
    MailApp.sendEmail({
      to: EMAIL_TO,
      subject: subject,
      htmlBody: body
    });
    
    return true;
  } catch (error) {
    console.error('Error enviando email:', error);
    return false;
  }
}

// ===== FUNCIÓN DE PRUEBA (doGet) =====
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: 'OK', 
      message: 'Google Apps Script funcionando correctamente',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ===== FUNCIÓN PARA CONFIGURAR LA HOJA INICIAL =====
function setupSheet() {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      const newSheet = SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);
      newSheet.getRange(1, 1, 1, 6).setValues([
        ['Fecha', 'Nombre', 'Asistencia', 'Familiares', 'Restricciones', 'Timestamp']
      ]);
      newSheet.getRange(1, 1, 1, 6).setFontWeight('bold');
      newSheet.autoResizeColumns(1, 6);
    }
    
    console.log('Hoja configurada correctamente');
    return true;
  } catch (error) {
    console.error('Error configurando hoja:', error);
    return false;
  }
}