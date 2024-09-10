
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import * as schema from './schema'

const url = process.env.TURSO_CONNECTION_URL
const token = process.env.TURSO_AUTH_TOKEN



if (!url) {
    throw new Error('TURSO_CONNECTION_URL is not set')
}
if (!token) {
    throw new Error('TURSO_AUTH_TOKEN is not set')
}





try {
    new URL(url);
    console.log('URL is valid');
} catch (error) {
    console.error('Invalid URL');
    throw error;
}


let client;
try{
    client = createClient({
        url: url!,
        authToken: token,
    });
    console.log('Client created successfully');
} catch (error) {
    console.error('Error creating client:', error);
    throw error;
}

export { client };




export const db = drizzle(client, { schema }); 
