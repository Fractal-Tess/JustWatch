import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      $styles: path.join(__dirname, 'src/styles/index.css'),
      $types: path.join(__dirname, 'src/types/index.ts'),
      $context: path.join(__dirname, 'src/context'),
      $layout: path.join(__dirname, 'src/layout'),
      $routes: path.join(__dirname, 'src/routes'),
      $webtorrent: path.join(__dirname, 'src/webtorrent.min.js')
    }
  },

  publicDir: path.join(__dirname, 'public'),

  server: {
    host: '::',
    port: 3000,
    strictPort: true
  }
});
