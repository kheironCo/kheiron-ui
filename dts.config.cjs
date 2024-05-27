const path = require('path');

module.exports = {
    entry: 'src/index.ts',
    outDir: 'dist/types',
    compilerOptions: {
        baseUrl: './src',
        paths: {
            "@KUI-types": ["common/types"],
            "@KUI-utils": ["common/utils"],
            "@KUI/styles": ["common/styles"],
            "@KUI-element": ["element"],
            "@KUI-icons": ["icons"],
            "@KUI-form": ["form"],
            "@KUI-dashboard": ["dashboard"]
        }
    },
    aliases: {
        '@KUI-types': path.resolve(__dirname, 'src/common/types'),
        '@KUI-utils': path.resolve(__dirname, 'src/common/utils'),
        '@KUI-styles': path.resolve(__dirname, 'src/common/styles'),
        '@KUI-element': path.resolve(__dirname, 'src/element'),
        '@KUI-icons': path.resolve(__dirname, 'src/icons'),
        '@KUI-form': path.resolve(__dirname, 'src/form'),
        '@KUI-dashboard': path.resolve(__dirname, 'src/dashboard')
    }
};
