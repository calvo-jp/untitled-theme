/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@untitled-theme/icons-react', '@ark-ui/react'],
    serverMinification: true,
  },
};

export default nextConfig;
