import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/your-org-root-config.ts',
      output: {
        format: 'system',
        entryFileNames: 'your-org-root-config.js',
      },
    },
    target: 'esnext',
    minify: false,
    outDir: 'dist',
  },
  server: {
    port: 9000,
    cors: true,
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
                "@your-org/state-management": "//localhost:3001/state-management.system.js"
              }
            }
          </script>
          </head>`
        );
      },
    },
  ],
})