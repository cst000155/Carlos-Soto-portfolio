# Carlos Soto Torrex — Emerald Motion V2

Portfolio web de **Carlos Soto Torrex**, estudiante de Ingeniería Informática en la Universidad de Jaén, enfocado a prácticas y oportunidades junior. Idiomas español/inglés.

## Características

- Portada premium con **planeta digital interactivo** renderizado en Canvas a partir de geometría esférica y proyección tridimensional, con meridianos, paralelos, puntos y anillos orbitales. **No requiere librerías 3D adicionales**.
- Tema oscuro y claro con preferencia guardada en `localStorage`.
- Animaciones de aparición por scroll, transiciones y tarjetas con perspectiva al pasar el ratón.
- Seis secciones: inicio, sobre mí, trayectoria, tecnologías, proyectos y contacto.
- Menú responsive, selector de idioma, enlaces de GitHub/LinkedIn y compatibilidad con `prefers-reduced-motion`.

## Instalación

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

Abre la URL de Vite que aparezca en la terminal (normalmente `http://localhost:5173`).

## Pruebas y compilación

```bash
npm test
npm run build
npm run preview
```

`npm test` ejecuta comprobaciones de sintaxis TSX, parseo CSS, presencia de secciones, controles de accesibilidad y opciones de animación. No sustituye una revisión visual ni pruebas end-to-end. **Para el build completo necesitas instalar dependencias mediante `npm install`.**

## Personalización

- `src/App.tsx`: textos en español e inglés, enlaces, datos y componentes interactivos.
- `src/emerald.css`: diseño V2, estilos de ambos temas, efectos y responsive.
- `src/styles.css`: estilos originales de la V1 conservados como base.
- `src/main.tsx`: imports de ambos estilos.
- `public/cv.pdf`: coloca tu CV si quieres añadir el enlace de descarga después de ajustar la interfaz.

Para configurar repositorios reales, sustituye los avisos de «próximamente» cuando estén públicos. No se ha inventado email ni experiencia profesional.

## Tecnología

React 18, TypeScript, Vite, CSS, Canvas 2D con proyección 3D. El planeta usa un bucle `requestAnimationFrame` de dibujo de esfera, sin servicio ni conexión externos. El renderizado se reduce en pantallas pequeñas mediante CSS y puede pausarse/ajustarse para hardware modesto.

## Publicación

Vercel o Netlify: comando `npm run build`, directorio de salida `dist`. Para GitHub Pages configura `base` si publicas bajo una ruta de repositorio.

## Pendiente de contenido

Fechas exactas de estudios, imagen profesional, CV, capturas reales de ExamForge, enlaces públicos a repositorios y contribución concreta al hackatón.


### Contacto
La sección de contacto incluye el correo `sototorrescarlos@gmail.com` mediante enlace `mailto:`.
