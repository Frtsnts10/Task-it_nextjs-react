/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: ["https://img.clerk.com"],
    domains: ["localhost", "https://img.clerk.com", "img.clerk.com"],
  },
};

export default nextConfig;
