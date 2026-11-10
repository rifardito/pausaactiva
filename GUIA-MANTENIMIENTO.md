# Guía de mantenimiento · Web de Pausa Activa

Esta web está hecha **solo con HTML, CSS y JavaScript**. No hay que instalar nada, no hay que compilar y no depende de Astro.

Son 4 páginas HTML que comparten una hoja de estilos y un archivo de JavaScript:

| Archivo | Para qué sirve |
| --- | --- |
| `index.html` | La página principal (toda la información). |
| `aviso-legal/index.html` | Aviso legal. |
| `privacidad/index.html` | Política de privacidad. |
| `404.html` | Página que aparece cuando una dirección no existe. |
| `css/estilos.css` | Todos los estilos y colores. |
| `js/app.js` | Los botones A / A+ / A++ del tamaño de letra. |
| `img/` | Logo, iconos y fotos. |
| `fonts/` | Tipografía Atkinson Hyperlegible (no tocar). |
| `CNAME` | Dominio `pausaactiva.es` para GitHub Pages (no borrar). |
| `.nojekyll` | Archivo vacío necesario para GitHub Pages (no borrar). |

> **Importante:** los nombres de las clases (`class="..."`) vienen del diseño original. No hace falta entenderlos para cambiar textos, precios o teléfonos. Solo hay que respetarlos.

---

## 1. Cómo ver la web en tu ordenador

La web está pensada para publicarse en `https://pausaactiva.es`, en la raíz del dominio. Por eso las rutas de los archivos empiezan por `/` (`/css/estilos.css`, `/img/logo.png`).

**No abras `index.html` haciendo doble clic**: el navegador lo abrirá como un archivo suelto y no encontrará los estilos. Se verá “en blanco y negro”.

Para verla bien en local, la forma más sencilla es **Visual Studio Code + Live Server**:

1. Descarga e instala [Visual Studio Code](https://code.visualstudio.com/).
2. Abre la carpeta del proyecto (Archivo → Abrir carpeta).
3. Instala la extensión **Live Server** (icono de extensiones, buscar “Live Server”, Instalar).
4. Haz clic derecho sobre `index.html` → **Open with Live Server**.
5. Se abrirá en el navegador en una dirección parecida a `http://127.0.0.1:5500/`.

Cada vez que guardes un archivo, Live Server recarga la página automáticamente.

> Si no quieres instalar nada: publica el cambio en GitHub (apartado 3) y espera 1-2 minutos. La web real es la mejor prueba.

---

## 2. Cómo está organizada la página principal

Dentro de `index.html` hay comentarios que marcan cada zona. Búscalos con `Ctrl+F`:

- `CABECERA`: logo, menú, botones A / A+ / A++ y teléfono.
- `PORTADA`: titular grande, botones de llamada/WhatsApp y foto.
- `FRANJA DE CONFIANZA`: Logroño, a domicilio, equipo titulado.
- `SERVICIOS`: las 3 líneas y los precios.
- `POR QUÉ PAUSA ACTIVA`
- `PROPÓSITO`
- `MÉTODO DE TRABAJO`
- `QUIÉNES SOMOS`: Valentina e Idoia.
- `DÓNDE ESTAMOS`: dirección, horario y mapa.
- `CONTACTO`: teléfono, WhatsApp, correo y redes.
- `PIE DE PÁGINA`

La cabecera y el pie están **repetidos en las 4 páginas**. Si cambias un teléfono o un enlace del menú, cámbialo también en `aviso-legal/index.html`, `privacidad/index.html` y `404.html`.

---

## 3. Cómo publicar un cambio

### Opción fácil: desde GitHub, sin instalar nada

1. Entra en el repositorio en GitHub.
2. Abre el archivo que quieres cambiar (por ejemplo `index.html`).
3. Pulsa el lápiz (**Edit this file**).
4. Haz el cambio.
5. Abajo, escribe un resumen (por ejemplo “Actualizo el teléfono”) y pulsa **Commit changes**.
6. GitHub Pages tarda entre 1 y 2 minutos en publicarlo.
7. Recarga `https://pausaactiva.es` con `Ctrl+F5` para verlo sin caché.

### Opción con Visual Studio Code

1. Haz el cambio y guarda.
2. En la pestaña **Source Control** (icono de ramas), escribe un mensaje y pulsa **Commit**.
3. Pulsa **Sync Changes** / **Push**.

### Subir fotos desde GitHub

1. Entra en la carpeta `img`.
2. **Add file → Upload files**.
3. Arrastra la foto y confirma con **Commit changes**.
4. Después edita el HTML para que apunte a esa foto.

---

## 4. Cambiar textos

1. Abre `index.html` (o la página correspondiente).
2. Busca el texto que quieres cambiar con `Ctrl+F`.
3. Cambia **solo lo que está entre `>` y `<`**. No borres etiquetas ni atributos.

Ejemplo correcto:

```html
<!-- Antes -->
<p class="...">Atendemos en Logroño y alrededores.</p>

<!-- Después -->
<p class="...">Atendemos en Logroño, Oyón y alrededores.</p>
```

Ejemplo **incorrecto** (rompe el diseño):

```html
<p class="...">Atendemos en Logroño y alrededores.
```

Consejos:

- Mantén las tildes y las eñes. Guarda siempre en **UTF-8** (VS Code lo hace por defecto).
- No cambies los `id` (`id="servicios"`, `id="contacto"`…): el menú y los enlaces dependen de ellos.
- No inventes clases nuevas de Tailwind (`class="bg-red-500"`): solo funcionan las clases que ya existen en `css/estilos.css`. Para algo nuevo, reutiliza una clase de un bloque parecido.
- Si necesitas un estilo nuevo de verdad, añade CSS normal al final de `css/estilos.css`:

```css
.mi-texto-destacado {
  color: #334b1c;
  font-weight: 700;
}
```

Y úsalo así: `<span class="mi-texto-destacado">...</span>`.

---

## 5. Cambiar teléfono, WhatsApp y correo

Los datos aparecen en varios sitios y en **tres formatos distintos**. Lo más seguro es usar **Buscar y reemplazar en todo el proyecto** (`Ctrl+Shift+H` en VS Code).

| Qué cambiar | Busca exactamente | Dónde aparece |
| --- | --- | --- |
| Teléfono visible | `648 17 36 62` | Cabecera, portada, contacto y pie. |
| Enlace de llamada | `+34648173662` | `href="tel:+34648173662"` y datos para Google (JSON-LD). |
| Móvil / WhatsApp visible | `641 81 78 21` | Sección de contacto. |
| Enlace de WhatsApp | `34641817821` | `https://wa.me/34641817821?...` y datos para Google. |
| Correo | `pausaactiva.espacio@gmail.com` | Contacto, pie, aviso legal y privacidad. |
| Dirección | `Calle Miguel Villanueva, 6, 2º-4` | Sección “Dónde estamos”, pie y datos para Google. |
| Código postal | `26001 Logroño` | Dirección y mapa. |
| Horario oficina | `9:00 a 15:00` | Sección “Dónde estamos” y pie. |
| Horario teléfono | `9:00 a 20:00` | Portada, contacto y pie. |
| Instagram | `pausaactiva.espacio` | Contacto y pie. |

### Reglas para que los enlaces funcionen

- **Llamada:** `href="tel:+34648173662"` (sin espacios y con `+34`).
- **WhatsApp:** `https://wa.me/34641817821` (sin `+`, sin espacios y sin guiones).
- **Correo:** `href="mailto:pausaactiva.espacio@gmail.com"`.
- El número que se ve en pantalla puede llevar espacios (`648 17 36 62`), pero el del enlace no.

### Datos para Google (JSON-LD)

En el `<head>` de cada página hay un bloque `<script type="application/ld+json">` con el teléfono, el correo y la dirección. **No lo borres**: es lo que usan Google y otros buscadores. Si cambias un dato de contacto, cámbialo también ahí (el formato es `"telephone": "+34648173662"`).

---

## 6. Cambiar precios

Todos los precios están en la sección `SERVICIOS` de `index.html`. Busca el símbolo `€`.

Ahora mismo hay estos importes:

- `30 € a domicilio`
- `25 € en el espacio`
- `Pack 100 €/mes`
- `40 € / sesión`
- `Desde 10 €`
- `De 12 € a 15 €`
- `15 € / hora`
- `+20 € a más de 15 km`

Cambia solo el número (y el texto si hace falta). Mantén la frase:

```html
Precios orientativos. Llámanos y te lo explicamos sin compromiso.
```

Es importante que sigan siendo **orientativos**: así no se convierte en una oferta contractual cerrada.

---

## 7. Cambiar o añadir fotos

### Foto de la portada

En `index.html`, busca `FOTO PENDIENTE`. Ahora hay un hueco con el logo. Cuando tengas la foto:

1. Guarda la foto en `img/` con un nombre sin espacios ni tildes, por ejemplo `hero.jpg`.
2. Recomendado: vertical, unos 1200 × 1500 píxeles, formato JPG o WebP.
3. Sustituye este bloque que hay dentro de `.photo-frame`:

```html
<img
  src="/img/logo.png"
  alt=""
  width="627"
  height="627"
  class="relative w-52 sm:w-60"
/>
```

Por este:

```html
<img
  src="/img/hero.jpg"
  alt="Valentina acompañando a una persona mayor en su domicilio"
  class="absolute inset-0 h-full w-full object-cover"
/>
```

4. Borra el comentario que empieza por `FOTO PENDIENTE`.

El `alt` debe describir la foto de forma breve y real. Si la foto es solo decorativa, se puede dejar `alt=""`.

> En pantallas grandes, el hueco de la foto mide entre 400 y 480 px de alto y se adapta a la altura de la ventana (`#inicio .photo-frame` en `css/estilos.css`). Así la portada cabe entera en la primera pantalla y no corta el texto de abajo. Si la foto queda muy recortada, cambia esos números.

### Otras fotos

Para añadir una foto en cualquier sección, copia la estructura de una imagen existente y cambia `src` y `alt`:

```html
<img src="/img/nombre-de-la-foto.jpg" alt="Descripción de la foto" class="..." />
```

- El nombre del archivo debe coincidir **exactamente** (mayúsculas incluidas).
- En GitHub Pages las mayúsculas importan: `Foto.JPG` y `foto.jpg` no son lo mismo.
- No subas fotos de varios MB: intenta que no pasen de 300-500 KB.
- No uses fotos de personas sin su permiso.

### Logo

El logo actual es `img/logo.png` y se usa en la cabecera y en el pie. Para cambiarlo, lo más fácil es **sobrescribir `img/logo.png` con otro PNG cuadrado de al menos 512 × 512 px**, manteniendo el mismo nombre.

Los iconos de la pestaña del navegador son `img/icon-192.png`, `img/icon-512.png` y `img/apple-touch-icon.png`. Si cambia el logo, conviene actualizarlos también.

### Nombre “Pausa Activa” con la fuente Funny Dreams

La fuente Funny Dreams no se puede instalar en la web: la licencia de Canva solo permite usarla dentro de los diseños exportados. Por eso el nombre de la cabecera y del pie es **una imagen PNG transparente** exportada desde Canva, no texto.

Hay dos versiones, ya colocadas en las 4 páginas:

| Archivo | Color | Dónde se usa |
| --- | --- | --- |
| `img/logo-pausa-activa.png` | Oliva (`#334b1c`) | Cabecera, sobre fondo crema. |
| `img/logo-pausa-activa-claro.png` | Crema (`#f1f4e2`) | Pie de página, sobre fondo oliva. |

En la cabecera se ve así:

```html
<img
  src="/img/logo-pausa-activa.png"
  alt=""
  width="712"
  height="167"
  class="logo-wordmark"
/>
```

El `alt` va vacío porque el enlace que lo contiene ya tiene `aria-label="Pausa Activa · Ir al inicio"`. Así el lector de pantalla no repite el nombre.

El tamaño lo manda la clase `.logo-wordmark` de `css/estilos.css`: 40 px de alto en móvil, 48 px entre 640 y 1023 px y 56 px a partir de 1024 px. Está en píxeles fijos a propósito, para que los botones A / A+ / A++ no rompan la cabecera. En móviles de menos de 360 px baja a 32 px para que quepa todo con el texto en A++.

El símbolo redondo (la imagen cuadrada) se ajusta con las clases `.header-mark` en la cabecera y `.footer-mark` en el pie, también en `css/estilos.css`: 46 px, 50 px y 56 px. Antes llevaba las clases `h-11 w-11` de Tailwind en el HTML, pero esas ganaban siempre y no dejaban cambiar el tamaño desde el CSS, así que se quitaron.

> Ojo: no vuelvas a poner `h-11 w-11` (ni `h-*` / `w-*`) a esas dos imágenes. Si lo haces, el tamaño del CSS se ignorará otra vez.

> En pantallas de menos de 420 px se oculta el símbolo cuadrado (`.header-mark`) y queda solo el nombre, para que quepa todo sin solaparse.

> Con el nombre grande, el menú de navegación (Servicios, Nosotras…) solo se muestra a partir de 1280 px de ancho. Por debajo se quedan el teléfono y los botones A / A+ / A++, que es lo importante en un móvil o en un portátil pequeño. La regla está al final de `css/estilos.css`, fuera de las capas, porque así gana a las utilidades de Tailwind. En esa misma zona se juntan un poco los enlaces del menú (`gap: 1.25rem`) para que quepan con el logo grande y el texto en A++.

**Si algún día cambia el nombre o la tipografía:**

1. Exporta de Canva el nombre con **fondo transparente** y buena resolución (unos 1400 px de ancho).
2. Guarda el archivo con el mismo nombre (`logo-pausa-activa.png` y `logo-pausa-activa-claro.png`). Así no hay que tocar el HTML.
3. Si la nueva imagen tiene otra proporción, actualiza los números de `width` y `height` del `<img>` en las 4 páginas (cabecera y pie).
4. Recarga y comprueba que se ve bien en móvil y en ordenador.

> El SVG que entrega Canva no sirve para la web: es un archivo enorme (741 KB) que en realidad contiene imágenes incrustadas, no dibujos vectoriales. Para la web se usan siempre PNG.


---

## 8. Cambiar colores

Los colores están al principio de `css/estilos.css`, dentro de `:root`. Busca `--color-cream`.

| Variable | Color actual | Uso |
| --- | --- | --- |
| `--color-cream` | `#f1f4e2` | Fondo principal. |
| `--color-cream-soft` | `#fafbf4` | Fondo de secciones alternas. |
| `--color-olive` | `#334b1c` | Texto y titulares. |
| `--color-olive-deep` | `#26380f` | Fondo de la sección de contacto. |
| `--color-sage` | `#67917d` | Detalles. |
| `--color-sage-deep` | `#4a6b58` | Texto secundario. |
| `--color-peach` | `#fecb9e` | Detalles cálidos. |
| `--color-wa` | `#146c43` | Botón de WhatsApp. |
| `--color-wa-deep` | `#0f5535` | WhatsApp al pasar el ratón. |

Cambia solo el valor hexadecimal y guarda. Los cambios se aplican en toda la web.

Hay un color suelto en el pie: busca `#1f2f0c` si quieres cambiarlo.

> Al cambiar colores, comprueba que el texto se sigue leyendo bien. La web está pensada para personas mayores: mejor mucho contraste. Evita grises claros sobre fondo crema.

---

## 9. El tamaño de letra (A / A+ / A++)

Los botones cambian el tamaño de toda la página al **100 %, 112,5 % o 125 %** y recuerdan la elección en ese navegador.

- La lógica está en `js/app.js`.
- Además, cada HTML tiene un **mini-script en el `<head>`** que aplica el tamaño guardado antes de dibujar la página, para que no parpadee. **No lo borres.**
- Si algún día cambias los porcentajes, cámbialos en **los dos sitios**: en `js/app.js` y en el mini-script de los 4 HTML.
- La elección se guarda en `localStorage` con la clave `pa-text-size`.

---

## 10. Añadir o quitar secciones

Para duplicar una sección, copia un bloque completo que empiece por `<section` y termine en `</section>`, pégalo donde quieras y:

1. Cámbiale el `id` si va a ser un destino del menú (por ejemplo `id="talleres"`).
2. Cambia los textos.
3. Reutiliza las clases del bloque original.
4. Respeta la jerarquía: **un solo `<h1>` por página** (el de la portada); el resto son `<h2>` y `<h3>`.
5. Si añades un enlace al menú, cámbialo en las 4 páginas.

Si quitas una sección, comprueba que ningún enlace del menú apunte a su `id`.

---

## 11. Datos legales y privacidad

- El **aviso legal** está en `aviso-legal/index.html`.
- La **política de privacidad** está en `privacidad/index.html`.

Si cambia el titular, el NIF, la dirección fiscal o el correo, actualízalo en esas páginas. Ahora mismo aparecen:

- Titular: Valentina Paulette Ruiz-Clavijo Werner.
- NIF: `16651547F`.
- Dirección fiscal: Av. Pérez Galdós 58, 2º A, 26002 Logroño.

La web **no usa cookies de análisis ni publicidad**, por eso no hay banner de cookies. Si algún día añades Google Analytics, un formulario, un chat o una herramienta que instale cookies, avisa antes: habría que actualizar la privacidad y probablemente añadir un aviso de cookies.

---

## 12. Publicar en GitHub Pages y conectar el dominio

Si el repositorio y el dominio ya están configurados, no hace falta repetir esto. Queda aquí como referencia.

### Primera publicación

1. Crea un repositorio **público** en GitHub (por ejemplo `pausaactiva-web`).
2. Sube todos los archivos de esta carpeta a la raíz del repositorio.
3. En el repositorio: **Settings → Pages**.
4. En **Source**, elige **Deploy from a branch**.
5. Branch: `master` (o `main`, el que uses). Folder: `/ (root)`. Pulsa **Save**.
6. En **Custom domain**, escribe `pausaactiva.es` y pulsa **Save**.
7. Cuando el dominio empiece a funcionar, activa **Enforce HTTPS**.

### DNS del dominio

En el panel donde compraste `pausaactiva.es`, configura:

- Para el dominio sin `www` (apex): 4 registros **A** que apunten a:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Para `www`: un registro **CNAME** que apunte a `TUUSUARIO.github.io`.

Los cambios de DNS pueden tardar desde unos minutos hasta 24-48 horas.

### Muy importante durante las pruebas

La web usa rutas absolutas (`/css/...`, `/img/...`) porque está pensada para `https://pausaactiva.es`. En la dirección provisional de GitHub (`https://TUUSUARIO.github.io/pausaactiva-web/`) **se verá sin estilos**: no es un error de la web, es que las rutas apuntan a la raíz del dominio. Para probarla antes de que el dominio esté listo, usa Live Server en tu ordenador.

No borres:

- `CNAME` (contiene `pausaactiva.es`).
- `.nojekyll` (aunque esté vacío).

---

## 13. Copias de seguridad y versión anterior en Astro

La versión anterior, hecha con Astro, **no se ha borrado**. Está guardada de tres formas:

1. En el escritorio: `PausaActiva-Astro-backup-2026-11-05.zip`.
2. En Git, en la rama `astro-original`.
3. En Git, en la etiqueta `astro-v1`.

Para recuperarla desde el zip: descomprímela, abre una terminal en la carpeta y ejecuta:

```bash
npm install
npm run dev
```

Para verla desde Git (sin tocar la web actual):

```bash
git checkout astro-original
npm install
npm run dev
```

Para volver a la web estática:

```bash
git checkout master
```

> No borres la rama `astro-original` ni la etiqueta `astro-v1` si quieres conservar esa versión.

Haz también una copia de seguridad de vez en cuando desde GitHub: **Code → Download ZIP**.

---

## 14. Problemas frecuentes

| Problema | Causa probable | Solución |
| --- | --- | --- |
| Se ve sin colores ni estilos | Has abierto `index.html` con doble clic, o estás en la URL provisional `usuario.github.io/repo/`. | Usa Live Server o espera al dominio `pausaactiva.es`. |
| No veo el cambio que acabo de subir | GitHub Pages tarda 1-2 minutos y el navegador guarda caché. | Espera, recarga con `Ctrl+F5` y comprueba el último commit. |
| Una foto no aparece | Nombre distinto, mayúsculas, o no está en `img/`. | Revisa `src` y el nombre exacto del archivo. |
| Las tildes se ven raras | El archivo se guardó con otra codificación. | Guarda en UTF-8. |
| El botón A+ no hace nada | Falta `js/app.js` o la ruta está mal. | Comprueba que existe y que el HTML carga `/js/app.js`. |
| El enlace de llamada no funciona | Formato incorrecto. | Debe ser `tel:+34648173662`, sin espacios. |
| WhatsApp no abre | Formato incorrecto. | Debe ser `https://wa.me/34641817821`, sin `+` ni espacios. |
| Sale la página 404 | El archivo no está donde toca o el nombre no coincide. | En GitHub Pages las mayúsculas importan. Los índices deben llamarse `index.html`. |
| El dominio no carga | DNS todavía propagando o Pages mal configurado. | Revisa Settings → Pages, el archivo `CNAME` y espera. |
| El mapa no carga | El iframe de Google Maps no responde. | Comprueba que hay internet y que el `src` del iframe no se ha tocado. |

---

## 15. Antes de publicar: lista rápida

- [ ] El teléfono y el WhatsApp funcionan en el móvil.
- [ ] Los precios están actualizados.
- [ ] La foto de portada está puesta y tiene un `alt` correcto.
- [ ] El aviso legal y la privacidad tienen los datos correctos.
- [ ] He probado A, A+ y A++ y se lee bien todo.
- [ ] He probado en móvil y en ordenador.
- [ ] No hay textos de prueba ni huecos de “FOTO PENDIENTE”.
- [ ] La web cargada no muestra errores en la consola del navegador.

---

## 16. Qué no tocar si no estás seguro

- Los nombres de las clases (`class="..."`).
- Los `id` de las secciones.
- El bloque `<script type="application/ld+json">` del `<head>` (datos para Google). Solo actualiza teléfono, correo y dirección si cambian.
- `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`.
- La carpeta `fonts/`.
- El mini-script del `<head>` que recuerda el tamaño de letra.

Si algo se rompe, no entres en pánico: la versión anterior está en Git. Se puede deshacer el último cambio desde GitHub o volver a una copia del zip.
