import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@your-org/shared-ui': resolve(__dirname, '../shared-ui/src'),
      '@your-org/state-management': resolve(
        __dirname,
        '../state-management/src',
      ),
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: 'src/index.ts',
      output: {
        format: 'system',
        entryFileNames: 'calendar-app.js',
      },
      preserveEntrySignatures: 'strict',
    },
  },
});
