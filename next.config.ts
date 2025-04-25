import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {

      images : {
            domains : ['cdn.dummyjson.com'],
      },

  /* config options here */
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  }
};

export default nextConfig;