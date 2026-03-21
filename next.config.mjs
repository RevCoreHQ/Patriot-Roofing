/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lirp.cdn-website.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.cdn.filesafe.space',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/roofing-installation', destination: '/services/roofing-installation', permanent: true },
      { source: '/roof-replacement', destination: '/services/roof-replacement', permanent: true },
      { source: '/roofing-repair', destination: '/services/roofing-repair', permanent: true },
    ];
  },
};

export default nextConfig;
