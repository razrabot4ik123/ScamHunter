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
        about: './src/about.html',
        'hunt-create': './src/hunt-create.html',
        hunt: './src/hunt.html',
        main: './src/index.html',
        news: './src/news.html',
        'single-check': './src/single-check.html',
        'single-news': './src/single-news.html',
        'single-scam': './src/single-scam.html',
        'single-shield': './src/single-shield.html',
        success: './src/success.html',
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
