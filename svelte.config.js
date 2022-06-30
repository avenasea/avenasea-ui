// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import path from 'path';
import dotenv from 'dotenv-flow';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import inject from '@rollup/plugin-inject';
dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			out: './build',
			precompress: true
		}),

		adapter: adapter({
			out: './build',
			precompress: true
		}),
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/components'),
					$stores: path.resolve('./src/stores'),
					$api: path.resolve('./src/api')
				}
			},
			optimizeDeps: {
				esbuildOptions: {
					// Node.js global to browser globalThis
					define: {
						global: 'globalThis'
					},
					// Enable esbuild polyfill plugins
					plugins: [
						NodeGlobalsPolyfillPlugin({
							process: true,
							buffer: true,
							webworkers: true
						}),
						NodeModulesPolyfillPlugin()
					]
				}
			},
			build: {
				minify: true,
				rollupOptions: {
					plugins: [
						// Enable rollup polyfills plugin
						// used during production bundling
						rollupNodePolyFill(),
						inject({ Buffer: ['Buffer', 'Buffer'] })
					]
				}
			}
		}
	}
};

export default config;
