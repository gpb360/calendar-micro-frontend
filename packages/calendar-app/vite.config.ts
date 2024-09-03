import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/your-org-calendar-app.ts',
      output: {
        format: 'system',
        entryFileNames: 'calendar-app.system.js',
      },
      external: ['react', 'react-dom', 'single-spa-react', '@your-org/shared-ui'],
    },
  },
  server: {
    port: 3003,
  },
  resolve: {
    alias: {
      '@your-org/shared-ui': path.resolve(__dirname, '../shared-ui/src/index.ts'),
      '@your-org/state-management': path.resolve(__dirname, '../state-management/src/index.ts'),
    },
  },
})