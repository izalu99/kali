import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Check the current environment and build the appropriate URI
const getGraphqlUri = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Running in development mode');
    return 'http://localhost:3000/api/graphql'; // Hardcoded localhost for dev mode
  } else {
    // In Vercel Preview/Production environments
    const vercelUrl = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_API_URL;
    if (!vercelUrl) {
      throw new Error('GraphQL API URL is not set for the production environment.');
    }
    console.log(`GraphQL URI (Vercel): https://${vercelUrl}/api/graphql`);
    return `https://${vercelUrl}/api/graphql`;
  }
};

const httpLink = new HttpLink({
  uri: getGraphqlUri(),
  credentials: 'same-origin', // Adjust this based on the need for cookies/auth
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
