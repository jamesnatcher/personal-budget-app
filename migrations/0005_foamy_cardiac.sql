CREATE TABLE IF NOT EXISTS "budget_status" (
	"budget_status_id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"user_budget_status_id" integer NOT NULL,
	"sort_order" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_budget_status" (
	"user_budget_status_id" serial PRIMARY KEY NOT NULL,
	"user_id" using uuid NOT NULL,
	"status_id" integer NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "budget_status" ADD CONSTRAINT "budget_status_user_budget_status_id_user_budget_status_user_budget_status_id_fk" FOREIGN KEY ("user_budget_status_id") REFERENCES "user_budget_status"("user_budget_status_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_budget_status" ADD CONSTRAINT "user_budget_status_user_id_user_profile_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user_profile"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_budget_status" ADD CONSTRAINT "user_budget_status_status_id_budget_status_budget_status_id_fk" FOREIGN KEY ("status_id") REFERENCES "budget_status"("budget_status_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
