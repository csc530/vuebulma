import {resolve} from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	clearScreen: false,
	css: {
		preprocessorOptions: {
			sass: {
				// language=SASS
				additionalData: ''
			}
		},
		devSourcemap: true
	},
	build: {
		minify: false,
		assetsDir: 'assets',
		sourcemap: true,
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'src/vuebulma.ts'),
			name: 'vuebulma',
			// the proper extensions will be added
			formats: ['es', 'umd', 'cjs', 'iife'],
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue', 'vite'],
			treeshake: 'safest',
			output: {
				exports: 'named',
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
});
