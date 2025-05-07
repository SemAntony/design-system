import { join, resolve } from 'path'

import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

import { dependencies, devDependencies } from './package.json'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), tsconfigPaths(), dts()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, join('lib', 'index.ts')),
      // the proper extensions will be added
      name: 'ui-core',
      fileName: format => `ui-core.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
      ],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
    sourcemap: false,
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib'),
    },
  },
})
