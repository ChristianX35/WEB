# Clínica Veterinaria El Bosque

Sitio web estático para una clínica veterinaria local en Valdivia, Chile. La página presenta servicios, horarios, razones para elegir la clínica y un formulario de contacto que abre WhatsApp con el mensaje preparado.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- Lucide Icons desde CDN
- Google Fonts

## Estructura

| Archivo | Descripción |
| --- | --- |
| `index.html` | Página principal del sitio. Incluye contenido, SEO, Open Graph y schema local business. |
| `styles.css` | Estilos visuales y diseño responsive. |
| `script.js` | Animaciones, carga de iconos y lógica del formulario hacia WhatsApp. |
| `.htaccess` | Configuración de seguridad para Apache. |
| `SECURITY_REPORT.md` | Reporte de auditoría de seguridad del proyecto. |

## Cómo ver el sitio localmente

Como es un sitio estático, puedes abrir `index.html` directamente en el navegador.

También puedes servirlo localmente con:

```bash
python3 -m http.server 8080
```

Luego visita:

```text
http://localhost:8080
```

## Funcionalidades

- Landing page responsive.
- Secciones de servicios, horarios y contacto.
- Formulario que genera un mensaje y abre WhatsApp.
- Enlaces a Instagram y WhatsApp.
- Animaciones suaves al hacer scroll.
- Íconos cargados con Lucide.

## SEO

El sitio incluye optimizaciones básicas de SEO local:

- Meta description enfocada en búsquedas veterinarias en Valdivia.
- Meta keywords.
- URL canonical.
- Open Graph para vistas previas en WhatsApp y redes sociales.
- Schema JSON-LD `VeterinaryCare` con datos de negocio local.
- Texto visible con términos como “veterinaria en Valdivia”, “clínica veterinaria Valdivia” y “atención veterinaria Los Lagos”.

## Seguridad

El archivo `.htaccess` agrega medidas básicas para Apache:

- Desactiva listado de directorios.
- Agrega cabeceras de seguridad.
- Define una Content Security Policy.
- Bloquea acceso a archivos sensibles comunes.
- Desactiva `display_errors` en PHP cuando el servidor lo permite.

## Despliegue

Este proyecto puede desplegarse en servicios de hosting estático como:

- Netlify
- Vercel
- GitHub Pages
- Hosting tradicional con Apache

Si se usa Apache, mantener el archivo `.htaccess` en la raíz del sitio para aplicar las cabeceras y reglas de seguridad.

## Contacto configurado

El número de WhatsApp está definido en `script.js`:

```js
const WHATSAPP_NUMBER = "aca pongo el numero que se quiera usar ";
```

