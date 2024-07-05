/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/icons',
				permanent: false,
			},
		];
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	experimental: {
		optimizePackageImports: ['@untitled-theme/icons-react', '@ark-ui/react'],
	},
};

export default nextConfig;
