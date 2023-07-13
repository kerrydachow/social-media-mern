import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from "vite-jsconfig-paths";

// https://vitejs.dev/config/
/**
 * Use jsconfigPaths with Vite
 * https://dev.to/larswaechter/path-aliases-with-typescript-in-nodejs-4353
 */
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  server: {
    port: 3000,
  },
})
