import type { NextConfig } from "next";
import { AlphaTabWebPackPlugin } from '@coderline/alphatab-webpack'

const nextConfig: NextConfig = {
  webpack(config) {
    config.plugins.push(
      new AlphaTabWebPackPlugin({
        assetOutputDir: 'public/alphatab'
      })
    );
    return config;
  }
};

export default nextConfig;
