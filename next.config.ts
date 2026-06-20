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
  async redirects() {
    const steden = [
      "rotterdam",
      "dordrecht",
      "vlaardingen",
      "delft",
      "gouda",
      "zoetermeer",
      "leiden",
      "den-haag",
      "schiedam",
    ];

    return steden.map((stad) => ({
      source: `/loodgieter-${stad}`,
      destination: `/steden/${stad}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
