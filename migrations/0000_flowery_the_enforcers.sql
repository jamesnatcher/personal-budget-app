CREATE TABLE IF NOT EXISTS "database_roles" (
	"id" serial PRIMARY KEY NOT NULL,
	"role" text,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text,
	"last_name" text,
	"phone" varchar(256),
	"email" text,
	"password" text,
	"user_id" integer,
	"created_at" timestamp,
	"updated_at" timestamp
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_user_id_database_roles_id_fk" FOREIGN KEY ("user_id") REFERENCES "database_roles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
