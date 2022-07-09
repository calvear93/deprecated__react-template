import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svg from 'vite-plugin-svgr';
import { createHtmlPlugin as html } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        checker({ typescript: true }),
        svg(),
        html({
            inject: {
                data: process.env
            },
            minify: true
        })
    ]
});
