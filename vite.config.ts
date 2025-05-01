import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            pages: path.resolve(__dirname, 'src/pages'),
            utils: path.resolve(__dirname, 'src/utils'),
            assets: path.resolve(__dirname, 'src/assets'),
            dataset: path.resolve(__dirname, 'src/dataset'),
            services: path.resolve(__dirname, 'src/services'),
            util: path.resolve(__dirname, 'src/util'),
            store: path.resolve(__dirname, 'src/store'),
            types: path.resolve(__dirname, 'src/types'),
        },
    },
    server: {
        port: 3000,
    },
});
