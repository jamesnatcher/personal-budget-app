ALTER TABLE "users" RENAME COLUMN "user_id" TO "role_id";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_user_id_database_roles_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_role_id_database_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "database_roles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
