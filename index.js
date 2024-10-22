'use strict';

module.exports = class TinaPolyfillPlugin {
	apply(compiler) {
		compiler.options.resolve.fallback = {
			assert: require.resolve('assert/'),
			constants: require.resolve('constants-browserify'),
			crypto: require.resolve('crypto-browserify'),
			http: require.resolve('stream-http'),
			https: require.resolve('https-browserify'),
			net: require.resolve('net-browserify'),
			os: require.resolve('os-browserify/browser'),
			path: require.resolve('path-browserify'),
			querystring: require.resolve('querystring-es3'),
			stream: require.resolve('stream-browserify'),
			url: require.resolve('url/'),
			util: require.resolve('util/'),
		};
	}
};
