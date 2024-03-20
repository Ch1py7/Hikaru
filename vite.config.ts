import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: './',
  publicDir: './public',
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      types: path.resolve(__dirname, './src/types'),
      services: path.resolve(__dirname, './src/services'),
      context: path.resolve(__dirname, './src/context'),
      hooks: path.resolve(__dirname, './src/hooks'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react()],
})