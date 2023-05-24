/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['images.unsplash.com'],
  },
  env: {
    apiPublicUrl: 'https://api.escuelajs.co',
  },
}

module.exports = nextConfig
