/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Webpack 5 asset modules로 glb/gltf 파일 처리
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
      generator: {
        filename: "static/models/[name][ext]",
        publicPath: "/_next/static/models/",
      },
    });
    return config;
  },
  images: {
    domains: ["github.com", "linkedin.com", "codeforces.com", "atcoder.jp", "topcoder.com", "acmicpc.net"],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@react-three/drei", "@react-three/fiber"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
