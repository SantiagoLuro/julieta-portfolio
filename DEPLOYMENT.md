# 🚀 Guía de Despliegue - Landing Page de Eventos

Esta guía te ayudará a desplegar tu landing page de invitación de eventos paso a paso.

## 📋 Checklist Pre-Despliegue

### ✅ Configuración Básica
- [ ] Cambiar nombre de "Valentina" por el nombre real del evento
- [ ] Actualizar fechas y horarios en `src/config/eventConfig.js`
- [ ] Configurar ubicación del evento
- [ ] Reemplazar imágenes de fondo y música
- [ ] Configurar Google Apps Script
- [ ] Actualizar email de contacto

### ✅ Google Apps Script Setup

1. **Crear Proyecto**:
   - Ve a [script.google.com](https://script.google.com)
   - Crea un nuevo proyecto
   - Copia el código de `google-apps-script/Code.gs`

2. **Configurar Google Sheet**:
   ```javascript
   // En Code.gs, línea 3:
   const SHEET_ID = 'TU_SHEET_ID_AQUI'; // ← Cambiar por tu ID real
   ```

3. **Obtener ID de Google Sheet**:
   - Abre tu Google Sheet
   - Copia el ID de la URL: `https://docs.google.com/spreadsheets/d/[ESTE_ES_TU_ID]/edit`

4. **Desplegar Web App**:
   - En Apps Script: "Desplegar" → "Nueva implementación"
   - Tipo: "Aplicación web"
   - Ejecutar como: "Yo"
   - Acceso: "Cualquier usuario"
   - Copia la URL generada

5. **Actualizar URL en Frontend**:
   ```javascript
   // En src/config/eventConfig.js, línea 25:
   googleAppsScriptUrl: 'TU_URL_AQUI', // ← Cambiar por tu URL real
   ```

### ✅ Personalización de Contenido

**Archivo principal**: `src/config/eventConfig.js`

```javascript
export const EVENT_CONFIG = {
  name: 'TuNombre',                    // ← Cambiar
  eventType: 'XV Años',               // ← Cambiar si es otro tipo
  eventDate: '2025-11-10T21:30:00',   // ← Cambiar fecha
  venue: '"Nombre del lugar"',        // ← Cambiar lugar
  address: '"Dirección completa"',    // ← Cambiar dirección
  contactEmail: 'tu-email@gmail.com',  // ← Cambiar email
  // ... resto de configuración
};
```

### ✅ Archivos Multimedia

**Música de fondo**:
- Reemplaza `/public/maxi-trusso.mp3` con tu archivo
- Formatos recomendados: MP3, OGG
- Duración recomendada: 2-5 minutos (se reproduce en loop)

**Imagen de fondo**:
- Reemplaza `/public/bg-bottom.jpg` con tu imagen
- Resolución recomendada: 1920x1080 o superior
- Formato: JPG, PNG, WebP

**Imagen para redes sociales**:
- Crea `/public/og-image.jpg` (1200x630px)
- Esta imagen aparecerá cuando compartas el enlace

## 🌐 Opciones de Hosting

### 1. Hostinger (Recomendado)

**Ventajas**: Económico, fácil de usar, soporte en español

**Pasos**:
1. Compra un plan de hosting
2. Construye el proyecto: `npm run build`
3. Sube el contenido de `dist/` a la carpeta `public_html`
4. El archivo `.htaccess` ya está incluido

**Configuración DNS**:
- Apunta tu dominio a la IP del hosting
- Espera 24-48 horas para propagación

### 2. Netlify

**Ventajas**: Gratis, fácil despliegue, CDN global

**Pasos**:
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `dist/` al área de deploy
3. Configura dominio personalizado (opcional)

**Configuración**:
- El archivo `_redirects` se crea automáticamente
- SSL automático incluido

### 3. Vercel

**Ventajas**: Optimizado para React, rápido, gratis

**Pasos**:
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Configura build command: `npm run build`
4. Configura output directory: `dist`

### 4. GitHub Pages

**Ventajas**: Gratis, integrado con GitHub

**Pasos**:
1. Sube tu código a GitHub
2. Ve a Settings → Pages
3. Selecciona "GitHub Actions"
4. Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 🔧 Configuración Post-Despliegue

### Verificar Funcionalidades

1. **Navegación**:
   - [ ] Página principal carga correctamente
   - [ ] Enlaces de navegación funcionan
   - [ ] Formulario RSVP es accesible

2. **Formulario RSVP**:
   - [ ] Envío de datos funciona
   - [ ] Respuesta se guarda en Google Sheets
   - [ ] Email de notificación se envía
   - [ ] Toast de confirmación aparece

3. **Multimedia**:
   - [ ] Música de fondo reproduce
   - [ ] Imágenes cargan correctamente
   - [ ] Partículas flotantes funcionan

4. **Responsive**:
   - [ ] Se ve bien en móvil
   - [ ] Se ve bien en tablet
   - [ ] Se ve bien en desktop

### Optimización SEO

1. **Google Search Console**:
   - Agrega tu sitio
   - Envía sitemap
   - Monitorea indexación

2. **Meta Tags**:
   - Verifica que los meta tags estén correctos
   - Prueba con herramientas como Facebook Debugger

3. **Performance**:
   - Usa Google PageSpeed Insights
   - Optimiza imágenes si es necesario

## 🐛 Solución de Problemas

### Error 404 en Rutas
**Problema**: Las rutas de React Router no funcionan
**Solución**: Verifica que el archivo `.htaccess` esté en la raíz del hosting

### Google Apps Script no funciona
**Problema**: El formulario no envía datos
**Solución**:
1. Verifica que la URL sea correcta
2. Asegúrate de que el proyecto esté desplegado como "Web App"
3. Revisa los permisos de la cuenta de Google

### Música no reproduce
**Problema**: El audio no se reproduce automáticamente
**Solución**: Es normal, los navegadores bloquean autoplay. El usuario debe hacer clic en el botón de play.

### Imágenes no cargan
**Problema**: Las imágenes no se muestran
**Solución**:
1. Verifica las rutas de las imágenes
2. Asegúrate de que los archivos estén en `/public/`
3. Verifica los permisos del hosting

## 📊 Monitoreo y Analytics

### Google Analytics
```html
<!-- Agregar en index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Métricas Importantes
- Páginas vistas
- Tiempo en sitio
- Tasa de conversión del formulario RSVP
- Dispositivos más usados
- Ubicaciones geográficas

## 🔄 Actualizaciones Futuras

### Cambios de Contenido
- Actualiza `src/config/eventConfig.js`
- Reconstruye: `npm run build`
- Sube nueva versión al hosting

### Nuevas Funcionalidades
- Galería de fotos interactiva
- Múltiples temas de colores
- Integración con calendarios
- Modo PWA

## 📞 Soporte

Si tienes problemas con el despliegue:

1. Revisa esta guía paso a paso
2. Verifica la configuración de Google Apps Script
3. Comprueba los logs del hosting
4. Prueba en diferentes navegadores

---

**¡Tu landing page está lista para el evento! 🎉**