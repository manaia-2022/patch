// needs to be .cjs, there is a bug in vite with ESM

/// <reference types="vitest" />
/// <reference types="vite/client" />
const react = require('@vitejs/plugin-react')
const { defineConfig } = require('vite')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
  },
})
