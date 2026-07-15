import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  build: {
    // TODO: future code splitting enhancements — tune chunk sizes after adding prefetch
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router")) return "router";
            if (id.includes("react-dom") || id.includes("react/"))
              return "react-vendor";
            if (id.includes("react-icons")) return "icons";
            if (id.includes("swiper")) return "swiper";
          }
        },
      },
    },
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
  },
});
