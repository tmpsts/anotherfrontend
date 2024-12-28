import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: "out",
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./ImageLoader.js",
  },
};

export default nextConfig;
