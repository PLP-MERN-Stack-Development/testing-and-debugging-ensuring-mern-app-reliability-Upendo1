import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                  // allow test() and expect() globally
    environment: 'jsdom',           // simulate browser environment
    setupFiles: './src/tests/setup.js', // load your setup file
  },
});
