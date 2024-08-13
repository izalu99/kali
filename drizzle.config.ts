
//import { config } from 'dotenv'
//config({path:'.env'});
//import { defineConfig } from 'drizzle-kit'

import'dotenv/config';
import type { Config } from 'drizzle-kit'


let url = process.env.TURSO_CONNECTION_URL;
if (url?.includes(' '))  {
    url = url.trim();
}

const token = process.env.TURSO_AUTH_TOKEN;

//ensure env variables are set
if (!url) {
    throw new Error('TURSO_CONNECTION_URL is not set')
}
if (!token) {
    throw new Error('TURSO_AUTH_TOKEN is not set')
}

//log the url 
console.log('Connection URL:', url);
console.log(typeof url)

//validate the url 
try{
    new URL(url);
    console.log('URL is valid:', url);
} catch (error) {
    console.error('Invalid TURSO_CONNECTION_URL:', url);
    throw error;

}


export default {
    schema:'./db/schema.ts',
    out: './migrations',
    driver: 'turso',
    dialect: 'sqlite',
    dbCredentials: {
        url: url ?? '',
        authToken: token,
    },
} satisfies Config;