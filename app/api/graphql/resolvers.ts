import { db } from "@/db/db";
import { __InputValue, GraphQLError } from "graphql";

import { eq, like, or} from 'drizzle-orm';

import { words, translations } from "@/db/schema";


const resolvers = {
    
    Query: {
        words: async () => {
            try{
                const words = await db.query.words.findMany();
                return words;
            } catch (error: any) {
                throw new GraphQLError('Error getting words: ', error);
            }
        },

        translations: async () => {
            try{
                const translations = await db.query.translations.findMany();
                return translations;
            } catch (error: any) {
                throw new GraphQLError('Error getting translations: ', error);
            }
        },
    
        search: async (_: any, { input }: any) => {

            const sanitizedInput = input.trim().toLowerCase();

            try {
               const foundWords = await db.query.words.findMany({
                    where: or(
                        like(words.text, `%${sanitizedInput}%`),
                        like(words.example, `%${sanitizedInput}%`),
                    ),
               });

                if (foundWords.length === 0) {
                     const foundTranslations = await db.query.translations.findMany({
                        where:like(translations.text, `%${sanitizedInput}%`)
                    });

                   
                    const wordsFromTranslations = await Promise.all(
                        foundTranslations.map(
                            async (translation: any) => {
                            const associatedWord = await db.query.words.findFirst({
                                where: eq(words.id, translation.wordId),
                            });
                            return associatedWord;
                            }
                        )
                    );

                    return wordsFromTranslations.filter((word: any) => word !== null);
                }

                return foundWords;
            } catch (error: any) {
                throw new GraphQLError('Error searching the word or translation: ', error);
            }
        },

    },

    /**
     * Resolves relationships between Word and Translation types.
     * These field resolvers are implicitly used by GraphQL.
     * For example, querying a Word calls the translations resolver.
     * More info: "GraphQL field resolvers".
     */
    Word: {
        translations: async (parent: any) => {
            try {
                const theTranslations: any = await db.query.translations.findMany({
                    where: eq(translations.wordId, parent.id),
                });
                return theTranslations;
            } catch (error: any) {
                throw new GraphQLError('Error getting translations: ', error);
            }
        }
    },


    Translation: {
        word: async (parent: any) => {
            try {
                const theWord: any = await db.query.words.findFirst({
                    where: eq(words.id, parent.wordId),
                });
                return theWord;
            } catch (error: any) {
                throw new GraphQLError('Error getting word: ', error);
            }
        }
    },




    Mutation: {

        createWord: async (_:any, { input }:any, __:any) => {
            try {
                
                const existingWord = await db.query.words.findFirst({
                    where: eq(words.text, input.text),
                });
                if (existingWord) {
                    throw new GraphQLError('Word already exists.');
                }

                
                const word = await db.insert(words).values({...input}).returning();
                return word[0];
            } catch (error: any) {
                if (error.message === 'Word already exists.') {
                    throw new GraphQLError(error.message);
                }
                throw new GraphQLError('Error creating word: ', error);
            }
        },

        createTranslation: async (_:any, { input }:any, __:any) => {
            try {
                
                const translation = await db.insert(translations).values({...input}).returning();
                return translation[0];
            
            } catch(error:any){
                throw new GraphQLError('Error creating translation: ', error);
            }
        },

        updateWord: async (_:any, { input }:any, __:any) => {
            try {
                
                const existingWord = await db.query.words.findFirst({
                    where: eq(words.id, input.id),
                });
                if (!existingWord) {
                    throw new GraphQLError('Word does not exist or Word ID not found.');
                }

                
                const word = await db.update(words).set({...input}).where(eq(words.id, input.id)).returning();
                return word[0];
            } catch (error: any) {
                if (error.message === 'Word does not exist or Word ID not found.') {
                    throw new GraphQLError(error.message);
                }
                throw new GraphQLError('Error updating word: ', error);
            }
        },


        updateTranslation: async (_:any, { input }:any, __:any) => {
            try {
                
                const existingTranslation = await db.query.translations.findFirst({
                    where: eq(translations.id, input.id),
                });
                if (!existingTranslation) {
                    throw new GraphQLError('Translation does not exist or Translation ID not found.');
                }

                
                const translation = await db.update(translations).set({...input}).where(eq(translations.id, input.id)).returning();
                return translation[0];
            }catch (error: any) {
                if (error.message === 'Translation does not exist or Translation ID not found.') {
                    throw new GraphQLError(error.message);
                }
                throw new GraphQLError('Error updating translation: ', error);
            }
        },


        
        deleteTranslationAndWord: async (_:any, { input }:any, __:any) => {
            try {
                
                const existingTranslation = await db.query.translations.findFirst({
                    where: eq(translations.id, input.id),
                });
                if (!existingTranslation) {
                    throw new GraphQLError('Translation does not exist or Translation ID not found.');
                }

                const existingWord = await db.query.words.findFirst({
                    where: eq(words.id, existingTranslation.wordId),
                });
                if (!existingWord) {
                    throw new GraphQLError('Word does not exist or Word ID not found.');
                }

                
                const deletedTranslation = await db.delete(translations).where(eq(translations.id, input.id)).returning();
                
                
                const deletedWord = await db.delete(words).where(eq(words.id, existingWord.id)).returning();

                return {
                    deletedTranslation: deletedTranslation[0],
                    deletedWord: deletedWord[0],
                }
            
            } catch (error: any) {
                if (error.message === 'Translation does not exist or Translation ID not found.' ||
                    error.message === 'Word does not exist or Word ID not found.')  {
                        throw new GraphQLError(error.message);
                }
                throw new GraphQLError('Error deleting translation and word: ', error);
            }
        },


    }
}

export default resolvers;