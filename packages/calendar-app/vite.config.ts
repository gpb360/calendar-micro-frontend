import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@your-org/shared-ui': path.resolve(__dirname, '../shared-ui/src'),
      '@your-org/state-management': path.resolve(__dirname, '../state-management/src'),
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: 'src/your-org-calendar-app.tsx',
      preserveEntrySignatures: 'strict',
      output: {
        format: 'system',
        entryFileNames: 'calendar-app.system.js',
      },

      external: ['react', 'react-dom', '@your-org/shared-ui', '@your-org/state-management', 'single-spa-react'],
    },

    minify: false,
    cssCodeSplit: false,
  },
});
