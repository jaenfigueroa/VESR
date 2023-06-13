import path from 'path';
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),dts({insertTypesEntry: true})],
  build: {
    lib: {
        entry: path.resolve(__dirname, 'src/main.tsx'),
        name: 'uiv2',
        formats: ['es', 'umd'],
        fileName: (format) => `uiv2.${format}.js`,
    },
    rollupOptions: {
        external: ['react', 'react-dom' ],
        output: {
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
            },
        },
    },
}
})
