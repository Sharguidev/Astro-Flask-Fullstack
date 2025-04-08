// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  outDir: './dist',
  publicDir: './src/frontend/public',
  srcDir: './src/frontend/src',
});
