# Pausa Activa · Web oficial

Web de **Pausa Activa**, espacio de acompañamiento y bienestar para personas mayores en Logroño (La Rioja).

Hecha con **HTML, CSS y JavaScript**, sin frameworks, sin compilación y sin dependencias. Se publica en GitHub Pages con el dominio **https://pausaactiva.es**.

## Ver la web en local

No abras `index.html` con doble clic: las rutas son absolutas y se verá sin estilos. Usa **Visual Studio Code + Live Server**:

1. Abre esta carpeta en VS Code.
2. Clic derecho en `index.html` → **Open with Live Server**.

## Publicar un cambio

1. Edita el archivo (por ejemplo `index.html`).
2. Haz commit y push, o edita directamente desde GitHub y pulsa **Commit changes**.
3. Espera 1-2 minutos y recarga `https://pausaactiva.es` con `Ctrl+F5`.

## Estructura

```text
├─ index.html                  Página principal
├─ aviso-legal/index.html      Aviso legal
├─ privacidad/index.html       Política de privacidad
├─ 404.html                    Página de error
├─ css/estilos.css             Estilos y colores
├─ js/app.js                   Botones A / A+ / A++
├─ img/                        Logo, iconos y fotos
├─ fonts/                      Atkinson Hyperlegible
├─ CNAME                       Dominio pausaactiva.es
├─ robots.txt
├─ sitemap.xml
├─ .nojekyll
├─ GUIA-MANTENIMIENTO.md       Manual paso a paso
└─ README.md
```

## Documentación

Toda la información práctica está en **[GUIA-MANTENIMIENTO.md](GUIA-MANTENIMIENTO.md)**: cómo cambiar textos, teléfonos, precios, fotos, colores, cómo publicar y cómo recuperar la versión anterior en Astro.

## Versión anterior

La versión hecha con Astro se conserva en la rama `astro-original`, en la etiqueta `astro-v1` y en el zip `PausaActiva-Astro-backup-2026-11-05.zip` del escritorio. No se utiliza para publicar.

## Accesibilidad

- Texto grande, alto contraste y tipografía Atkinson Hyperlegible.
- Botones para ampliar el texto al 100 %, 112,5 % y 125 %.
- Navegación por teclado, enlace “Saltar al contenido” y `alt` en las imágenes.
- Sin cookies, sin analítica y sin formularios.
