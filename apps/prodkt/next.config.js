/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@core/utils'],
    env:{
        API_BASE_URL: "https://staging-api.prodkt.co/api/v1"
    }
}

module.exports = nextConfig
