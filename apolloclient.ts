import {ApolloClient, InMemoryCache} from '@apollo/client';

const getGraphqlUri = () => {
    if(process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'development') {
        console.log('development mode');
        console.log(process.env.NEXT_PUBLIC_API_URL);
        return `${process.env.NEXT_PUBLIC_API_URL}/api/graphql`;        
    } else{
        //const vercelUrl = process.env.VERCEL_URL;
        const vercelUrl = 'kali-ktd9ty1e7-iccetea.vercel.app/'
        console.log('production or preview mode');
        console.log(vercelUrl);
        return `/api/graphql`;
    }
};



const client = new ApolloClient({
    uri: getGraphqlUri(),
    cache: new InMemoryCache({
        resultCaching: false,
    }),
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    }
})

export default client;

