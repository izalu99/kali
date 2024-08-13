//import { config } from 'dotenv'
//config({ path: '.env' })

import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import * as schema from './schema'

const url = process.env.TURSO_CONNECTION_URL
const token = process.env.TURSO_AUTH_TOKEN


//ensure env variables are set
if (!url) {
    throw new Error('TURSO_CONNECTION_URL is not set')
}
if (!token) {
    throw new Error('TURSO_AUTH_TOKEN is not set')
}


//log the url and auth token
console.log(typeof url)
console.log('Connection URL:', url);
console.log(typeof token)
console.log('Auth Token:', token);

// validate url using URL constructor
try {
    new URL(url);
    console.log('URL is valid:', url);
} catch (error) {
    console.error('Invalid URL:', url);
    throw error;
}

// Create a client for the database connection
let client;
try{
    client = createClient({
        url: url!,
        authToken: token,
    });
    console.log('Client created successfully: client');
} catch (error) {
    console.error('Error creating client:', error);
    throw error;
}

export { client };



//check the type of schema
console.log(typeof schema);

export const db = drizzle(client, { schema }); 
