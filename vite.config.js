import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
        // doesn't work!
        //   'vue': 'vue/dist/vue.runtime.esm-bundler.js',
          'vue': 'vue/dist/vue.esm-bundler.js',
        },
    }
});
