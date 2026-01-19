import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind3,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
  ],
  theme: {
    colors: {
      // FlowFuse brand colors - will be refined during migration
      'ff-red': {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
      },
      'ff-blue': {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
    },
  },
  shortcuts: {
    'btn': 'px-4 py-2 rounded-lg font-medium transition-colors',
    'btn-primary': 'btn bg-ff-red-600 text-white hover:bg-ff-red-700',
    'btn-secondary': 'btn bg-ff-blue-600 text-white hover:bg-ff-blue-700',
    'container-page': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },
})
