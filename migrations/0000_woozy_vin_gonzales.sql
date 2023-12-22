CREATE TABLE IF NOT EXISTS "database_role" (
	"role_id" serial PRIMARY KEY NOT NULL,
	"role" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "expense" (
	"expense_id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"user_id" using uuid NOT NULL,
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
CREATE TABLE IF NOT EXISTS "user" (
	"user_id" using uuid PRIMARY KEY NOT NULL,
	"first_name" text,
	"last_name" text,
	"phone" varchar(256),
	"email" text,
	"password" text,
	"role_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
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
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user" ADD CONSTRAINT "user_role_id_database_role_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "database_role"("role_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
