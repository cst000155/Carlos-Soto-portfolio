# Carlos Soto Torres — Emerald Motion V2.5

Portfolio web de **Carlos Soto Torres**, estudiante de Ingeniería Informática en la Universidad de Jaén, enfocado a prácticas y oportunidades junior. Idiomas español/inglés.

## Características

- Portada premium con **planeta digital interactivo** renderizado en Canvas a partir de geometría esférica y proyección tridimensional, con meridianos, paralelos, puntos y anillos orbitales. **No requiere librerías 3D adicionales**.
- Tema oscuro y claro con preferencia guardada en `localStorage`.
- Animaciones de aparición por scroll, transiciones y tarjetas con perspectiva al pasar el ratón.
- Seis secciones: inicio, sobre mí, trayectoria, tecnologías, proyectos y contacto.
- Menú responsive, selector de idioma, enlaces de GitHub/LinkedIn y compatibilidad con `prefers-reduced-motion`.
- **V2.3:** presentación personal interactiva con tres pestañas (qué hago / cómo trabajo / qué busco).
- **V2.3:** modal de CV bilingüe con formato imprimible A4. Usa el comando **Imprimir / Guardar PDF** del navegador; incorpora los datos del PDF aportado, incluyendo Erasmus en Aveiro, cursos Udemy, idiomas y competencias. Incluye descarga del PDF original.
- CTA de CV en portada, sección «Sobre mí» y contacto. Accesibilidad básica del modal (Escape, foco, click exterior).

## Novedades Emerald Motion V2.5

- **Proyectos inmersivos:** cada tarjeta abre un caso de estudio dentro de un diálogo navegable por teclado, usando únicamente datos confirmados. Las ilustraciones siguen siendo conceptuales hasta recibir capturas reales.
- **Terminal interactiva simulada:** `help`, `about`, `skills`, `projects`, `experience`, `contact`, `cv` y `clear`; historial con flechas arriba/abajo, sin ejecución de comandos reales.
- **Stack tecnológico espacial:** nube interactiva de tecnologías organizada por categorías y vínculos con proyectos cuando están confirmados; efecto visual CSS 3D, sin WebGL adicional.
- **Trayectoria animada:** barra de progreso al recorrer la sección, conservando el timeline y sus detalles desplegables.
- **Microinteracciones premium:** efectos luminosos, estados hover/focus y nuevos diálogos, limitados si el dispositivo solicita movimiento reducido.
- **Recruiter View:** resumen directo con Erasmus, AidRelease, tecnologías, disponibilidad, CV original, contacto, GitHub y LinkedIn.

### Datos y medios

- CV real: `public/CV_Carlos_Soto_Torres.pdf` (copia exacta del archivo proporcionado por el usuario).
- Nombre: **Carlos Soto Torres**.
- Correo: **sototorrescarlos@gmail.com**.
- Sin fechas de comienzo/fin del Grado ni arquitectura inventada de ExamForge.
- Faltan capturas reales, demos y enlaces a los repositorios de proyectos.

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

`npm test` ejecuta comprobaciones de sintaxis TSX, parseo CSS, presencia de secciones, controles de accesibilidad y opciones de animación. No sustituye una revisión visual ni pruebas end-to-end. **Para el build completo necesitas instalar dependencias mediante `npm install`.** En este entorno el registro npm no estuvo disponible y no se ha certificado el build completo.

## Personalización

- `src/App.tsx`: textos en español e inglés, enlaces, datos y componentes interactivos.
- `src/emerald.css`: diseño V2, estilos de ambos temas, efectos y responsive.
- `src/styles.css`: estilos originales de la V1 conservados como base.
- `src/profile.css`: diseño e impresión del CV, pestañas y efectos nuevos.
- `src/main.tsx`: imports de los tres estilos.
- El PDF original está en `public/CV_Carlos_Soto_Torres.pdf` y se descarga desde el modal de CV. Sustitúyelo allí si actualizas tu currículum.

Para configurar repositorios reales, sustituye los avisos de «próximamente» cuando estén públicos. El correo de contacto está verificado por el usuario. No se ha inventado experiencia profesional, fechas de estudios, certificaciones ni métricas.

## Tecnología

React 18, TypeScript, Vite, CSS, Canvas 2D con proyección 3D. El planeta usa un bucle `requestAnimationFrame` de dibujo de esfera, sin servicio ni conexión externos. El renderizado se reduce en pantallas pequeñas mediante CSS y puede pausarse/ajustarse para hardware modesto.

## Actualizar sin publicar en main

1. Descomprime el ZIP en una carpeta de trabajo o copia sus archivos en una rama creada desde la versión actual de tu repositorio.
2. Ejecuta `npm install`, `npm test`, `npm run build`, `npm run dev`.
3. Revisa el diseño en móvil, ambos idiomas, ambos temas, el diálogo del CV y la impresión.
4. Abre un pull request a `main` solo cuando estés conforme. **Este paquete no realiza commits ni despliegues.**

## Publicación

Vercel o Netlify: comando `npm run build`, directorio de salida `dist`. Para GitHub Pages configura `base` si publicas bajo una ruta de repositorio.

## Pendiente de contenido

Fechas exactas de estudios, imagen profesional, capturas reales de ExamForge, enlaces públicos a repositorios y contribución concreta al hackatón.


### Contacto
La sección de contacto incluye el correo `sototorrescarlos@gmail.com` mediante enlace `mailto:`.


## V2.4 — International experience and AidRelease case study

- Erasmus at Universidade de Aveiro: September 2024–July 2025.
- HackMeridian 2026: AidRelease, Rust/Soroban smart contract, fund custody, milestone-based disbursements and refunds.
- 69 automated tests and verified Stellar Testnet transactions (reported project results).
- Interactive expandable timeline and project cases in Spanish and English.
- ExamForge details and external repository URLs remain intentionally pending.
- No production deployment or GitHub changes included.


## Revisión sin publicar en main

Esta entrega no cambia ninguna rama remota. Para preparar la revisión tras verificar los comandos anteriores:

```bash
git checkout -b feature/emerald-motion-v2.5
git add .
git commit -m "feat: immersive portfolio v2.5"
git push -u origin feature/emerald-motion-v2.5
```

Crea un Pull Request de la rama hacia `main` y utiliza la preview de Vercel antes de fusionar. Evita ejecutar `git push origin main` hasta aprobar los cambios.

**Validación en el entorno de entrega:** las pruebas de estructura y sintaxis se ejecutaron mediante TypeScript y PostCSS disponibles localmente. No se pudo completar `npm install`/`npm run build` por falta de dependencias React en la caché npm. Esta validación no sustituye una compilación ni comprobaciones visuales reales.

## Hero técnica (ajuste de presentación)

Se ha sustituido el descriptor y el texto inicial en español e inglés por la presentación técnica de Carlos Soto Torres, sin la palabra «estudiante» en la portada. Se ha corregido el layout de `.hero-bottom` para evitar que el párrafo se estreche por los botones. No se modificaron otras secciones, CV o proyectos.


## Emerald Motion V2.6 — Draft for review

- Expanded project case studies with an evidence-based AidRelease architecture diagram; other project architecture is explicitly pending verification.
- Public GitHub repository explorer using the GitHub public REST API. It shows only real public, non-fork, non-archived repos and handles API errors/empty responses.
- SEO: title, description, Open Graph summary and Twitter card (no fabricated canonical URL).
- Accessibility: skip-to-content link, labeled flow, responsive cards, reduced-motion styles.
- No changes to the original CV, languages, recruiter view, terminal, theme toggle or 3D planet.

### Local verification and PR workflow

```bash
npm ci
npm test
npm run build
npm run dev
```

These are required on a machine with npm registry access. Syntax and static tests have passed locally, but a full production build cannot be confirmed in the restricted build environment. Do not merge without a successful build and browser review.

To apply to your existing GitHub clone, create `feature/emerald-motion-v2.6` from an up-to-date `main`, copy the delivered project files into the clone without replacing `.git`, run the commands above, then commit/push the feature branch. Open a PR into `main` and review the Vercel preview before merging.

**Note:** Live GitHub repository data depends on the visitor's access to GitHub's public API and its rate limits. The interface has error and empty states.


## Workflow for reviewing V2.7 in a separate directory

This ZIP is a **standalone copy**, not a Git clone. Unzip it anywhere outside your clean published repository.

```powershell
npm install
npm test
npm run build
npm run dev
```

Once the full build and browser checks pass, copy only project files into your clean Git clone on a new feature branch. **Do not copy `.git` or `node_modules`**. Do not force-push. No code is published automatically.

## V2.7 changes

See [CHANGELOG.md](CHANGELOG.md). The GitHub gallery uses only public data available through GitHub's API and may be empty or unavailable due to API errors. Case-study images are conceptual until authentic screenshots are supplied.
