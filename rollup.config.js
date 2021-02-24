import babel from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve' // 处理第三方库的引入
import commonjs from '@rollup/plugin-commonjs' // 支持引入commonJS
import json from '@rollup/plugin-json'
import eslint from '@rollup/plugin-eslint'

const extensions = [
    '.js',
    '.ts',
    '.tsx'
]

export default {
    input: './sdk/src/main.ts',
    output: {
        file: 'dist/bundle.js',
        name: 'radar',
        format: 'umd'
    },
    plugins: [
        eslint({
            fix: true,
            exclude: 'node_modules/**'
        }),
        babel({
          exclude: 'node_modules/**'
        }),
        uglify(),
        typescript({
            extensions
        }),
        resolve(),
        commonjs(),
        json(),
    ],
    external: [] // 保持某些第三方库的外部引用，不打入一个包里
}