CREATE TABLE IF NOT EXISTS "expense" (
	"expense_id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"user_id" integer NOT NULL,
	"expense" integer NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "expense_tag" (
	"expense_tag_id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"expense_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "database_roles" RENAME TO "database_role";--> statement-breakpoint
ALTER TABLE "users" RENAME TO "user";--> statement-breakpoint
ALTER TABLE "database_role" RENAME COLUMN "id" TO "role_id";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "id" TO "user_id";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "users_role_id_database_roles_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user" ADD CONSTRAINT "user_role_id_database_role_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "database_role"("role_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense" ADD CONSTRAINT "expense_user_id_user_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense_tag" ADD CONSTRAINT "expense_tag_expense_id_expense_expense_id_fk" FOREIGN KEY ("expense_id") REFERENCES "expense"("expense_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
