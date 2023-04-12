import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

console.log(process.env.NODE_ENV);
const isProduction = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: { 
      public: `${path.resolve(__dirname, "./public/")}`,
      '@': path.resolve(__dirname, "./src/"),
      pages: path.resolve(__dirname, "./src/pages"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      types: `${path.resolve(__dirname, "./src/types")}`,
      constants: `${path.resolve(__dirname, "./src/constants")}`,
      hooks: `${path.resolve(__dirname, "./src/hooks")}`,
      services: `${path.resolve(__dirname, "./src/services")}`,
      utils: `${path.resolve(__dirname, "./src/utils")}`,
    },
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
