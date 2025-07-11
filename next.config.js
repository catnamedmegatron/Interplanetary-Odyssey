/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["resium", "cesium"],
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      cesium: "cesium/Source",
    }
    return config
  },
}

module.exports = nextConfig
module.exports = {
  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },
}
