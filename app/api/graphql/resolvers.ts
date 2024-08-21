import { db } from "@/db/db";
import { __InputValue, GraphQLError } from "graphql";

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

    Mutation: {

        createWord: async (_:any, { input }:any, __:any) => {
            try {
                // Check if the word already exists
                const existingWord = await db.query.words.findFirst({
                    where: eq(words.text, input.text),
                });
                if (existingWord) {
                    throw new GraphQLError('Word already exists');
                }

                // Create the word (if it doesn't exist)
                const word = await db.insert(words).values({...input}).returning();
                return word[0];
            } catch (error: any) {
                if (error.message === 'Word already exists') {
                    throw new GraphQLError(error.message);
                }
                throw new GraphQLError('Error creating word');
            }
        },

        createTranslation: async (_:any, { input }:any, __:any) => {
            try {
                // Check if the translation already exists
                const existingTranslation = await db.query.translations.findFirst({
                    where: eq(translations.text, input.text),
                });
                if (existingTranslation) {
                    throw new GraphQLError('Translation already exists');
                }

                // Create the translation (if it doesn't exist)
                const translation = await db.insert(translations).values({...input}).returning();
                return translation[0];
            
            } catch(error:any){
                if (error.message === 'Translation already exists') {
                    throw new GraphQLError(error.message);
                }
                throw new GraphQLError('Error creating translation');
            }
        },

        updateWord: async (_:any, { input }:any, __:any) => {
            try {
                // Check if the word exists
                const existingWord = await db.query.words.findFirst({
                    where: eq(words.id, input.id),
                });
                if (!existingWord) {
                    throw new GraphQLError('Word does not exist or Word ID not found.');
                }

                // Update the word
                const word = await db.update(words).set({...input}).where(eq(words.id, input.id)).returning();
                return word[0];
            } catch (error: any) {
                if (error.message === 'Word does not exist or Word ID not found.') {
                    throw new GraphQLError(error.message);
                }
                throw new GraphQLError('Error updating word');
            }
        },


        updateTranslation: async (_:any, { input }:any, __:any) => {
            try {
                // Check if the translation exists
                const existingTranslation = await db.query.translations.findFirst({
                    where: eq(translations.id, input.id),
                });
                if (!existingTranslation) {
                    throw new GraphQLError('Translation does not exist or Translation ID not found.');
                }

                // Update the translation
                const translation = await db.update(translations).set({...input}).where(eq(translations.id, input.id)).returning();
                return translation[0];
            }catch (error: any) {
                if (error.message === 'Translation does not exist or Translation ID not found.') {
                    throw new GraphQLError(error.message);
                }
                throw new GraphQLError('Error updating translation');
            }
        },


        //delete a translation
        deleteTranslation: async (_:any, { id }:any, __:any) => {
            try {
                // Check if the translation exists
                const existingTranslation = await db.query.translations.findFirst({
                    where: eq(translations.id, id),
                });
                if (!existingTranslation) {
                    throw new GraphQLError('Translation does not exist or Translation ID not found.');
                }
                const deletedTranslation = await db.delete(translations).where(eq(translations.id, id)).returning();
                return deletedTranslation[0];
            
            } catch (error: any) {
                if (error.message === 'Translation does not exist or Translation ID not found.') {
                    throw new GraphQLError(error.message);
                }
                throw new GraphQLError('Error deleting translation');
            }
        },

        //delete a word
        deleteWord: async (_:any, { id }:any, __:any) => {
            try {
                // Check if the word exists
                const existingWord = await db.query.words.findFirst({
                    where: eq(words.id, id),
                });
                if (!existingWord) {
                    throw new GraphQLError('Word does not exist or Word ID not found.');
                }
                const deletedWord = await db.delete(words).where(eq(words.id, id)).returning();
                return deletedWord[0];
            
            } catch (error: any) {
                if (error.message === 'Word does not exist or Word ID not found.') {
                    throw new GraphQLError(error.message);
                }
                throw new GraphQLError('Error deleting word');
            }
        },

        



    }//end of Mutation
}//end of resolvers

export default resolvers;