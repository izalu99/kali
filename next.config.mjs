/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){

        const devURL = process.env.NEXT_PUBLIC_DEV_URL || 'http://localhost:3000';
        const prodURL = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : devURL;

        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*'
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET, POST, PUT, DELETE, PATCH'
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    }
                ]
            }
        ]
    }
};

export default nextConfig;
