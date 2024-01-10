ALTER TABLE "user_target_budget" ADD COLUMN "budget" integer;--> statement-breakpoint
ALTER TABLE "user_target_budget" DROP COLUMN IF EXISTS "code";