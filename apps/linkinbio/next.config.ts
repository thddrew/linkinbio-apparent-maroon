import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js; sandbox;",
    remotePatterns: [
      {
        hostname: "github.com",
      },
      {
        hostname: "cdn.simpleicons.org",
      },
      {
        hostname: "polar-public-sandbox-files.s3.amazonaws.com",
      },
      {
        hostname: "polar-public-files.s3.amazonaws.com",
      },
    ],
  },
  rewrites: async () => [
    {
      source: "/analytics",
      destination: `${process.env.ANALYTICS_URL}/analytics`,
    },
    {
      source: "/analytics/:path*",
      destination: `${process.env.ANALYTICS_URL}/analytics/:path*`,
    },
  ],
};

export default nextConfig;
