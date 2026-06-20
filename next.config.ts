import type { NextConfig } from "next";

const steden = [
  "rotterdam",
  "den-haag",
  "dordrecht",
  "delft",
  "leiden",
  "zoetermeer",
  "gouda",
  "schiedam",
  "vlaardingen",
];

const nextConfig: NextConfig = {
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
