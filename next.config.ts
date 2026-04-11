import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cat-app",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
