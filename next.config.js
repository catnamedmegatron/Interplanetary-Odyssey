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
  
  // ADD THIS 'images' CONFIGURATION HERE:
  images: {
    domains: ['upload.wikimedia.org'],
  },

  // ADD THIS 'env' CONFIGURATION HERE:
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
};

module.exports = nextConfig; // Only one module.exports at the end