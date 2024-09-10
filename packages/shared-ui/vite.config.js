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
      external: ['react', 'react-dom', '@mui/material', 'date-fns'],
      output: {
        format: 'system',
        entryFileNames: 'shared-ui.system.js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
          'date-fns': 'dateFns',
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
