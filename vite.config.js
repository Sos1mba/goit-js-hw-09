import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'public/index.html'),
        gallery: path.resolve(__dirname, 'public/1-gallery.html'),
        form: path.resolve(__dirname, 'public/2-form.html'),
      }
    }
  }
}); 