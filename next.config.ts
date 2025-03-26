import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "www.static-src.com",
      },
      {
        protocol: "https",
        hostname: "www.cdnensemble.xyz",
      },
    ],
  },
};

export default nextConfig;
