/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img.icons8.com'],
  },
  env: {
    VITE_REACT_APP_API_URL: process.env.VITE_REACT_APP_API_URL,
  },
}

module.exports = nextConfig