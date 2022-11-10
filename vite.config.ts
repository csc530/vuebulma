import {resolve} from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [dts({insertTypesEntry: true}), vue()],
	clearScreen: false,
	css: {
		preprocessorOptions: {
			sass: {
				// language=SASS
				additionalData: ''
			}
		}
	},
	build: {
		minify: false,
		assetsDir: 'assets',
		sourcemap: true,
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'lib/main.js'),
			name: 'VueBulma',
			// the proper extensions will be added
			fileName: 'vue-bulma',
			formats: ['es', 'cjs', 'umd', 'iife']
		},
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue'],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue',
				}
			}
		}
	}
});
