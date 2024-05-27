import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import path from 'path';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
        }
    ],
    plugins: [
        alias({
            entries: [
                { find: '@KUI-types', replacement: path.resolve(__dirname, 'src/common/types') },
                { find: '@KUI-utils', replacement: path.resolve(__dirname, 'src/common/utils') },
                { find: '@KUI-styles', replacement: path.resolve(__dirname, 'src/common/styles') },
                { find: '@KUI-element', replacement: path.resolve(__dirname, 'src/element') },
                { find: '@KUI-icons', replacement: path.resolve(__dirname, 'src/icons') },
                { find: '@KUI-form', replacement: path.resolve(__dirname, 'src/form') },
                { find: '@KUI-dashboard', replacement: path.resolve(__dirname, 'src/dashboard') }
            ]
        }),
        resolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx'], // Extensiones que debería resolver
        }),
        commonjs(), // Convierte CommonJS a ESModules
        typescript({
            tsconfig: './tsconfig.json' // Usar tu tsconfig.json
        })
    ],
    external: ['react', 'react-dom'] // Dependencias externas que no deben incluirse en el bundle
};
