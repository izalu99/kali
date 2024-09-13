import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { request } from 'https';
import { cookies } from 'next/headers';


const getGraphqlUri = () => {
    if(process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'development') {
        console.log('development mode');
        console.log(process.env.NEXT_PUBLIC_API_URL);
        return `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`;        
    } else{
        const vercelUrl = process.env.VERCEL_URL;
        console.log('production or preview mode');
        console.log(vercelUrl);
        return `https://${vercelUrl}/api/graphql`;
    }
};



const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
        uri: getGraphqlUri(),
        credentials: 'same-origin',
    }),
    cache: new InMemoryCache({
        resultCaching: false,
    })
})

export default client;