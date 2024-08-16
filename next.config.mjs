/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return [
            {
                source: '/api/:path*',
                headers: [
                    {
                        key: 'Access-Control-Allow-Credentials',
                        value: 'true'
                    },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: (req) =>  {
                            // later include the domain when deployed
                            const allowedOrigins = ['http://localhost:3000', 'https://localhost:3000', 'https://localhost'];
                            const origin = req.headers.origin;
                            if (allowedOrigins.includes(origin)) {
                                return origin;
                            } else {
                                return allowedOrigins[0];  
                            }
                        },
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
