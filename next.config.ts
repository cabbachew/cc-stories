import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iykyk.shop",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "ucarecdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
