// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
      },
    ];
  },
};

module.exports = nextConfig;
