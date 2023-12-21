ALTER TABLE "user" RENAME TO "user_profile";--> statement-breakpoint
ALTER TABLE "expense" DROP CONSTRAINT "expense_user_id_user_user_id_fk";
--> statement-breakpoint
ALTER TABLE "user_profile" DROP CONSTRAINT "user_role_id_database_role_role_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "expense" ADD CONSTRAINT "expense_user_id_user_profile_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "user_profile"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_role_id_database_role_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "database_role"("role_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
