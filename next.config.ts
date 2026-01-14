import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  output: "export",
  basePath: "/frontend-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
