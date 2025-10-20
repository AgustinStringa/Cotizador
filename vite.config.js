import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'happy-dom'
    }, resolve: {
        alias: [
            { find: "@components", replacement: resolve(__dirname, "src/components") },
            { find: "@tests", replacement: resolve(__dirname, "src/tests") },
            { find: "@helpers", replacement: resolve(__dirname, "src/helpers") },
            { find: "@", replacement: resolve(__dirname, "src") }
        ]
    },
})
