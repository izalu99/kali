import { db } from "@/db/db";
import { GraphQLError } from "graphql";
import data from '@/data.json';

import { SelectUser, SelectWord, SelectTranslation, CreateWord } from "@/db/schema";
import { asc, count, eq, getTableColumns, gt, sql } from 'drizzle-orm';

const resolvers = {
    Query: {
        me: async () => {
            return "Hi there!";
        },
        example: async () => {
            return data;
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
        }
    },
}

export default resolvers;