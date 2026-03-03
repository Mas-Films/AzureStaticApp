# MAS FILMS – Sitio Web

Sitio web oficial de MAS FILMS, productora audiovisual con sede en Costa Rica.

## Stack

- **React 18+** con Vite
- Funcional / Hooks únicamente
- Sin librerías de animación (usa IntersectionObserver nativo)
- CSS modular por componente

## Estructura del Proyecto

```
mas-films/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── styles/
│   │   └── globals.css
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── data/
│   │   └── portfolioData.js       ← Agrega aquí los proyectos del portafolio
│   ├── assets/
│   │   └── images/                ← Coloca TODAS las imágenes aquí
│   └── components/
│       ├── Navbar.jsx / .css
│       ├── Hero.jsx / .css
│       ├── Carousel.jsx / .css
│       ├── Servicios.jsx / .css
│       ├── QuienesSomos.jsx / .css
│       ├── QueHacemos.jsx / .css
│       ├── MisionVision.jsx / .css
│       ├── Portafolio.jsx / .css
│       ├── Contacto.jsx / .css
│       ├── Footer.jsx / .css
│       └── WhatsAppButton.jsx / .css
```

## Instalación

```bash
npm install
npm run dev
```

## Build para Producción

```bash
npm run build
npm run preview
```

## Agregar Imágenes

Coloca todas las imágenes dentro de `/src/assets/images/`:

| Archivo | Uso |
|---|---|
| `Logo-Black.png` | Navbar, Hero |
| `Logo-White.png` | Footer |
| `background.png` | Fondo Hero |
| `camera-emoji.png` | Favicon |
| `Carrousel_1.jpeg` | Carrusel |
| `Carrousel_2.jpg` | Carrusel |
| `Carrousel_3.jpg` | Carrusel |
| `Carrousel_4.jpeg` | Carrusel |
| `Carrousel_5.jpeg` | Carrusel |
| `Imaginery_1.png` | Decorativo Qué Hacemos |
| `Imaginery_2.png` | Quiénes Somos |
| `Imaginery_3.png` | Quiénes Somos |
| `Imaginery_4.png` | Qué Hacemos |
| `Imaginery_5.png` | Qué Hacemos |

## Agregar Ítems al Portafolio

Edita el archivo `/src/data/portfolioData.js`:

```js
export const portfolioItems = [
  {
    id: 1,
    title: 'Nombre del Proyecto',
    category: 'Video Corporativo',
    image: '/src/assets/images/portfolio-proyecto.jpg',
  },
  // ...
]
```

Agrega la imagen correspondiente en `/src/assets/images/`.

## Marca

| Token | Valor |
|---|---|
| Color Principal | `#3291B6` |
| Negro | `#000000` |
| Blanco | `#FFFFFF` |
| Fuente Display | DM Serif Display |
| Fuente Cuerpo | DM Sans |

## Formulario de Contacto

El formulario actualmente muestra un mensaje de éxito al enviar. Para conectarlo a un servicio real (email, CRM, etc.), edita la función `handleSubmit` en `/src/components/Contacto.jsx` e integra tu servicio preferido (ej. EmailJS, Formspree, Resend, etc.).
