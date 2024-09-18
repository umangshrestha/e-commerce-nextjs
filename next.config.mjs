/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ], // TODO: after putting the image on the server, change the domain to the server domain
  },
};

export default nextConfig;
