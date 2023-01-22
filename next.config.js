/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
};

module.exports = {
  images: {
    unoptimized: true,
  },
};
