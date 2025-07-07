import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    copyPublicDir: false, // Disables default public folder copying
  },
  publicDir: false, // Disables the public directory entirely
  define: {
    'import.meta.env': {
      VITE_API_URL: JSON.stringify(process.env.VITE_API_URL || 'https://my-portfolio-db4k.onrender.com')
    }
  }
});