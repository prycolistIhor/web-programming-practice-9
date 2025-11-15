import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/web-programming-practice-9/", // замініть "my-project-name" на ім'я вашого проекту
});

