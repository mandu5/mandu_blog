/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/models/", // Adjust the output path as needed
            publicPath: "/_next/static/models/", // Adjust the public path as needed
            name: "[name].[ext]",
            esModule: false, // This option is important for Next.js
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
