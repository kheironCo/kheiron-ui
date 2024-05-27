import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    resolve: {
        alias: {
            '@KUI-types': path.resolve(__dirname, './src/common/types'),
            '@KUI-utils': path.resolve(__dirname, './src/common/utils'),
            '@KUI-styles': path.resolve(__dirname, './src/common/styles'),
            '@KUI-element': path.resolve(__dirname, './src/element'),
            '@KUI-icons': path.resolve(__dirname, './src/icons'),
            '@KUI-form': path.resolve(__dirname, './src/form'),
            '@KUI-dashboard': path.resolve(__dirname, './src/dashboard'),
        },
    },
});
