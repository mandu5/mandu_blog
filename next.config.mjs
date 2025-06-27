/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      // 필요에 따라 다른 도메인 추가
    ],
    unoptimized: false, // 개발 중에는 false, 배포 시 true 고려
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
      generator: {
        filename: "static/models/[name].[hash][ext]",
      },
    });

    return config;
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@react-three/drei", "@react-three/fiber"],
  },
};

export default nextConfig;
