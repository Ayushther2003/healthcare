import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/healthcare/', // Use your repo name here
  plugins: [react()],
});
