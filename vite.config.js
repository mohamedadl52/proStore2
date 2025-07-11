import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue() , eslintPlugin()],
  resolve : {
    alias : {
      '@': resolve(__dirname, 'src')

    }  , 
     build: {
    outDir: 'dist',
  },
  // ✨ هذا الجزء مهم
  server: {
    historyApiFallback: true,
  },
  },
  base : '/'
})
