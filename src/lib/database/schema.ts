import { pgTable, serial, text, varchar, timestamp, integer, uuid } from 'drizzle-orm/pg-core';

export const databaseRole = pgTable('database_role', {
	id: serial('role_id').primaryKey(),
	role: text('role').$type<'admin' | 'moderator' | 'customer'>(),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at')
});

export type DatabasRole = typeof databaseRole.$inferSelect;

export const userProfile = pgTable('user_profile', {
	id: uuid('user_id').primaryKey(),
	firstName: text('first_name'),
	nickName: text('nick_name'),
	lastName: text('last_name'),
	phone: varchar('phone', { length: 256 }),
	email: text('email'),
	password: text('password'),
	roleId: integer('role_id').references(() => databaseRole.id),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at')
});

export type UserProfile = typeof userProfile.$inferSelect;

export const expense = pgTable('expense', {
	id: serial('expense_id').primaryKey(),
	title: text('title'),
	userId: uuid('user_id')
		.references(() => userProfile.id)
		.notNull(),
	expense: integer('expense').notNull(),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at')
});

export type Expense = typeof expense.$inferSelect;

export const expenseTag = pgTable('expense_tag', {
	id: serial('expense_tag_id').primaryKey(),
	title: text('title'),
	expenseId: integer('expense_id').references(() => expense.id),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at')
});

export type ExpenseTag = typeof expenseTag.$inferSelect;
