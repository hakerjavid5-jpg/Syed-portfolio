import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    "preview-chat-cd631a42-4884-4a29-9fb0-e2f094705523.space-z.ai",
  ],
};

export default nextConfig;
