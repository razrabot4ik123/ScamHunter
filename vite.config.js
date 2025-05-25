import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: './src',
  base: '/scamhunter/',
  server: {
    port: 3000,
    open: true,
  },
  publicDir: './src/assets/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/index.html',
      },
    },
  },
  plugins: [injectHTML()],
});
