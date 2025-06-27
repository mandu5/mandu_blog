/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  webpack: (config) => {
    // 웹팩 설정
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/models/",
            publicPath: "/_next/static/models/",
            name: "[name].[ext]",
          },
        },
      ],
    });
    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
