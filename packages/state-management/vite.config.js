import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'StateManagement',
      fileName: (format) => `state-management.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'jotai'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          jotai: 'jotai',
        },
      },
    },
  },
});
