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
  vite: {
    optimizeDeps: {
      exclude: ['@unocss/astro'],
    },
  },
})
