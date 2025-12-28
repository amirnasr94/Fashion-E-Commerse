import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  compress: true,
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
        as:'*.ts'
      },
    },
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["rahava.net", "localhost:3000"],
    },
  },
};

export default nextConfig;
