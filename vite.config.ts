import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log(process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: "/src"}],
  },
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 3000
  },
  build: {
    minify: 'terser',
    sourcemap: !isProduction,
    terserOptions: {
      compress: {
        drop_console: isProduction, // disable console logging in production
      },
    },
  },
});
