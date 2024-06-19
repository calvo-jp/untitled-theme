/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		optimizePackageImports: ['@untitled-theme/icons-react', '@ark-ui/react'],
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
};

export default nextConfig;
