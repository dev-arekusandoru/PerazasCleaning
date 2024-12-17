/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // <=== enables static exports
	images: {
		unoptimized: process.env.NODE_ENV === 'development'
	},
	reactStrictMode: true,
	basePath: process.env.NODE_ENV === 'development' ? '' : '/PerazasCleaning'
};

module.exports = nextConfig;
