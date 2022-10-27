import resolve from 'rollup-plugin-pnp-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'

// NOTE - terser is abandoned; an official plugin should be out for v3.x
// import { terser } from 'rollup-plugin-minification'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [external(), resolve(), commonjs(), typescript() /*, terser()*/],
  },
]
