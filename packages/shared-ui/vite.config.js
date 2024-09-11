import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
    }),
  ],
  build: {
    rollupOptions: {
      input: 'src/index.tsx',
      preserveEntrySignatures: 'strict',
      external: ['react', 'react-dom'],
      output: {
        format: 'system',
        entryFileNames: 'shared-ui.system.js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
      target: 'esnext',
      minify: false,
    },
  },
  server: {
    port: 3002,
    host: '0.0.0.0',
    cors: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
