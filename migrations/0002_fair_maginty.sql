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
