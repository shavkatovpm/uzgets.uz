import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 24.11: Standoff 2 sotilmaydi (provayder rad etyapti)
  async redirects() {
    return [
      { source: '/donat/standoff-2', destination: '/donat', statusCode: 301 },
      { source: '/ru/donat/standoff-2', destination: '/ru/donat', statusCode: 301 },
    ]
  },
};

export default nextConfig;
