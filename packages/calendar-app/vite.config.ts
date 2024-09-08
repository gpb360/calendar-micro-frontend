import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    rollupOptions: {
      input: 'src/your-org-calendar-app.tsx',
      preserveEntrySignatures: 'strict',
      output: {
        format: 'system',
        entryFileNames: 'calendar-app.system.js',
      },
      external: [
        'react',
        'react-dom',
        'single-spa',
        'single-spa-react',
        '@your-org/shared-ui',
        '@your-org/state-management',
      ],
    },
  },
  server: {
    port: 3003,
    host: '0.0.0.0',
    cors: true,
  },
  resolve: {
    alias: {
      '@your-org/shared-ui': path.resolve(
        __dirname,
        '../shared-ui/src/index.tsx',
      ),
      '@your-org/state-management': path.resolve(
        __dirname,
        '../state-management/src/index.ts',
      ),
    },
  },
});
