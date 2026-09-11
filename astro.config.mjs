// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // IMPORTANTE: Reemplaza 'tu-usuario-github' y 'tu-repositorio' con tus datos reales de GitHub
  site: 'https://tu-usuario-github.io',
  base: '/tu-repositorio',
  trailingSlash: 'always',
  output: 'static', // Optimización para carga instantánea y despliegue gratuito
});

