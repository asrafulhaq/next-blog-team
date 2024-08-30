/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unitedthemes.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.prothomalo.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "powerpackelements.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.ultimatebeaver.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
