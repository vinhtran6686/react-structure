// vite.config.js
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  root: './', // project root directory
  base: './src', // base directory
  build: {
    rollupOptions: {
      input: '/src/main.js', // entry point
    },
  },
  server: {
    port: 3000,
  },
  plugins: [reactRefresh(), tsconfigPaths()],
  esbuild: {
   //  jsxInject: `import React from 'react'`,
  },
})
