import { randomUUID } from "crypto";
import { relations, sql } from 'drizzle-orm'
import {sqliteTable, text } from 'drizzle-orm/sqlite-core'



// Define the schema for the database
// tables: users, words, userRelations, wordRelations
// users: id, createdAt, email, password?, words
// words: id, createdAt, updatedAt, word, translation, type, tense, example


// make some utility functions
const id = () =>
    text('id')
        .$defaultFn(() => randomUUID())
        .primaryKey()


const createdAt = () =>
    text('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull()

const updatedAt = () =>
    text('updated_at')
        .default(sql`CURRENT_TIMESTAMP`)


export const words = sqliteTable('words',{
    id: id().primaryKey(),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
    text: text('text').notNull(),
    pronunciation: text('pronunciation'),
    type: text('type'),
    tense: text('tense'),
    example: text('example'),
});

//create a table for translations
export const translations = sqliteTable('translations',{
    id: id().primaryKey(),
    createdAt: createdAt(),
    updatedAt: updatedAt(),
    text: text('text').notNull(),
    language: text('language').notNull(),
    wordId: text('wordId').notNull().references(()=>words.id),
});

// create relations for words
export const translationRelations = relations(translations, ({ one }) =>({
    word: one(words, {
        fields: [translations.wordId],
        references: [words.id],
    }),
})
);



export const SelectWord = words.$inferSelect;
export const SelectTranslation = translations.$inferSelect;
export const CreateWord = words.$inferInsert;
export const CreateTranslation = translations.$inferInsert;
