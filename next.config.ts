import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  compress: true,
  reactStrictMode: true,
  experimental: {
    serverActions: {
      allowedOrigins: ["rahava.net", "localhost:3000"],
    },
  },
};

export default nextConfig;
