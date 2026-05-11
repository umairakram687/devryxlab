import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 trailingSlash:true,
 output:"export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "image.thum.io",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
    ],
  },
};

export default nextConfig;
