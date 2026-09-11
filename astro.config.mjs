// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ⚠️ IMPORTANTE: Modifica estas dos líneas con tus datos de GitHub
  site: 'https://permutalibrecol.github.io',
  base: '/centripeta',
  
  // Configuración de optimización estática para carga inmediata
  trailingSlash: 'always',
  output: 'static',
  
  // Compresión automática de código para acelerar el portafolio
  compressHTML: true,
});
