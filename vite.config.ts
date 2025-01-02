import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Inspired-living-constructions-inc./', // Ensure this matches your repository name exactly
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});