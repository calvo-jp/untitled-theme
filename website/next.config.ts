import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 31536000,
	},
};

export default nextConfig;
