import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // adjust this path if necessary
      name: 'StateManagement',
      fileName: 'state-management.system',
      formats: ['system'],
    },
    rollupOptions: {
      external: ['jotai', 'react'], // add any other external dependencies
      output: {
        format: 'system',
        entryFileNames: 'state-management.system.js',
      },
    },
  },
  server: {
    port: 3001,
  },
})