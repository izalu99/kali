
import { ApolloServer } from '@apollo/server'
import schema from './schema'
import resolvers from './resolvers'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { NextResponse, NextRequest } from 'next/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'


let plugins: any[] = []
if (process.env.NODE_ENV === 'development') {
    plugins = [
        ApolloServerPluginLandingPageLocalDefault({
            embed:true
        })
    ]
}


const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    plugins,
})

const handler = startServerAndCreateNextHandler<NextRequest>(server,{})

export async function GET(req: NextRequest) {
    return handler(req)
}

export async function POST(req: NextRequest) {
    return handler(req)
}