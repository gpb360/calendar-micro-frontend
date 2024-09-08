import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'SharedUI',
      fileName: 'shared-ui.system',
      formats: ['system'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@mui/x-date-pickers', '@emotion/react', '@emotion/styled', 'date-fns'],
      output: {
        format: 'system',
        entryFileNames: 'shared-ui.system.js',
      },
    },
  },
  server: {
    port: 3002,
    host: '0.0.0.0',
    cors: true
  },
})