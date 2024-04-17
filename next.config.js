const { withPayload } = require('@payloadcms/next/withPayload')
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "personal-portfolio-payload.onrender.com",
      },
    ],
  },
};

module.exports = withPayload(nextConfig);
