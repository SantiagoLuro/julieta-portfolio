// Google Apps Script para guardar datos del RSVP en Google Sheets
// Este archivo debe subirse a Google Apps Script y publicarse como aplicación web

function doGet(e) {
  return HtmlService.createHtmlOutput("Script funcionando correctamente");
}

function doPost(e) {
  try {
    // Obtener los datos del formulario
    var data = JSON.parse(e.postData.contents);

    // ID de la hoja de Google Sheets (reemplazar con el ID real)
    var sheetId = "YOUR_GOOGLE_SHEET_ID";
    var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();

    // Agregar timestamp
    var timestamp = new Date();

    // Crear fila de datos
    var rowData = [
      timestamp,
      data.nombre,
      data.apellido,
      data.email,
      data.telefono,
      data.asistencia,
      data.cantidadAcompanantes,
      data.nombresAcompanantes,
      data.restriccionesAlimenticias,
      data.mensaje
    ];

    // Agregar fila a la hoja
    sheet.appendRow(rowData);

    // Respuesta de éxito
    return ContentService.createTextOutput(JSON.stringify({
      "status": "success",
      "message": "Datos guardados correctamente"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error: " + error.message);

    // Respuesta de error
    return ContentService.createTextOutput(JSON.stringify({
      "status": "error",
      "message": "Error al guardar los datos: " + error.message
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Función para configurar el encabezado de la hoja (ejecutar una sola vez)
function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();

  var headers = [
    "Fecha y Hora",
    "Nombre",
    "Apellido",
    "Email",
    "Teléfono",
    "Asistencia",
    "Cantidad Acompañantes",
    "Nombres Acompañantes",
    "Restricciones Alimenticias",
    "Mensaje"
  ];

  sheet.appendRow(headers);

  // Formatear encabezados
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight("bold")
    .setBackground("#f3f3f3");
}