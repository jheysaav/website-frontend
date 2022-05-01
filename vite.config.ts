import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import * as path from 'path'

export default defineConfig({
  plugins: [vue(), legacy()],
  resolve: {
    alias: [
      { find: '@', replacement: path.join(__dirname, './src') },
      { find: '~@', replacement: path.join(__dirname, './src/assets') },
    ],
  },
})
