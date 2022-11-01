/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REPO_URL: "https://github.com/wahid-ari/next-animation",
    // API_URL: "http://localhost:3000",
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com", "ui-avatars.com"],
  },
};

module.exports = nextConfig;