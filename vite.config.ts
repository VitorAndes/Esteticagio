import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    cssCodeSplit: true,
  },
});
