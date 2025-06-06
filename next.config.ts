import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname: "as2.ftcdn.net",
      },
      {
        hostname: "as1.ftcdn.net",
      },
      {
        hostname: "t4.ftcdn.net",
      },
      {
        hostname: "wdtapexx.wpengine.com",
      },
      {
        hostname: "cdn.sanity.io",
      },
      {
        hostname: "www.apple.com",
      },
      {
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
