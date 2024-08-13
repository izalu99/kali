
//import { config } from 'dotenv'
//config({path:'.env'});

import 'dotenv/config';
import { defineConfig } from 'drizzle-kit'


//ensure env variables are set
if (!process.env.TURSO_CONNECTION_URL) {
    throw new Error('TURSO_CONNECTION_URL is not set')
}
if (!process.env.TURSO_AUTH_TOKEN) {
    throw new Error('TURSO_AUTH_TOKEN is not set')
}


console.log(typeof process.env.TURSO_CONNECTION_URL)
//validate the url
try{
    new URL(process.env.TURSO_CONNECTION_URL);
} catch (error) {
    console.error('Invalid TURSO_CONNECTION_URL:', process.env.TURSO_CONNECTION_URL);
    throw error;

}


export default defineConfig({
    schema:'./db/schema.ts',
    out: './migrations',
    driver: 'turso',
    dialect: 'sqlite',
    dbCredentials: {
        url: process.env.TURSO_CONNECTION_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN!,
    },
});