import type { NextConfig } from "next";

const steden = [
  "rotterdam",
  "dordrecht",
  "delft",
  "schiedam",
  "vlaardingen",
];

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instamonteur.nl",
      },
    ],
  },
  async redirects() {
    return steden.map((stad) => ({
      source: `/loodgieter/${stad}`,
      destination: `/loodgieter-${stad}`,
      permanent: true,
    }));
  },
  async rewrites() {
    return steden.map((stad) => ({
      source: `/loodgieter-${stad}`,
      destination: `/loodgieter/${stad}`,
    }));
  },
};

export default nextConfig;
