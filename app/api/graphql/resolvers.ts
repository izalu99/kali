import { db } from "@/db/db";
import { GraphQLError } from "graphql";
import data from '@/data.json';
import { and, asc, desc, eq, or, sql, } from 'drizzle-orm';

import { SelectUser, SelectWord, SelectTranslation, CreateWord, CreateTranslation, words, translations } from "@/db/schema";

const resolvers = {
    SearchResult : {
        __resolveType(obj: any, context: any, info: any) {
            if (obj.text) {
                return 'Word';
            }
            if (obj.language) {
                return 'Translation';
            }
            return null;
        }
    },
    Query: {

        me: async () => {
            return "Hi there!";
        },

        words: async () => {
            try{
                const words = await db.query.words.findMany();
                return words;
            } catch (error) {
                throw new GraphQLError('Error getting words');
            }
        },

        translations: async () => {
            try{
                const translations = await db.query.translations.findMany();
                return translations;
            } catch (error) {
                throw new GraphQLError('Error getting translations');
            }
        },
    
        search: async (_: any, { input }: any) => {
            try {
                let searchResults = [];
                const wordss = await db.query.words.findMany({
                    where: eq(words.text, input),
                });
                searchResults = [...wordss]; 
                
                if (wordss.length === 0) {
                    const translationss = await db.query.translations.findMany({
                        where: eq(translations.text, input),
                    });
                    searchResults = [...translationss];
                }
               
                return searchResults;
            } catch (error) {
                throw new GraphQLError('Error searching');
            }
        },

    },
}

export default resolvers;