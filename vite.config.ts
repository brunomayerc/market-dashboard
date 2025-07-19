import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import { fileURLToPath, URL } from 'node:url';
import tailwindPostcss from '@tailwindcss/postcss';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindPostcss],
    },
  },
  // @ts-expect-error - Vitest configuration
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
  server: {
    ...(process.env.NODE_ENV === 'development' && {
      https: {
        key: fs.readFileSync('./localhost+2-key.pem'),
        cert: fs.readFileSync('./localhost+2.pem'),
      },
    }),
  },
  base: (() => {
    if (process.env.NODE_ENV === 'development') {
      return '/';
    }
    const basePath = process.env.QA_DEPLOYMENT
      ? `/market-dashboard/pr-${process.env.PR_NUMBER}/`
      : '/market-dashboard/';
    console.log('Vite base path:', basePath); // Log the base path for debugging
    return basePath;
  })(),
});
