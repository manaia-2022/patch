/// <reference types="vitest" />
const react = require('@vitejs/plugin-react')
const { defineConfig } = require('vite')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
})
