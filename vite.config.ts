import {resolve} from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [dts({clearPureImport: true}), vue()],
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
		lib: {
			entry: resolve(__dirname, 'src/vuebulma.ts'),
			name: 'vuebulma'
			// the proper extensions will be added
			// formats: ['es', 'umd', 'cjs', 'iife']
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue', 'vite'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue'
				}
			}
		}
	}
});
