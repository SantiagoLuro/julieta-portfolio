# Landing Page de Invitación - XV Valentina

Una hermosa landing page para invitaciones de eventos especiales (XV años, casamientos, cumpleaños, etc.) construida con React + Vite.

## Características

- ✅ Diseño moderno y elegante con efectos visuales
- ✅ Partículas flotantes animadas
- ✅ Música de fondo automática
- ✅ Formulario RSVP con integración a Google Sheets
- ✅ Emails automáticos con EmailJS
- ✅ Animaciones con Framer Motion
- ✅ Tipografías de Google Fonts (Playfair Display, Poppins, Great Vibes)
- ✅ Totalmente responsive
- ✅ Listo para deploy

## Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [url-del-repositorio]
   cd landing-page-invitaciones
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar servicios externos**

   ### Google Apps Script para Google Sheets

   1. Crear una nueva hoja de Google Sheets
   2. Ir a `Herramientas > Editor de secuencias de comandos`
   3. Copiar el contenido del archivo `GoogleAppsScript.js`
   4. Publicar como aplicación web:
      - `Deploy > Nueva implementación`
      - Seleccionar tipo: "Aplicación web"
      - Configurar acceso: "Cualquier usuario"
   5. Copiar la URL de la aplicación web
   6. En `src/pages/ConfirmPage.jsx`, reemplazar `YOUR_GOOGLE_APPS_SCRIPT_ID` con la URL

   ### EmailJS

   1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
   2. Crear nuevo servicio de email
   3. Crear plantilla de email
   4. En `src/pages/ConfirmPage.jsx`, reemplazar:
      - `YOUR_EMAILJS_SERVICE_ID`
      - `YOUR_EMAILJS_TEMPLATE_ID`
      - `YOUR_EMAILJS_PUBLIC_KEY`

4. **Agregar archivos multimedia**

   - Música de fondo: Agregar archivo `music.mp3` en `/public/assets/`
   - Imágenes de fondo: Agregar `bg-bottom.jpg` en `/public/assets/`
   - Imágenes de galería: Agregar archivos en `/public/assets/` con nombres:
     - `gallery-1.jpg`
     - `gallery-2.jpg`
     - `gallery-3.jpg`
     - `gallery-4.jpg`
     - `gallery-5.jpg`
     - `gallery-6.jpg`

5. **Personalización**

   - Cambiar nombre "Valentina" por el nombre deseado en todos los componentes
   - Modificar colores en los estilos CSS si es necesario
   - Actualizar información del evento en los componentes correspondientes

## Desarrollo

```bash
npm run dev
```

## Build para producción

```bash
npm run build
```

Los archivos de producción estarán en la carpeta `dist/`.

## Deploy

1. **Subir archivos a hosting**
   - Subir todo el contenido de la carpeta `dist/` al hosting
   - Asegurarse de que el archivo `.htaccess` esté en la raíz del sitio

2. **Configurar dominio**
   - Apuntar el dominio al directorio público del hosting

## Tecnologías utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool y dev server
- **Framer Motion** - Animaciones
- **React Router DOM** - Navegación
- **EmailJS** - Envío de emails
- **React Hot Toast** - Notificaciones
- **Google Apps Script** - Integración con Sheets
- **Tailwind CSS** - Estilos (integrado vía clases)

## Estructura del proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── AudioPlayer.jsx   # Reproductor de música
│   ├── DressCode.jsx     # Código de vestimenta
│   ├── EventDetails.jsx  # Detalles del evento
│   ├── FloatingParticles.jsx  # Partículas animadas
│   ├── Gallery.jsx       # Galería de fotos
│   ├── Header.jsx        # Navegación
│   ├── Hero.jsx          # Sección principal
│   ├── Music.jsx         # Información musical
│   └── RSVP.jsx          # Sección de confirmación
├── pages/                # Páginas de la aplicación
│   └── ConfirmPage.jsx   # Formulario RSVP
├── App.jsx               # Componente principal
├── fonts.css             # Importación de fuentes
└── index.css             # Estilos globales

public/
├── assets/               # Archivos multimedia
│   ├── music.mp3         # Música de fondo
│   ├── bg-bottom.jpg     # Fondo parallax
│   └── gallery-*.jpg     # Imágenes de galería
└── .htaccess             # Configuración para hosting
```

## Configuración de servicios

### Variables de entorno (opcional)

Crear archivo `.env` en la raíz:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GOOGLE_APPS_SCRIPT_URL=your_script_url
```

## Personalización avanzada

- **Colores**: Modificar las clases de Tailwind en los componentes
- **Fuentes**: Agregar nuevas fuentes en `fonts.css`
- **Contenido**: Editar la información en cada componente
- **Animaciones**: Personalizar las animaciones de Framer Motion

## Soporte

Para soporte técnico o personalizaciones adicionales, contactar al desarrollador.

## Licencia

Este proyecto es privado y está destinado únicamente para uso personal o del cliente especificado.