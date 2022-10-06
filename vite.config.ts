import {resolve} from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			sass: {
				// language=SASS
				additionalData: `@import "node_modules/bulma/sass/utilities/_all.sass"\n` +
					`@import "node_modules/bulma/sass/base/all"\n` +
					`@import "node_modules/bulma/sass/helpers/all"`
			}
		}
	},
	build: {
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
					vue: 'Vue'
				}
			}
		}
	}
});
