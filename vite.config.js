export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/public/index.html'),
        gallery: path.resolve(__dirname, 'src/public/1-gallery.html'),
        form: path.resolve(__dirname, 'src/public/2-form.html'),
      }
    }
  }
});