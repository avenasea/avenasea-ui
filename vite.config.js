import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import inject from '@rollup/plugin-inject';
import dotenv from 'dotenv-flow';
dotenv.config();

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
  server: {
    port: process.env.PORT
  },
  resolve: {
    alias: {
      $components: path.resolve('./src/components'),
      $stores: path.resolve('./src/stores'),
      $api: path.resolve('./src/api'),
      'lib-jitsi-meet': path.resolve('./node_modules/lib-jitsi-meet/dist/lib-jitsi-meet.js')
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
    minify: false,
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill(),
        inject({ Buffer: ['Buffer', 'Buffer'] })
      ]
    }
  },
  define: {
    'process.env': {
      NODE_DEBUG: false
    }
  }
};

export default config;