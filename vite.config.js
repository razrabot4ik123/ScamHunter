import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: './src',
  base: '/ScamHunter/',
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
        news: './src/news.html',
        hunt: './src/hunt.html',
        'single-news': './src/single-news.html',
        token: './src/token.html',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  plugins: [injectHTML()],
});
