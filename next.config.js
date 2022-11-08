/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
	reactStrictMode: true,
	webpack: config => {
		config.resolve.alias['@'] = path.resolve(__dirname);
		config.module.rules.push({
			test: /\.svg$/,
			use: '@svgr/webpack'
		});
		return config;
	},
	images: {
		domains: ['randomuser.me']
	},
	env: {}
};
