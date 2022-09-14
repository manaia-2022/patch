// needs to be .cjs, there is a bug in vite with ESM

/// <reference types="vite/client" />
const react = require('@vitejs/plugin-react')
const { defineConfig } = require('vite')

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
})
