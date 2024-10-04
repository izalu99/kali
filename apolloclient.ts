import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'cross-fetch';



const getGraphqlUri = () => {
    if (process.env.NODE_ENV === 'development') {
        return `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`;
    } else {
        return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/graphql`;
    }
};


const httpLink = new HttpLink({
    uri: getGraphqlUri(),
    credentials:'same-origin',
    fetch
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
