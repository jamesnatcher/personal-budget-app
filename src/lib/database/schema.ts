import { pgTable, serial, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";

export const databaseRole = pgTable('database_roles', {
    id: serial('id').primaryKey(),
    role: text("role").$type<"admin" | "moderator" | "customer">(),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
  });

export const user = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  phone: varchar('phone', { length: 256 }),
  email: text('email'),
  password: text('password'),
  roleId: integer('user_id').references(() => databaseRole.id),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at'),
});