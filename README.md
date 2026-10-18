# portfolio_october2026

Portfolio web profesional de Camilo Morales, diseñador gráfico, diseñador editorial y creador de identidad visual.

## Estructura del proyecto

- `index.html`: página principal.
- `01_assets/01_img/`: imágenes del proyecto.
  - `01_templates/`: referencias visuales de diseño. Nunca se presentan como trabajos propios.
  - `02_profile/`: fotografía de perfil.
  - `03_gallery/`: recursos opcionales para trabajos (proyectos seleccionados).
- `01_assets/02_css/style.css`: hojas de estilo propias.
- `01_assets/03_js/script.js`: único script propio (sincroniza el estado del menú móvil y lo cierra al pulsar un enlace).
- `sitemap.xml` y `robots.txt`: configuración básica de SEO para la publicación.
- `AGENTS.md`: instrucciones del proyecto.
- `.opencode/agents/`: definición del agente de diseño y desarrollo.

## Tecnologías

HTML5 semántico, CSS3 y JavaScript (incluido en el bundle de Bootstrap). Bootstrap 6 se carga desde su CDN oficial; los estilos propios se cargan después para poder sobrescribir lo necesario.

## Interfaz y dirección de arte

La interfaz se ha construido a partir de la referencia visual de `01_assets/01_img/01_templates/`. De ella se tomaron la paleta y los recursos tipográficos y de composición, siempre sin presentar la referencia como trabajo propio:

- Paleta muestreada de la propia imagen de referencia: papel cálido `#fefdfc`, tinta `#010101`, naranja de acento `#f97900` (en texto pequeño sobre claro se usa `#9a4a00`, con contraste AA) y crema `#fff8ec` para superficies.
- Tipografías: `Archivo` (titulares en mayúsculas y texto) e `Instrument Serif` en cursiva para los acentos, ambas verificadas en Google Fonts.
- Composición: titular de gran escala, retrato centrado sobre un halo cálido, secciones numeradas del 01 al 05, filetes finos, píldoras para botones y etiquetas, y tarjetas de imagen con esquinas redondeadas.
- El retrato se muestra enmarcado (no recortado) porque la fotografía disponible no es un recorte con fondo transparente.

## Publicación y mantenimiento

El sitio es una página estática, sin framework ni proceso de compilación. Para publicar, basta con subir el contenido de la raíz a un servidor web estático (por ejemplo, GitHub Pages o cualquier otro hosting estático).

Antes de publicar, comprueba:

- Que las rutas de `index.html`, `01_assets/02_css/style.css` y la fotografía de perfil son correctas.
- Que el dominio usado en `sitemap.xml`, `robots.txt` y los metadatos Open Graph coincide con el dominio real de la publicación.
- Que no quedan datos pendientes marcados como disponibles.

## Contenido

La página recoge la información profesional disponible: perfil, áreas de trabajo, proyectos seleccionados, experiencia y herramientas, formación e idiomas, y contacto. Los proyectos seleccionados muestran los trabajos más relevantes, y la sección de contacto incluye el correo, el teléfono y los perfiles profesionales facilitados.

## Elementos pendientes

- Dominio de publicación: la URL base usada en `sitemap.xml`, en los metadatos Open Graph y en el JSON-LD sigue siendo el marcador `https://www.example.com/`; debe sustituirse por el dominio real.
- Peso de las imágenes de los proyectos: son originales de 2200 a 3000 píxeles de ancho (entre 1 y 1,7 MB) y se muestran a unos 560 píxeles de ancho. Conviene exportar versiones reducidas y comprimidas (o servir variantes con `srcset`) para mejorar la carga en móvil. No se ha hecho para no alterar los archivos originales aportados.

## Verificación de Bootstrap

Bootstrap se carga desde el CDN oficial de la versión 6.0.0-alpha.1, con atributos `integrity` y `crossorigin` tal y como indica la documentación oficial: https://getbootstrap.com/docs/6.0/guides/quickstart/

De esa misma versión se verificaron, en la CSS servida por el CDN, los puntos con los que trabaja la interfaz:

- Los puntos de ruptura de Bootstrap 6 son `sm` 576 px, `md` 768 px, `lg` 1024 px, `xl` 1280 px y `2xl` 1536 px. Las hojas propias usan exactamente esos valores (en Bootstrap 5, `lg` era 992 px).
- En Bootstrap 6 el comportamiento `navbar-expand-*` se resuelve con *container queries* sobre el contenedor, no con media queries, por lo que las reglas propias del menú se alinean con `lg` (1024 px).
- El componente `drawer` (diálogo lateral del menú móvil) existe en esta versión y se abre con `data-bs-toggle="drawer"` + `data-bs-target`.

## Pruebas realizadas

- Comprobación del HTML (12 comprobaciones en jsdom): doctype e idioma, metadatos y descripción, Open Graph y Twitter, enlaces de Bootstrap con su SRI exacto, rutas locales existentes, texto alternativo de todas las imágenes, un único `h1` con jerarquía correcta, anclas internas resueltas, atributos de accesibilidad del menú y JSON-LD válido.
- Auditoría de composición en navegador a 375, 414, 768, 1023, 1024, 1100, 1280, 1440 y 1920 píxeles: sin desbordamiento horizontal, sin texto recortado y sin solapamiento entre el titular y el retrato; columnas correctas en cada ancho (áreas, proyectos y experiencia).
- Contraste calculado de la paleta: el texto cumple AA en todos los casos (tinta sobre papel 20,55:1; acento para texto pequeño 6,16:1; naranja sobre negro 7,72:1; etiquetas translúcidas del bloque de contacto 7,79:1) y el indicador de foco supera 3:1 sobre fondo claro (6,16:1) y oscuro (3,33:1).
- Menú móvil: se abre y se cierra, `aria-expanded` se sincroniza con el estado real y el enlace elegido cierra el panel.
- Consola del navegador sin errores en todos los anchos comprobados.
- Las imágenes de los proyectos y el retrato cargan correctamente (se verificaron sus dimensiones naturales y su caja renderizada) y las de los proyectos declaran `width` y `height` para evitar saltos de composición.
- Excepción de contraste documentada: los números de sección (01–05) son decorativos, están marcados con `aria-hidden` y se mantienen tenues igual que en la referencia visual; no aportan información que no esté ya en el título de la sección.
