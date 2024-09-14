import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



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


const httpLink = new HttpLink({
    uri: getGraphqlUri(),
    credentials:'include'
});


const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
        }
    }
});



const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()  
});

export default client;
