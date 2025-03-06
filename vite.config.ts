import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // for DOM APIs (needed for React)
    globals: true, // optional, allows global `describe`, `it`, etc.
    setupFiles: "./src/test/setup.js", // optional setup (more on this below)
  },
});
