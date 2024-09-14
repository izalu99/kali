import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const getGraphqlUri = () => {
    if(process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'development') {
        console.log('development mode');
        console.log(process.env.NEXT_PUBLIC_API_URL);
        return `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`;        
    } else{
        const vercelUrl = process.env.VERCEL_URL;
        console.log('production mode');
        console.log(vercelUrl);
        return `https://${vercelUrl}/api/graphql`;
    }
};



const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
        uri: getGraphqlUri(),
        credentials: 'same-origin'
    }),
    cache: new InMemoryCache()  
})

export default client;

