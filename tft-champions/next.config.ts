import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ddragon.leagueoflegends.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.lolchess.gg',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dak.gg',
      }
    ]
  }
};

export default nextConfig;
