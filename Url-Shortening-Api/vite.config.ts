import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/Projects_Web-Development/Url-Shortening-Api/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
