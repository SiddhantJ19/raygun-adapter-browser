import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/min-adapter.js',
        format: 'iife',
        name: 'raygun'
    },
    plugins: [
        babel({
            extensions: ['.js'],
            exclude: ['node_modules/@babel/**', 'node_modules/core-js/**']
        }),
        terser()
    ]
};