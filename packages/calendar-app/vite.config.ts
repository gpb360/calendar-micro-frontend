import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'src/index.tsx',
      output: {
        format: 'system',
        entryFileNames: 'calendar-app.system.js',
      },
      preserveEntrySignatures: 'strict',
      external: ['react', 'react-dom', '@your-org/shared-ui', '@your-org/state-management', 'single-spa-react'],
    },
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
