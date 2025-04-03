/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.microcms-assets.io",
      },
    ],
  },
};

export default nextConfig;
