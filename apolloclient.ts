import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';


const getGraphqlUri = () => {
    if(process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'development') {
        return `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`;
    } else{
        const vercelUrl = process.env.VERCEL_URL;
        return `https://${vercelUrl}/api/graphql`;
    }
};



const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
        uri: getGraphqlUri(),
        credentials: 'same-origin',
    }),
    cache: new InMemoryCache()
})

export default client;