import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(),
	          dts({clearPureImport: true, insertTypesEntry: true})
	],
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
		reportCompressedSize: true,
		lib: {
			entry: resolve(__dirname, 'src/vuebulma.ts'),
			name: 'vuebulma', fileName: `vuebulma`
		},
		emptyOutDir: true,
		rollupOptions: {
			// make sure to externalize deps that shouldn't be bundled
			// into your library
			external: ['vue', 'vite'],
			treeshake: 'safest',
			output: {
				compact: true,
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					vue: 'Vue'

				}
			}
		}
	}
});
