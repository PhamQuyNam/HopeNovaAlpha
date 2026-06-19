import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      //Cho phép import bằng @ thay vì ../../
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
