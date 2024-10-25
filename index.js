'use strict';

// References:
// - https://github.com/Richienb/node-polyfill-webpack-plugin
// - https://github.com/niksy/node-stdlib-browser

module.exports = class TinaPolyfillPlugin {
	apply(compiler) {
		compiler.options.resolve.fallback = {
			assert: require.resolve('assert/'),
			async_hooks: false,
			constants: require.resolve('constants-browserify'),
			crypto: require.resolve('crypto-browserify'),
			dns: false,
			fs: false,
			http: require.resolve('stream-http'),
			https: require.resolve('https-browserify'),
			net: require.resolve('net-browserify'),
			os: require.resolve('os-browserify/browser'),
			path: require.resolve('path-browserify'),
			querystring: require.resolve('querystring-es3'),
			stream: require.resolve('stream-browserify'),
			timers: require.resolve('timers-browserify'),
			tls: false,
			url: require.resolve('url/'),
			util: require.resolve('util/'),
			vm: require.resolve('vm-browserify'),
			zlib: require.resolve('browserify-zlib'),
		};
	}
};
