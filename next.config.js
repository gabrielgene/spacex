/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.staticflickr.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
