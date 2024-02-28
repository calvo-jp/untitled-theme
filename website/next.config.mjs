/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    optimizePackageImports: ['@untitled-theme/icons-react', '@ark-ui/react'],
  },
};

export default nextConfig;
