# Pausa Activa · Web

Web informativa de **Pausa Activa**, empresa de acompañamiento y bienestar para
personas mayores en Logroño.

- **Stack:** Astro 5 + Tailwind CSS 4 (salida 100 % estática)
- **Hosting:** GitHub Pages
- **Dominio:** `pausaactiva.es`
- **Sin cookies, sin analítica, sin backend**

## Requisitos

- Node.js 20 o superior
- npm

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:4321)
npm run build     # compilar a /dist
npm run preview   # previsualizar el resultado compilado
```

## Estructura

```
src/
├─ data/site.ts          ← teléfonos, dirección, redes y datos legales (todo centralizado)
├─ styles/global.css     ← colores de marca, tipografía y estilos base
├─ layouts/Base.astro    ← <head>, SEO, JSON-LD y preferencias de tamaño de texto
├─ components/           ← una sección de la página por componente
└─ pages/
   ├─ index.astro        ← la página principal
   ├─ aviso-legal.astro
   ├─ privacidad.astro
   └─ 404.astro
public/
├─ CNAME                 ← dominio para GitHub Pages
├─ img/                  ← logo, favicons e imagen para redes
└─ robots.txt / sitemap.xml
```

## Cambiar datos de contacto

Todo está en `src/data/site.ts`: teléfonos, WhatsApp, email, dirección, horarios,
redes sociales y datos legales. Cambiar ahí y volver a compilar.

## Añadir las fotos

1. Guardar la foto en `public/img/` (por ejemplo `hero.jpg`, 1600×900).
2. En `src/components/Hero.astro`, sustituir el bloque marcado como
   `FOTO PENDIENTE` por:

```html
<img
  src="/img/hero.jpg"
  alt="Descripción de la foto"
  class="h-full w-full object-cover"
  width="1600"
  height="900"
  loading="eager"
  fetchpriority="high"
/>
```

## Regenerar logo, favicons e imagen social

```bash
node scripts/generate-assets.mjs
```

## Despliegue en GitHub Pages

1. Crear un repositorio **público** en GitHub y subir este proyecto a `master`.
2. En el repositorio: **Settings → Pages → Source: GitHub Actions**.
3. Cada push a `master` compila y publica automáticamente
   (`.github/workflows/deploy.yml`).
4. Configurar el dominio en el registrador:
   - `A @ → 185.199.108.153`
   - `A @ → 185.199.109.153`
   - `A @ → 185.199.110.153`
   - `A @ → 185.199.111.153`
   - `CNAME www → <usuario>.github.io`
5. En **Settings → Pages**: escribir `pausaactiva.es` como custom domain y activar
   **Enforce HTTPS**.

> El archivo `public/CNAME` ya contiene el dominio.

## Pendiente antes de publicar

- [ ] Fotos definitivas de la clienta (hero + secciones + espacio).
- [ ] PDF del folleto (añadir en `public/` y enlazarlo en Contacto).
- [ ] Confirmar si se publica el domicilio fiscal en el aviso legal.
- [ ] Revisar textos con Valentina e Idoia.
