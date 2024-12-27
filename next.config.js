/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    middleware: true,
    missingSuspenseWithCSRBailout: false,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quixotic-impala-265.convex.cloud",
        port: "",
      },
      {
        protocol: "https",
        hostname: "kindred-rhinoceros-563.convex.cloud",
        port: "",
      },
      {
        protocol: "https",
        hostname: "openweathermap.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
