import resolve from 'rollup-plugin-pnp-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'
import dts from 'rollup-plugin-dts'

// NOTE - terser is abandoned; an official plugin should be out for v3.x
// import { terser } from 'rollup-plugin-minification'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      // {
      //   file: packageJson.main,
      //   format: 'cjs',
      //   sourcemap: true,
      // },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [external(), resolve(), commonjs(), typescript() /*, terser()*/],
    external: [
      'react',
      '@emotion/styled',
      '@emotion/is-prop-valid',
      '@emotion/react',
      'styled-system',
      'polished',
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
  },
]
