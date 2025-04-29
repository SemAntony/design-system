import {join, resolve} from 'path'
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import {defineConfig} from 'vite'

import {dependencies, devDependencies} from './package.json'
import viteReact from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        viteReact(),
        tsconfigPaths(),
        dts(), // Output .d.ts files
    ],
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, join("lib", "index.ts")),
            // the proper extensions will be added
            fileName: (format) => `ui-core.${format}.js`,
            // formats: ["es", "cjs", "umd"],
            formats: ["es"],
            name: 'ui-core',
        },
        rollupOptions: {
            external: [
                'react/jsx-runtime',
                ...Object.keys(dependencies),
                ...Object.keys(devDependencies),
            ],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
        sourcemap: false,
        target: 'esnext',
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "lib"),
        },
    },
})
