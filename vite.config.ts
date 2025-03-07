import { defineConfig } from "vitest/config";

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/string-calculator/",
  test: {
    environment: "jsdom", // for DOM APIs (needed for React)
    globals: true, // optional, allows global `describe`, `it`, etc.
    setupFiles: "./src/test/setup.js", // optional setup (more on this below)
  },
});
