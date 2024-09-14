import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const getGraphqlUri = () => {
    if (process.env.NODE_ENV === 'development') {
        return `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`;
    } else {
        return `https://${process.env.VERCEL_URL}/api/graphql`;
    }
};


const httpLink = new HttpLink({
    uri: getGraphqlUri(),
    credentials:'same-origin',
    headers: {
        'Content-Type': 'application/json',
    }
});


const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        }
    }
});



const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()  
});

export default client;
