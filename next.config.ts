import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instamonteur.nl",
      },
    ],
  },
};

export default nextConfig;
