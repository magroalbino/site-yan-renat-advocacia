import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 3000,
        open: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(process.cwd(), 'index.html'),
                artigos: resolve(process.cwd(), 'artigos.html')
            }
        }
    }
})