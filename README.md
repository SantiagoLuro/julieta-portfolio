# 🎉 Landing Page de Invitación de Eventos - XV de Valentina

Una landing page moderna y elegante para invitaciones de eventos (XV, casamientos, cumpleaños) construida con React + Vite.

## ✨ Características

- **Diseño Moderno**: Interfaz elegante con efectos visuales y animaciones
- **Partículas Flotantes**: Efectos visuales con FloatingParticles.jsx
- **Música de Fondo**: AudioPlayer automático con archivo MP3
- **Formulario RSVP**: Confirmación de asistencia con validación
- **Integración Google Sheets**: Guardado automático de respuestas
- **Notificaciones Email**: Envío automático de confirmaciones
- **Responsive**: Adaptable a todos los dispositivos
- **SEO Optimizado**: Meta tags y estructura optimizada

## 🚀 Instalación y Configuración

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Configurar Google Apps Script

1. **Crear un nuevo proyecto en Google Apps Script**:
   - Ve a [script.google.com](https://script.google.com)
   - Crea un nuevo proyecto
   - Copia el código de `google-apps-script/Code.gs`

2. **Configurar Google Sheet**:
   - Crea una nueva Google Sheet
   - Copia el ID de la URL (ej: `1ABC...XYZ`)
   - Reemplaza `TU_SHEET_ID_AQUI` en el código con tu ID real

3. **Desplegar como Web App**:
   - En Apps Script, ve a "Desplegar" > "Nueva implementación"
   - Tipo: "Aplicación web"
   - Ejecutar como: "Yo"
   - Acceso: "Cualquier usuario"
   - Copia la URL generada

4. **Actualizar URL en el Frontend**:
   - En `src/pages/ConfirmPage.jsx`, línea 8
   - Reemplaza la URL de ejemplo con tu URL real

### 3. Configurar EmailJS (Opcional)

Si quieres usar EmailJS además de Google Apps Script:

1. Crea cuenta en [EmailJS](https://www.emailjs.com)
2. Configura tu servicio de email
3. Actualiza las credenciales en el código

### 4. Personalizar Contenido

**Cambiar el nombre del evento**:
- Busca "Valentina" en todos los archivos y reemplaza por el nombre deseado
- Actualiza fechas, lugares y detalles en `src/components/EventDetails.jsx`

**Cambiar música de fondo**:
- Reemplaza `/public/maxi-trusso.mp3` con tu archivo de música
- Actualiza la referencia en `src/App.jsx`

**Cambiar imágenes**:
- Reemplaza `/public/bg-bottom.jpg` con tu imagen de fondo
- Actualiza las imágenes en la galería

### 5. Construir para Producción

```bash
npm run build
```

Los archivos de producción estarán en la carpeta `dist/`.

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── AudioPlayer.jsx  # Reproductor de música
│   ├── FloatingParticles.jsx # Efectos de partículas
│   ├── HeroSection.jsx  # Sección principal
│   ├── EventDetails.jsx # Detalles del evento
│   ├── RSVP.jsx         # Sección de confirmación
│   └── ui/              # Componentes de UI
├── pages/               # Páginas principales
│   ├── Home.jsx         # Página principal
│   └── ConfirmPage.jsx  # Página de confirmación
├── assets/              # Recursos estáticos
│   └── fonts/           # Fuentes personalizadas
└── index.css           # Estilos globales
```

## 🎨 Personalización de Estilos

### Fuentes Disponibles
- **Playfair Display**: Para títulos elegantes
- **Poppins**: Para texto general
- **Great Vibes**: Para texto decorativo
- **Sprite Graffiti**: Para el título "XV"
- **Klemer Display**: Para nombres

### Colores del Tema
- **Dorado**: `#d4af37`
- **Bordó**: `#8b0000`
- **Púrpura**: `#50010c`

## 🚀 Despliegue

### Hostinger (Recomendado)
1. Construye el proyecto: `npm run build`
2. Sube el contenido de `dist/` a tu hosting
3. El archivo `.htaccess` ya está incluido para React Router

### Otros Hostings
- **Netlify**: Arrastra la carpeta `dist/`
- **Vercel**: Conecta tu repositorio
- **GitHub Pages**: Usa GitHub Actions

## 📧 Configuración de Email

El sistema envía emails automáticamente a `xvvalentina25@gmail.com` cuando alguien confirma asistencia. Para cambiar el email:

1. En Google Apps Script, línea 4: cambia `EMAIL_TO`
2. En el frontend, actualiza cualquier referencia al email

## 🔧 Solución de Problemas

### Error 404 en Rutas
- Asegúrate de que el archivo `.htaccess` esté en la carpeta raíz del hosting

### Google Apps Script no funciona
- Verifica que la URL sea correcta
- Asegúrate de que el proyecto esté desplegado como "Web App"
- Revisa los permisos de la cuenta de Google

### Música no reproduce
- Verifica que el archivo MP3 esté en `/public/`
- Algunos navegadores bloquean autoplay, es normal

## 📱 Características Técnicas

- **React 18** con hooks modernos
- **Vite** para desarrollo rápido
- **Framer Motion** para animaciones
- **Tailwind CSS** para estilos
- **React Router** para navegación
- **EmailJS** para notificaciones
- **Google Apps Script** para backend

## 🎯 Próximas Mejoras

- [ ] Galería de fotos interactiva
- [ ] Múltiples temas de colores
- [ ] Integración con calendarios
- [ ] Modo oscuro/claro
- [ ] PWA (Progressive Web App)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tus eventos.

---

**¡Disfruta tu evento! 🎉**