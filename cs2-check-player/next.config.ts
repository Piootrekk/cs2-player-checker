import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "distribution.faceit-cdn.net",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "avatars.steamstatic.com",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
