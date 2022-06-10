/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
