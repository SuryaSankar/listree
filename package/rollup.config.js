import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import pkg from './package.json';
import serve from 'rollup-plugin-server';

export default {
    input: 'src/js/index.js',
    plugins: [
        terser(),
        scss({
            output: 'dist/listree.min.css',
            outputStyle: "compressed"
        }),
        serve('dist')
    ],
    output: [
        {
            name: 'listree',
            file: pkg.browser,
            format: 'umd',
        },
        {
            file: pkg.main,
            format: 'cjs',
        },
        { 
            file: pkg.module,
            format: 'es' 
        },         
    ],
};