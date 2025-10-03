# 🎉 Instrucciones Finales - Landing Page de Eventos

¡Tu landing page de invitación de eventos está lista! Aquí tienes todo lo que necesitas saber para personalizarla y desplegarla.

## 📁 Archivos Principales Creados/Actualizados

### ✅ Configuración Centralizada
- `src/config/eventConfig.js` - **¡IMPORTANTE!** Cambia aquí todos los datos del evento
- `src/config/emailConfig.js` - Configuración alternativa con EmailJS

### ✅ Componentes Principales
- `src/pages/Home.jsx` - Página principal con todas las secciones
- `src/pages/ConfirmPage.jsx` - Página de confirmación RSVP
- `src/components/HeroSection.jsx` - Sección hero con nombre del evento
- `src/components/CountdownSection.jsx` - Cuenta regresiva
- `src/components/EventDetails.jsx` - Detalles del evento
- `src/components/RSVP.jsx` - Sección de confirmación
- `src/components/AudioPlayer.jsx` - Reproductor de música
- `src/components/FloatingParticles.jsx` - Efectos de partículas

### ✅ Archivos de Despliegue
- `public/.htaccess` - Configuración para hosting
- `google-apps-script/Code.gs` - Script para Google Sheets y emails
- `README.md` - Documentación completa
- `DEPLOYMENT.md` - Guía de despliegue detallada

## 🚀 Pasos para Personalizar

### 1. Cambiar Datos del Evento
**Archivo**: `src/config/eventConfig.js`

```javascript
export const EVENT_CONFIG = {
  name: 'TuNombre',                    // ← Cambiar aquí
  eventType: 'XV Años',               // ← Cambiar si es otro tipo
  eventDate: '2025-11-10T21:30:00',   // ← Cambiar fecha
  venue: '"Nombre del lugar"',        // ← Cambiar lugar
  address: '"Dirección completa"',    // ← Cambiar dirección
  contactEmail: 'tu-email@gmail.com', // ← Cambiar email
  // ... resto de configuración
};
```

### 2. Configurar Google Apps Script

1. **Crear proyecto en Google Apps Script**:
   - Ve a [script.google.com](https://script.google.com)
   - Crea nuevo proyecto
   - Copia código de `google-apps-script/Code.gs`

2. **Configurar Google Sheet**:
   - Crea nueva Google Sheet
   - Copia el ID de la URL
   - Actualiza `SHEET_ID` en el código

3. **Desplegar como Web App**:
   - "Desplegar" → "Nueva implementación"
   - Tipo: "Aplicación web"
   - Acceso: "Cualquier usuario"
   - Copia la URL generada

4. **Actualizar URL en Frontend**:
   - En `src/config/eventConfig.js`, línea 25
   - Reemplaza la URL de ejemplo con tu URL real

### 3. Personalizar Multimedia

**Música de fondo**:
- Reemplaza `/public/maxi-trusso.mp3` con tu archivo
- Formatos: MP3, OGG
- Duración recomendada: 2-5 minutos

**Imagen de fondo**:
- Reemplaza `/public/bg-bottom.jpg` con tu imagen
- Resolución: 1920x1080 o superior
- Formato: JPG, PNG, WebP

**Imagen para redes sociales**:
- Crea `/public/og-image.jpg` (1200x630px)
- Aparecerá al compartir el enlace

### 4. Construir y Desplegar

```bash
# Instalar dependencias
npm install

# Construir para producción
npm run build

# Los archivos estarán en la carpeta dist/
```

**Subir a hosting**:
- Sube el contenido de `dist/` a tu hosting
- El archivo `.htaccess` ya está incluido

## 🎨 Personalización Avanzada

### Cambiar Colores
**Archivo**: `src/index.css` (líneas 20-34)

```css
:root{
  --primary-gold:#d4af37;    /* Dorado */
  --primary-rose:#8b0000;    /* Bordó */
  --primary-purple:#50010c;  /* Púrpura */
}
```

### Cambiar Fuentes
**Archivo**: `src/index.css` (líneas 96-103)

```css
.playfair{ font-family:'Playfair Display', Georgia, serif; }
.dancing-script{ font-family:'Great Vibes', cursive; }
.font-horizon{ font-family:'Sprite Graffiti', system-ui, sans-serif; }
```

### Agregar Nuevas Secciones
1. Crea componente en `src/components/`
2. Importa en `src/pages/Home.jsx`
3. Agrega entre las secciones existentes

## 🔧 Solución de Problemas Comunes

### Error 404 en Rutas
**Problema**: Las rutas de React Router no funcionan
**Solución**: Verifica que `.htaccess` esté en la raíz del hosting

### Formulario no envía datos
**Problema**: Google Apps Script no funciona
**Solución**:
1. Verifica que la URL sea correcta
2. Asegúrate de que esté desplegado como "Web App"
3. Revisa permisos de la cuenta de Google

### Música no reproduce automáticamente
**Problema**: El audio no se reproduce al cargar
**Solución**: Es normal, los navegadores bloquean autoplay. El usuario debe hacer clic en play.

### Imágenes no cargan
**Problema**: Las imágenes no se muestran
**Solución**:
1. Verifica que estén en `/public/`
2. Revisa las rutas en el código
3. Verifica permisos del hosting

## 📊 Verificar Funcionalidades

### ✅ Checklist Pre-Despliegue
- [ ] Nombre del evento actualizado
- [ ] Fechas y horarios correctos
- [ ] Ubicación del evento configurada
- [ ] Email de contacto actualizado
- [ ] Google Apps Script configurado
- [ ] Música de fondo cargada
- [ ] Imagen de fondo cargada
- [ ] Formulario RSVP funciona
- [ ] Respuestas se guardan en Google Sheets
- [ ] Emails de notificación se envían
- [ ] Toast de confirmación aparece
- [ ] Se ve bien en móvil y desktop

### ✅ Pruebas Post-Despliegue
- [ ] Página principal carga correctamente
- [ ] Todas las secciones se muestran
- [ ] Navegación funciona
- [ ] Formulario RSVP es accesible
- [ ] Envío de datos funciona
- [ ] Música reproduce (con clic en play)
- [ ] Partículas flotantes funcionan
- [ ] Responsive en diferentes dispositivos

## 🎯 Próximos Pasos

1. **Personalizar contenido** en `eventConfig.js`
2. **Configurar Google Apps Script**
3. **Subir multimedia** (música, imágenes)
4. **Construir proyecto** con `npm run build`
5. **Desplegar** en tu hosting
6. **Probar** todas las funcionalidades
7. **Compartir** el enlace con invitados

## 📞 Soporte

Si tienes problemas:

1. **Revisa esta guía** paso a paso
2. **Verifica configuración** de Google Apps Script
3. **Comprueba logs** del hosting
4. **Prueba en diferentes navegadores**

## 🎉 ¡Listo!

Tu landing page de invitación de eventos está completa y lista para usar. Solo necesitas personalizar los datos y desplegarla.

**¡Que tengas un evento increíble! 🎊**

---

### Resumen de Archivos Clave:
- `src/config/eventConfig.js` - **Configuración principal**
- `google-apps-script/Code.gs` - **Backend para formulario**
- `public/.htaccess` - **Configuración de hosting**
- `README.md` - **Documentación completa**
- `DEPLOYMENT.md` - **Guía de despliegue**