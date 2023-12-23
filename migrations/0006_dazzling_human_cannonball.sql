ALTER TABLE "budget_status" DROP CONSTRAINT "budget_status_user_budget_status_id_user_budget_status_user_budget_status_id_fk";
--> statement-breakpoint
ALTER TABLE "budget_status" DROP COLUMN IF EXISTS "user_budget_status_id";