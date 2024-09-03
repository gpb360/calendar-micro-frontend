// vite.config.js
import { defineConfig } from 'vite'
import * as path from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'src/root-config.js',
      output: {
        entryFileNames: '[name].js',
        format: 'system',
      },
    },
  },
  plugins: [
    {
      name: 'singleSPA',
      resolveId(source) {
        if (source === 'single-spa') {
          return path.resolve(__dirname, 'node_modules/single-spa/lib/system/single-spa.min.js')
        }
      },
    },
  ],
  server: {
    port: 9000,
  },
})
