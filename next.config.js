/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["resium", "cesium"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      cesium: "cesium/Source",
    };
    return config;
  },
  
  images: {
    domains: ['upload.wikimedia.org', 'planetary.s3.amazonaws.com', 'photojournal.jpl.nasa.gov'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'planetary.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'photojournal.jpl.nasa.gov',
      },
    ],
  },
};

module.exports = nextConfig;