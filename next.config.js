/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: "**"
            }
            // "kzwkndjztfisrsrwshab.supabase.co"
        ]
    }
}

module.exports = nextConfig
