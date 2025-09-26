/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://daily-earn-backend-production.up.railway.app',
  },
  // Ensure environment variables are available at build time
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_URL: 'https://daily-earn-backend-production.up.railway.app',
  },
}

export default nextConfig
