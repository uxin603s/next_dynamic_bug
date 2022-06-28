/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async () => {
    return {
      '/1': { page: "/[id]", query: { id: 1 } }
    }
  }
}

module.exports = nextConfig
