import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the project root so a stray lockfile higher up the filesystem is never picked up.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
