// @ts-check
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: 'https://flowfuse.com',
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
  image: {
    // Disable image optimization for content collection images
    service: { entrypoint: 'astro/assets/services/noop' },
  },
  markdown: {
    // Don't process relative images in markdown
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@unocss/astro'],
    },
  },
})
