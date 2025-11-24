// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      // if you need Babel-plugin or similar for the new React compiler features
      babel: {
        plugins: ['babel-plugin-react-compiler']
      }
    })
  ]
})
