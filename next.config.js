/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  eslint: {
    // Ignore ESLint for HTML5 content directories
    ignoreDuringBuilds: true,
    dirs: ["src/data/html5"],
  },
};

module.exports = nextConfig;
