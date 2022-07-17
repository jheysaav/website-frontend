import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from 'vite-plugin-windicss'
import * as path from "path";

export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: [
      { find: "@", replacement: path.join(__dirname, "./src") },
      { find: "~@", replacement: path.join(__dirname, "./src/assets") },
    ],
  },
});
