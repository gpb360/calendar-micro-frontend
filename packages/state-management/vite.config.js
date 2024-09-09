import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/index.ts',
      output: {
        format: 'system',
        entryFileNames: 'state-management.system.js',
      },
      preserveEntrySignatures: 'strict',
      external: ['react', 'jotai'],
    },
    target: 'esnext',
    minify: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
