CREATE TABLE IF NOT EXISTS "user_target_budget" (
	"budget_status_id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"code" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_target_budget" ADD CONSTRAINT "user_target_budget_user_id_user_profile_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user_profile"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
