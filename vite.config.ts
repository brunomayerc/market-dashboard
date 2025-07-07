import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import tailwindPostcss from '@tailwindcss/postcss';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindPostcss],
    },
  },
  server: {
    https: {
      key: fs.readFileSync(path.join(__dirname, 'ssl', 'localhost.key')),
      cert: fs.readFileSync(path.join(__dirname, 'ssl', 'localhost.crt')),
    },
  },
  base: (() => {
    const basePath = process.env.QA_DEPLOYMENT
      ? `/market-dashboard/pr-${process.env.PR_NUMBER}/`
      : '/market-dashboard/';
    console.log('Vite base path:', basePath); // Log the base path for debugging
    return basePath;
  })(),
});