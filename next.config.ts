import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 2678400, // 31 days
    formats: ["image/webp"], // Remove 'image/avif'
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ucarecdn.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
