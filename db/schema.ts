import { randomUUID } from "crypto";
import { relations, sql } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'


// Define the schema for the database
// tables: users, words, userRelations, wordRelations
// users: id, createdAt, email, password?, words
// words: id, createdAt, updatedAt, word, translation, type, tense, example


// make some utility functions
const id = () =>
    text('id')
        .primaryKey()
        .$default(() => randomUUID())


const createdAt = () =>
    text('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull()

const updatedAt = () =>
    text('updated_at')
        .default(sql`CURRENT_TIMESTAMP`)



export const users = sqliteTable('users',{
    id: id(),
    createdAt: createdAt(),
    email:text('email').notNull().unique(),
});

//export const userRelations = relations(users, ({ many }) =>({
//    words: many(words),
//}));


export const words = sqliteTable('words',{
    id: id(),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
    word: text('word').notNull(),
    translation: text('translation').notNull(),
    type: text('type'),
    tense: text('tense'),
    example: text('example'),
});

// export inferred types for better type safety
//export type InsertUser = typeof users.$inferInsert;
//export type SelectUser = typeof users.$inferSelect;

//export type InsertWord = typeof words.$inferInsert;
//export type SelectWord = typeof words.$inferSelect;