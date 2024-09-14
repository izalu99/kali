import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const getGraphqlUri = () => {
    const apiUrl = process.env.VERCEL_URL? process.env.VERCEL_URL : 'http://localhost:3000';
    console.log('apiUrl: ', `https://{apiUrl}/api/graphql`);
    return `https://${apiUrl}/api/graphql`;
};


const httpLink = new HttpLink({
    uri: getGraphqlUri(),
    credentials:'same-origin'
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
