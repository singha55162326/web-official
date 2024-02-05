/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['192.168.20.76'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
  typescript: {

    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
