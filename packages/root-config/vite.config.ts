import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: 'src/your-org-root-config.js',
      output: {
        format: 'system',
        entryFileNames: 'your-org-root-config.js',
      },
      external: ['single-spa', 'single-spa-react', '@your-org/calendar-app', '@your-org/shared-ui', '@your-org/state-management'],
    },
    target: 'esnext',
    minify: false,
    outDir: './dist',
  },
  server: {
    port: 9000,
    cors: true,
    open: '/index.html'
  },
  preview: {
    port: 9000,
  },
  plugins: [
    {
      name: 'generate-import-map',
      transformIndexHtml(html) {
        return html.replace(
          /<\/head>/,
          `<script type="systemjs-importmap">
  {
    "imports": {
      "@your-org/root-config": "/your-org-root-config.js",
      "@your-org/calendar-app": "//localhost:3003/calendar-app.system.js",
      "@your-org/shared-ui": "//localhost:3002/shared-ui.system.js",
      "@your-org/state-management": "//localhost:3001/state-management.system.js",
      "react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
      "react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js",
      "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js",
      "single-spa-react": "https://cdn.jsdelivr.net/npm/single-spa-react@4.6.1/lib/system/single-spa-react.min.js"
    }
  }
</script>
          </head>`
        );
      },
    },
    {
      name: 'copy-index-html',
      writeBundle() {
        require('fs').copyFileSync(
          resolve(__dirname, 'index.html'),
          resolve(__dirname, 'dist/index.html')
        );
      },
    },
  ],
})