import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@libs": path.resolve(__dirname, "src/libs"),
      "@strings": path.resolve(__dirname, "src/strings"),
      "@types": path.resolve(__dirname, "src/types"),
      "@ui": path.resolve(__dirname, "src/ui")
    }
  }
})
