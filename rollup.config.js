import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import pkg from './package.json';

export default {
    input: 'src/js/index.js',
    external: ['ms'],
    plugins: [
        resolve(), // so Rollup can find `ms`
        commonjs(),// so Rollup can convert `ms` to an ES module
        terser(),
        scss({
            output: 'dist/easytree.css',
            outputStyle: "compressed"
        }),
    ],
    output: [
        {
            name: 'easytree',
            file: pkg.browser,
            format: 'umd',
        },
        { 
            file: pkg.module,
            format: 'es' 
        },         
    ],
};