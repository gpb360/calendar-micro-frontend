import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: 'src/your-org-root-config.js',
      output: {
        format: 'system',
        entryFileNames: 'your-org-root-config.js',
      },
      external: [
        'single-spa',
        'single-spa-react',
        '@your-org/calendar-app',
        '@your-org/shared-ui',
        '@your-org/state-management',
      ],
    },
    target: 'esnext',
    minify: false,
    outDir: './dist',
  },
  server: {
    port: 9000,
    cors: true,
    open: '/index.html',
  },
  preview: {
    port: 9000,
  },
  plugins: [
    {
      name: 'generate-import-map',
      transformIndexHtml(html) {
        const importMap = {
          imports: {
            '@your-org/root-config': 'http://localhost//your-org-root-config.js',
            '@your-org/calendar-app': 'http://localhost/calendar-app.system.js',
            '@your-org/shared-ui': 'http://localhost/shared-ui.system.js',
            '@your-org/state-management': 'http://localhost/state-management.system.js',
            react: 'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js',
            'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js',
            'single-spa-react':
              'https://cdn.jsdelivr.net/npm/single-spa-react@6.0.1/lib/system/single-spa-react.min.js',
            'single-spa': 'https://cdn.jsdelivr.net/npm/single-spa@6.0.1/lib/es2015/system/single-spa.min.js',
          },
        };

        const importMapScript = `
        <script type="systemjs-importmap">${JSON.stringify(importMap, null, 2)}</script>`;

        return html.replace('</head>', `${importMapScript}</head>`);
      },
    },
    {
      name: 'copy-index-html',
      writeBundle() {
        fs.copyFileSync(resolve(__dirname, 'index.html'), resolve(__dirname, 'dist/index.html'));
      },
    },
  ],
});
