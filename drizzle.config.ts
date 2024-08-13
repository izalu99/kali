

import'dotenv/config';
import { defineConfig } from 'drizzle-kit'


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
console.log(typeof url)

//validate the url 
try{
    new URL(url);
    console.log('URL is valid');
} catch (error) {
    console.error('Invalid TURSO_CONNECTION_URL');
    throw error;

}


export default defineConfig({
    schema:'./db/schema.ts',
    out: './migrations',
    driver: 'turso',
    dialect: 'sqlite',
    dbCredentials: {
        url: url ?? '',
        authToken: token,
    },
});