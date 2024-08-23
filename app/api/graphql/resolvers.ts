import { db } from "@/db/db";
import { __InputValue, GraphQLError } from "graphql";

import { eq, like} from 'drizzle-orm';

import { SelectUser, SelectWord, SelectTranslation, CreateWord, CreateTranslation, words, translations } from "@/db/schema";


const resolvers = {
    
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
               // search in the words table
               const foundWords = await db.query.words.findMany({
                    where: like(words.text, `%${input}%`),
               });

               // if no words are found, search in the translations table
                if (foundWords.length === 0) {
                     const foundTranslations = await db.query.translations.findMany({
                        where: like(translations.text, `%${input}%`),
                    });

                    // now we map the found translations to their respective words
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
            } catch (error) {
                throw new GraphQLError('Error searching');
            }
        },

    },

    /**
     * Note:
     * The Word and Translation field resolvers are used to resolve the relationships between the Word and Translation types.
     * graphql uses these implicitly; 
     * e.g., when a query is made for a Word, the translations field resolver is called to resolve the translations field of the type Word.
     * find out more by searching for "graphql field resolvers..."
     */

    Word: {
        translations: async (parent: any) => {
            try {
                const theTranslations: any = await db.query.translations.findMany({
                    where: eq(translations.wordId, parent.id),
                });
                return theTranslations;
            } catch (error) {
                throw new GraphQLError('Error getting translations');
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
            } catch (error) {
                throw new GraphQLError('Error getting word');
            }
        }
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